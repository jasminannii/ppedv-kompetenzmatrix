# ppedv Kompetenzmatrix — Projektkontext für Claude

Dieses Repo gehört Jasmin Meilner (ppedv AG, Vertrieb/Kompetenzentwicklung). Es enthält
mehrere zusammenhängende Werkzeuge rund um das **ppedv-Kompetenzmodell**. Ausführliche
Doku steht in `README.md` — dies hier ist der Überblick und die Arbeitsweise.

## Wie Jasmin arbeitet

- Kommunikation auf **Deutsch**, kurz und konkret. Oft unter Zeitdruck — Ergebnisse
  müssen **sofort live** sein.
- Oberflächen: **so wenig Text wie möglich**, übersichtlich, ppedv-Design (Navy + Orange).
- Nach jeder Änderung: committen, auf `main` pushen, prüfen, dass es auf Vercel live ist.
- Passwörter auf der Produktivseite gibt Claude nicht selbst ein — stattdessen Links und
  genaue Schritte nennen. Lokale Tests mit Testdaten sind ok.

## Wo es läuft

- **Team-Adresse (mit Speicherung):** https://ppedv-kompetenzmatrix.vercel.app
  (Vercel, privater Blob-Store für Karteien, Funktion `api/kartei.js`).
- **GitHub Pages:** https://jasminannii.github.io/ppedv-kompetenzmatrix/ — statisch, **ohne**
  Speicherung; zeigt dann einen Hinweis statt der Kartei-Übersicht.
- Repo: `jasminannii/ppedv-kompetenzmatrix` (**öffentlich!** — keine Kundendaten,
  Passwörter oder Original-Vorlagen committen; `*.docx` und `uebergabe/` sind in `.gitignore`).
- Push auf `main` deployt beide. **Der erste Vercel-Build nach einem Push schlägt oft ohne
  Codefehler fehl** → leeren Commit nachschieben (`git commit --allow-empty`), dann klappt es.
  Status prüfen über die öffentliche GitHub-API (`/commits/<sha>/status`).

## Was es gibt

| Pfad | Was |
|---|---|
| `/` (`index.html`) | **Kompetenzmatrix** — Vertriebswerkzeug fürs Kundengespräch, eine Datei, kein Build |
| `/k/<id>` | eine Kunden-Kartei (intern, mit Kartei-Passwort) |
| `/kunde/<id>` | **Kundenzugang** (eigenes Kundenpasswort, eingeschränkte Ansicht) |
| `/anleitung/` | Schritt-für-Schritt-Anleitung für Kunden (Sie-Form) |
| `/kompetenzmodell/` | **Landingpage für ppedv.de**: Modell erklärt + Selbsterstellung + Anfrage per Mail an kompetenz@ppedv.de; einbettbar per iframe |
| `/ki-workshop/` | Landingpage Skill-Building-Workshop mit Konfigurator |
| — | **Angebotsgenerator** ist ein **eigenes Projekt**: Repo `jasminannii/ppedv-angebotsgenerator` (privat), live https://ppedv-angebotsgenerator.vercel.app. Die Matrix verlinkt nur dorthin (`ANGEBOT_URL`); Kategorie 3 kommt per Link (Abschluss → „Angebot erstellen“). Änderungen am Generator im eigenen Repo, nicht hier. |
| `angebot-vorlage.docx` | bereinigte ppedv-Inhouse-Angebotsvorlage mit `{{Platzhaltern}}` |
| `api/kartei.js` | Vercel-Funktion: anlegen/oeffnen/sichern/loeschen/uebersicht/kundenzugang |

## Die Matrix in Kürze (Gesprächsablauf = 5 Reiter)

1. **Bedarf & Kontext** — Themen („Skills“) des Kunden in seinen Worten; Kompetenzwelt und
   Kursvorschläge kommen automatisch (orange = Kurs dabei, Klick schaltet um).
   Oben „Gesamtes Team“ (zentrale Kopfzahl). Ganz oben immer der Workshop-Skill
   „Eigene Arbeitsabläufe mit KI umbauen“ mit Wahl Skill-Building-Workshop oder Copilot-Praxistag.
2. **Das ppedv-Modell** — Ring + Karten; „+ übernehmen“ legt eine Kernkompetenz als Skill an,
   deren Kurse kommen **grau** (von Hand dazunehmen).
3. **Eure Kompetenzwelt** — Ring/Panel gemeinsam sichten.
4. **Ablauf** — Durchführung (Inhouse/Hybrid/Online), Kursplan (Priorität ↑↓, Team, Woche,
   Ort), Timeline mit ziehbaren Balken, 4 Phasen (Vorbereitung, Schulungen, Praxistransfer,
   Abschluss), danach Jahrespartnerschaft. **Keine Preise.**
5. **Abschluss** — Kundendokument als PDF (2 Seiten, ohne Preise) und **Angebot**: Hauptweg ist
   „Angebot erstellen“ → Angebotsgenerator (Kunden-Nr. = Angebots-Nr., Kontakt bei ppedv,
   Preise als Netto/USt./Brutto wie im Generator, Dateiname `ANG-<Kunden-Nr.>_<Firma>`);
   „Als Word“ baut weiterhin das alte Angebot aus `angebot-vorlage.docx`.

Daten im Code: `WORLDS` (6 Kompetenzwelten × 3 Kernkompetenzen mit `ku` = Kurse,
`felder` = Gesprächsbeispiele, `bau` = 91 Kurse aus der ppedv-Kursübersicht), `AGENDA`
(Modultitel je Kurs von ppedv.de), `PHASES`, `KU_VER` (hochzählen, wenn sich die
Kurszuordnung ändert).

## Feste Entscheidungen (von Jasmin bestätigt)

- **Nicht gendern**, generisch schreiben („Mitarbeiter“, „Teilnehmer“) — gilt für alle Seiten und Dokumente.
- Preise: jeder Kurs **3.500 €**, Bestandskunden **2.800 €**; Anreise je Vor-Ort-Termin.
- **Mehr als 10 Teilnehmer je Kurs:** Kurs wird mehrfach gebucht, jeder weitere Durchgang **−20 %**;
  jeder Vor-Ort-Durchgang ist ein eigener Anreise-Termin (gleich im Angebotsgenerator).
- Einer der beiden KI-Workshops ist **immer** dabei (als Skill, Wahl allgemein/Copilot).
- Kartei-Passwort vorbelegt: Unternehmensname in Großbuchstaben + Jahr (z. B. `PPEDV2026`).
- **Kartei-Übersicht bleibt offen** (kein Team-Passwort).
- Kundenzugang: Kunde sieht/ändert nur Themen, Teams, Kurse, Teamgröße, Workshop-Wahl —
  serverseitig in `api/kartei.js` durchgesetzt. Name/Logo/Ablauf/Abschluss/Preise intern.
- Landingpage Kompetenzmodell: Selbsterstellung **nur über Kompetenzwelten** (keine Details);
  Anfrage öffnet das E-Mail-Programm (`mailto:` an kompetenz@ppedv.de).

## Lokal testen

- Statisch: `python3 -m http.server 8766` im Repo (ohne API → Hinweis statt Übersicht).
- Mit API: `api/kartei.js` mit einem Fake für `@vercel/blob` (put/get/del im Speicher) in
  einem kleinen Node-Server laufen lassen; `/k/:id` und `/kunde/:id` auf `index.html` umleiten.

## Datenschutz

- **Keine externen CDNs/Google Fonts.** Schriften und Bibliotheken liegen in `vendor/`
  (siehe `vendor/README.md`); neue Abhängigkeiten ebenfalls dort ablegen.
- Offen: Hosting in der EU (Vercel = US-Anbieter), Datenschutzhinweis/Impressum,
  Zugriffsschutz der Kartei-Übersicht — Entscheidung mit IT/Datenschutzbeauftragtem.
