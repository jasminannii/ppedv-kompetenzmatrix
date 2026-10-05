/* Eine Kartei = ein privates Blob unter karteien/<id>.json.
   Privat heißt: lesen geht nur über diese Funktion, nie über eine Blob-URL.
   Das Passwort verlässt den Server nie — gespeichert wird nur ein scrypt-Hash. */
import { put, get, del } from "@vercel/blob";
import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

const pfad = id => `karteien/${id}.json`;
const neueId = () => randomBytes(9).toString("base64url");       // 12 Zeichen, nicht zu erraten
const istId = v => typeof v === "string" && /^[A-Za-z0-9_-]{6,40}$/.test(v);

const hashen = (pw, salt) => scryptSync(String(pw), salt, 64).toString("base64");
function stimmt(pw, salt, hash) {
  const a = Buffer.from(hashen(pw, salt), "base64");
  const b = Buffer.from(String(hash || ""), "base64");
  return a.length === b.length && timingSafeEqual(a, b);
}

async function lesen(id) {
  /* useCache:false — sonst liefert der CDN-Cache bis zu 60 s lang den alten Stand */
  const r = await get(pfad(id), { access: "private", useCache: false });
  if (!r || r.statusCode !== 200 || !r.stream) return null;
  const leser = r.stream.getReader(), dec = new TextDecoder();
  let txt = "";
  for (;;) {
    const { done, value } = await leser.read();
    if (done) break;
    txt += dec.decode(value, { stream: true });
  }
  txt += dec.decode();
  try { return JSON.parse(txt); } catch { return null; }
}

const schreiben = (id, satz) => put(pfad(id), JSON.stringify(satz), {
  access: "private", allowOverwrite: true,
  contentType: "application/json", cacheControlMaxAge: 0
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ fehler: "Nur POST." });
  let b = req.body;
  if (typeof b === "string") { try { b = JSON.parse(b || "{}"); } catch { b = {}; } }
  b = b || {};
  const { aktion, id, passwort } = b;

  try {
    if (aktion === "anlegen") {
      const titel = String(b.titel || "").trim();
      const pw = String(passwort || "");
      if (!titel) return res.status(400).json({ fehler: "Unternehmen fehlt." });
      if (pw.length < 3) return res.status(400).json({ fehler: "Passwort braucht mindestens 3 Zeichen." });
      const neu = neueId(), salt = randomBytes(16).toString("base64");
      await schreiben(neu, {
        v: 1, titel, salt, hash: hashen(pw, salt),
        angelegtAm: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        data: b.data || null
      });
      return res.status(200).json({ id: neu, titel });
    }

    if (!istId(id)) return res.status(400).json({ fehler: "Ungültige Kartei-Adresse." });
    const satz = await lesen(id);
    /* Gleiche Antwort wie bei falschem Passwort: sonst verrät der Server,
       welche Karteien es gibt. */
    if (!satz || !stimmt(passwort, satz.salt, satz.hash)) {
      await new Promise(r => setTimeout(r, 400));        // bremst Rateversuche
      return res.status(401).json({ fehler: "Passwort stimmt nicht." });
    }

    if (aktion === "oeffnen")
      return res.status(200).json({ titel: satz.titel, data: satz.data, updatedAt: satz.updatedAt });

    if (aktion === "sichern") {
      satz.data = b.data ?? satz.data;
      if (typeof b.titel === "string" && b.titel.trim()) satz.titel = b.titel.trim();
      satz.updatedAt = new Date().toISOString();
      await schreiben(id, satz);
      return res.status(200).json({ updatedAt: satz.updatedAt });
    }

    if (aktion === "loeschen") {
      await del(pfad(id));
      return res.status(200).json({ ok: true });
    }
    return res.status(400).json({ fehler: "Unbekannte Aktion." });
  } catch (e) {
    console.error("kartei", aktion, e);
    return res.status(500).json({ fehler: "Serverfehler." });
  }
}
