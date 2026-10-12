# ppedv Kompetenzmatrix

Interaktives Vertriebstool für ppedv, um im Kundengespräch live ein individuelles
Kompetenzmodell zusammenzustellen — als Grundlage für Schulungskonzept und Angebot.

**Live (für das ganze Team, dieser Link):** https://jasminannii.github.io/ppedv-kompetenzmatrix/
**Quelle:** `index.html` (einzelne, eigenständige HTML-Datei — kein Build nötig, einfach im Browser öffnen)

Gehostet über **GitHub Pages** (Deploy from branch `main`, Ordner `/root` — Einstellung
unter Settings → Pages). Das Repo muss dafür öffentlich bleiben (kostenlos; bei privaten
Repos verlangt GitHub Pages einen bezahlten Plan). Kein sensibler Code ist darin enthalten.

Der alte Weg über einen Claude-Artifact-Link (`claude.ai/code/artifact/...`) wird nicht
mehr verwendet: Der Artifact-Sandkasten blockiert bei öffentlich geteilten Links sowohl
Datei-Downloads als auch die serverseitige Kartei-Speicherung — das ließ sich nicht
zuverlässig reparieren (siehe „Drucken und PDF" unten). GitHub Pages hat keinen solchen
Sandkasten.

## Der Ablauf im Kundengespräch

Die fünf Reiter folgen dem Termin. Jeder Schritt endet mit „Weiter: …“.

1. **Bedarf & Kontext.** Der Kunde spricht Themen an, sie werden als **Skills**
   mitgeschrieben, in seinen Worten. Jeder Skill bekommt automatisch eine
   Kompetenzwelt und **Kursvorschläge**. Ein Kurs ist dabei, wenn er **orange** ist —
   Vorschläge kommen bereits orange, ein Klick schaltet einen Kurs aus (grau) und
   wieder ein. „+ Kurs“ ergänzt weitere. Dazu kommen die Teams und die zentrale Größe des
   gesamten Teams. Ganz oben steht immer der Workshop-Skill (siehe „Kurse und Preise“).
2. **Das ppedv-Modell.** Gemeinsam die sechs Welten durchgehen. „+ übernehmen“ legt
   eine Kernkompetenz oder ein Gesprächsbeispiel als Skill an; deren Kurse erscheinen
   sofort darunter, orange = dabei, Klick schaltet um. Die Karten zeigen je
   Kernkompetenz nur Titel und Kurse; Beschreibung und volle Kurstitel beim Darüberfahren.
3. **Eure Kompetenzwelt.** Ring und Panel gemeinsam sichten und anpassen, auch die
   Kurse je Skill.
4. **Ablauf.** Durchführung (Inhouse, Hybrid, Online), Kursplan mit Priorität, Team,
   Woche und Ort, Timeline und Phasen. **Hier stehen keine Preise.**
5. **Abschluss.** Das **Kundendokument** als PDF (Kompetenzmodell, Kursplan,
   Ablauf, ohne Preise) und **separat das Angebot** als PDF (Preise, Bestandskunde,
   Anreise, Summe).

Die Kartei speichert alles; sie lässt sich später nachbearbeiten.

## Die drei Ebenen

| | Einheit | Bedeutung | Beispiel |
|---|---|---|---|
| 1 | **Kompetenzwelt** | Sechs feste Themenfelder. Der Außenring. | Daten besser nutzen |
| 2 | **Skill** | Was der Kunde nennt, in seinen Worten. Der Innenring. | „Drei Abteilungen, drei Umsatzzahlen" |
| 3 | **Team** | Wem er fehlt, mit Kopfzahl. Mehrere je Skill. | Controlling · 5 |

Nichts im Innenring ist vorgegeben: er ist leer, wenn das Gespräch beginnt, und
wächst mit jeder Zeile. Welten ohne Skill zeigen ein gestricheltes, blasses
Segment — ein Klick darauf legt dort einen Skill an.

Die **Kernkompetenzen** von ppedv (drei je Welt) sind kein Eingabefeld mehr. Sie
stehen im Panel unter „Woran ppedv dabei denkt" als Anhalt fürs Curriculum und
speisen weiter den Matcher.

**Mitarbeiterzahlen werden nicht addiert, sondern je Team maximiert.** Wenn dem
Innendienst (12 Personen) drei Skills fehlen, sind das nicht 36 Menschen. Je
Team zählt die größte Nennung, die Gesamtzahl ist deren Summe.

### Schritt 4 — Das ppedv-Modell

Eine reine Schau-Seite: der Katalog, wie er ohne Kundendaten aussieht. Der
vollständige Ring mit sechs Kompetenzwelten und ihren 18 Kernkompetenzen,
darunter je Welt eine Karte mit den Kernkompetenzen samt Beschreibung, den
typischen Sätzen aus Kundengesprächen, den Zielgruppen, den Kursen und dem
Beleg aus der Studienlage.

Ein Klick auf ein Ringsegment hebt die zugehörige Karte hervor und springt
hin. Die Seite ändert nichts am Kundendatensatz und hat einen eigenen Ring
mit eigenen Element-IDs — der Arbeitsring in Schritt 2 bleibt unberührt.

**Übernehmen.** Neben jeder Kernkompetenz und jedem typischen Thema steht
„+ übernehmen": ein Klick legt daraus einen Skill in der Kompetenzwelt des
Kunden an, mit der richtigen Welt schon gesetzt. Team und Anzahl ergänzen Sie
danach in Schritt 1. Bereits übernommene Punkte sind orange als „✓ übernommen"
markiert und gesperrt — der Abgleich läuft über den Wortlaut, damit nichts
doppelt in der Matrix landet.

Sie ist bewusst **nicht Teil des PDF**: das PDF ist die Angebotsgrundlage für
den Kunden, der Katalog würde seinen Umfang verdoppeln. Soll er mit hinein,
genügt es, die Zeile `#s4{display:none!important}` aus dem `@media print`-Block
zu löschen.

## Kurse und Preise

Die Kurse je Kompetenzwelt (`bau` in `WORLDS`) stammen aus der ppedv-Kursübersicht
(https://ppedv.de/Schulung/MicrosoftTraining, Stand 12.10.2026), mit Titel und Dauer.
Jeder Kurs steht in genau einer Welt. Ändert sich die Kursübersicht, wird nur diese
Liste gepflegt.

**Kurse hängen an den Skills.** Jeder Skill trägt seine Kurse (`ku`, je Kurs `on` = dabei).
Vorschläge kommen automatisch und ausgewählt, sobald Text und Kompetenzwelt stehen.
Angeklickte Kurse (an oder aus) bleiben; nur unberührte Vorschläge (`auto`) werden
neu berechnet, wenn sich Text oder Welt ändern. So entstehen die Vorschläge:
- Skill aus einer Kernkompetenz oder einem Gesprächsbeispiel: genau deren Kurse
  (`ku` an `komp` und `felder`).
- Freier Text: das Beispiel bzw. die Kernkompetenz der Welt mit der größten
  Wortüberschneidung; Kurstitel, die ein Stichwort des Kunden enthalten, zuerst.
  Allgemeine Titelwörter („Grundlagen“, „Administration“ …) zählen dabei nicht.
- Höchstens drei Vorschläge je Skill. Die Pflichtkurse werden nie vorgeschlagen,
  sie sind ohnehin immer dabei.

Der Kursplan in Schritt 4 ist die Vereinigung aller Skill-Kurse plus Pflichtkurs.
Das Team eines Kurses ergibt sich aus den Skills, die ihn tragen, und lässt sich
überschreiben. „×“ im Kursplan schaltet einen Kurs in allen Skills aus.

Preise erscheinen nur im Abschluss (Schritt 5) und im Angebots-PDF.

- **Preis:** jeder Kurs 3.500 €, für Bestandskunden 2.800 € (Häkchen „Bestandskunde“).
  Festgelegt in `PREIS` und `PREIS_BESTAND`.
- **Ein Workshop ist immer dabei — als Skill.** Jede Kartei beginnt mit dem Skill
  „Eigene Arbeitsabläufe mit KI umbauen“ (KI produktiv einsetzen). Er lässt sich nicht
  löschen; an ihm wird gewählt: der allgemeine, KI-unabhängige
  [Skill-Building-Workshop](https://jasminannii.github.io/ppedv-kompetenzmatrix/ki-workshop/)
  oder der [Copilot-Praxistag](https://ppedv.de/schulung/kurse/microsoft-copilot-oekosystem).
  Festgelegt in `PFLICHT_TEXT`, `ensurePflicht()`, `KURS_SKILL`, `KURS_COPILOT`.

Auswahl, Bestandskunde und Copilot-Häkchen werden mit der Kartei gespeichert.

**Durchführung und Anreise.** Im Ablauf (Schritt 4) wird die Durchführung gewählt:
- *Inhouse – vor Ort* (Standard): Alle Kurse finden beim Kunden statt, und jeder Kurs ist ein Vor-Ort-Termin mit Anreise.
- *Hybrid – vor Ort und online*: Je Kurs wird gewählt, ob er vor Ort oder online läuft. Nur die Vor-Ort-Termine kosten Anreise.
- *Online*: keine Anreise.

Der Betrag „Anreise je Vor-Ort-Termin“ wird im Abschluss beim Angebot eingetragen und geht in die Summe ein. Bleibt er leer, steht
„zzgl. Anreise (nach Aufwand)“ da.

**Kursplan: welcher Kurs, für welches Team, wann.** Die Reihenfolge der Tabelle ist
die Priorität, verschoben wird mit ↑ ↓. Je Kurs werden Team (aus den erfassten Teams),
Woche und, bei Hybrid, der Ort festgelegt. Ohne festgelegte Woche verteilen sich die
Kurse automatisch über die Phase „Schulungen“; die Zahl steht dann kursiv. Der Kursplan erscheint
als eigene Zeilen in der Timeline, im PDF (Balkenplan und Kursliste) und in der
Textkopie. In der Timeline lassen sich alle Balken ziehen: Phasen verschieben (Mitte)
oder Beginn und Ende ändern (Kanten), Kurse in eine andere Woche.

**Phasen.** Vier Phasen bilden ab, was bei einer Schulungsreihe passiert:
*Vorbereitung* (Termine, Teilnehmende, Praxisfälle, Raum/Technik) · *Schulungen* (die
Kurse laut Kursplan) · *Praxistransfer* (parallel: anwenden, Rückfragen, Spielregeln) ·
*Abschluss* (Gespräch mit der Leitung, Empfehlung). Danach die Jahrespartnerschaft.
Inhalte in `PHASES`, Standardwochen in `TLSPAN`. Ältere Karteien mit fünf Phasen
starten mit den Standardwochen.

**Gesamtes Team.** In Schritt 1 wird die Größe des gesamten Teams einmal zentral
eingetragen. Betrifft ein Skill alle, genügt je Skill ein Klick auf „Gesamtes Team“.
Die Zahl gilt überall, wo dieses Team zugeordnet ist. Weil das gesamte Team die
Abteilungen bereits enthält, wird nicht addiert: Gezählt wird das gesamte Team oder
die Summe der Abteilungen, je nachdem, was größer ist.

**Kernkompetenzen folgen dem Kursprogramm.** Jede der 18 Kernkompetenzen trägt in
`ku` die Kurse, die sie abdecken. Sie stehen im Katalog (Schritt 4) und im Panel
„Woran ppedv dabei denkt“ unter der Beschreibung. Regel: Eine Kernkompetenz ohne
passenden Kurs gehört nicht ins Modell. Auch die Unterzeilen der Welten nennen nur
Themen, die im Kursprogramm stehen.

## Kundendokument (PDF)

Zwei Seiten: **1 · Kompetenzmodell** (Kopf, Ring, ggf. „Was nicht funktioniert“ und
Erfolgsbild, „Ihre Themen“ je Welt mit Team) und **2 · Kursplan und Ablauf** (Balkenplan mit
Phasen und Kursen, Kursliste mit Team, Woche, Ort, Dauer und Agenda, Phasen in je einer
Zeile, Jahrespartnerschaft). Keine Preise — die stehen im Angebot.

## Angebot (Word aus der ppedv-Vorlage)

**Agenda-Daten.** `AGENDA` in `index.html` enthält je Kurs den Pfad der Kursseite und die
Modultitel des Abschnitts „Agenda“ (bzw. „Kursinhalt“) von ppedv.de, Stand 12.10.2026.
Für die beiden Workshops stehen die vier Schritte der Landingpages. Die Agenda steht im Word-Angebot und als kompakte Zeile je Kurs im Kundendokument (PDF) und in der Textkopie. Ändern sich Kurse auf
ppedv.de, die Liste neu auslesen; ein Kurs ohne Agenda-Abschnitt (derzeit „Power Apps und
Power Automate Fortgeschrittene“) erscheint mit dem Verweis auf die Kursbeschreibung.


„Angebot als Word“ in Schritt 5 füllt `angebot-vorlage.docx` und lädt eine .docx herunter,
die vor dem Versand in Word angepasst werden kann. Die Vorlage ist die bereinigte
ppedv-Inhouse-Vorlage: Briefkopf, Fußzeile und Schlusstext wie im Original, ohne Kunden-
und Mitarbeiterdaten, mit Platzhaltern `{{…}}` (je Platzhalter genau ein Textlauf).

- **Empfänger** (Anrede, Name, Straße, PLZ/Ort) wird im Abschluss eingetragen und mit der
  Kartei gespeichert; die Firma kommt aus dem Kundennamen.
- **Unterzeichner** (Name, Funktion, Durchwahl) bleibt im Browser der Person, die das
  Angebot schreibt (`localStorage`), nicht in der Kartei.
- **Je Kurs eine Tabelle** wie in der Vorlage: Kurs, Agenda (die Module der Kursseite
  auf ppedv.de, darunter „Schwerpunkt auf Ihre Themen“ und der Link zur Kursseite), Dauer, Termin (Woche ab Zusage), Teilnehmer (Team und Kopfzahl),
  Ort (Inhouse oder Virtual Classroom), Hardwarebereitstellung, Preis pauschal
  (3.500 € bzw. 2.800 € Bestandskunden). Die Zusatzposten der Vorlage (Vorbereitungszeit,
  zusätzliche Teilnehmer, virtuelle Maschinen) bleiben als „zuzüglich“ stehen.
- Darunter die **Zusammenfassung**: Kurse × Preis, Reisekosten, Gesamt.

Die Original-Vorlage (`*.docx`) ist per `.gitignore` vom Repo ausgeschlossen — das Repo
ist öffentlich. Nur `angebot-vorlage.docx` ist freigegeben. Ändert ppedv die Vorlage, in der neuen
Fassung dieselben Platzhalter setzen: `{{FIRMA}} {{PERSON}} {{STRASSE}} {{PLZORT}} {{DATUM}}
{{ANREDE}} {{TELEFON}} {{BEARBEITER}}`, in der (einzigen) Kurstabelle `{{ART}} {{KURS}}
{{AGENDA}} {{DAUER}} {{TERMIN}} {{TEILNEHMER}} {{ORT}} {{HARDWARE}} {{PREIS_LABEL}}
{{PREIS_INFO}} {{PREIS}}` und direkt unter der Tabelle ein Absatz `{{SUMME}}`.

## Anpassbarkeit (pro Kundengespräch, nicht global)

**Kernkompetenzen sind Vorschläge, keine Vorgaben.** Je Welt sind drei
hinterlegt; im Gespräch entsteht daraus, was der Kunde braucht:

- **Neu anlegen**: „+ Eigene Kernkompetenz in *[Welt]* anlegen" im Panel.
  Eigene sind mit `EIGENE` markiert und über `×` wieder löschbar
  (mit Sicherheitsabfrage).
- **Umformulieren**: ✎ neben jeder Kernkompetenz öffnet Name + Beschreibung.
  „Zurücksetzen" stellt den Originaltext wieder her.
- Der Ring passt sich automatisch an: ab vier Kernkompetenzen je Welt wird die
  Beschriftung kleiner und dreht sich radial mit dem Segment mit, damit sie
  auch bei sechs oder mehr Segmenten lesbar bleibt.

**Timeline frei einstellbar:**

- **Projektdauer** in Wochen (4–52) über der Zeitleiste, mit Zurücksetzen.
- **Zeitraum je Phase** (Start-/Endwoche) unter jeder Phase.
- **Titel je Phase** — der Kunde nennt Phase 1 vielleicht lieber
  „Auftakt beim Kunden". Wirkt auf Zeitleiste, Phasenliste und Textexport.

**Kopf personalisierbar:** Kundenlogo (Klick, Drag & Drop oder Einfügen aus der
Zwischenablage) und Firmenname. Das Logo erscheint auch im Zentrum des Rings.

Alle Anpassungen werden pro **Kartei** (Kundendatensatz, oben rechts im Header
speicherbar) isoliert gespeichert — sie verändern nicht den Katalog für andere
Kunden. Bestehende Karteien aus der Vorversion werden beim Laden übernommen:
alte „Rollen"- und „Teilnehmende"-Angaben wandern automatisch in
Teamzeilen.

## Wie die Zuordnung funktioniert

**Ohne KI (immer verfügbar).** Der Matcher arbeitet in drei Stufen, damit
Kundensprache auf Katalogsprache trifft:

1. **Kurze Fachbegriffe zählen.** „KI", „BI", „SQL", „HR" sind zu kurz für eine
   Längenschwelle und wurden früher stillschweigend weggefiltert — jetzt stehen
   sie auf einer Whitelist.
2. **Komposita werden aufgebrochen.** „Generationsübergreifende" enthält
   „Generation"; steckt ein Katalogwort im Kundenwort, zählt es.
3. **Trennschärfe statt Häufigkeit.** Ein Wort, das in vier oder mehr der sechs
   Welten vorkommt („drei", „liegt"), wird verworfen; ein Wort, das nur eine
   Welt trifft, zählt doppelt. Sonst gewinnt die Welt mit der längsten Prosa.

Je Welt liegt zusätzlich eine Stichwortliste (`WKEY`) in Kundensprache —
Akzeptanz, Berührungsangst, Medienbruch, Bauchgefühl und Ähnliches.

**Mit KI („Mit KI zuordnen").** Die `sample`-Capability ist deklariert, der
Button erscheint, sobald der Viewer sie bekommt. Voraussetzung ist ein
angemeldeter Claude-Account beim Betrachter — er bestätigt den ersten Aufruf
und trägt die Kosten. Wer den öffentlichen Link ohne Login öffnet, sieht den
Button nicht und arbeitet mit der lokalen Zuordnung oben, die dafür ausgelegt
ist, allein zu genügen.

## Hosting und Speicherung

Die Anwendung liegt auf **Vercel**: `index.html` als statische Datei, dazu eine
einzige Serverless-Funktion unter `api/kartei.js`.

### Warum Vercel Blob

Freie Speichermöglichkeiten auf dem Hobby-Plan, geprüft an den Vercel-Docs:

| Option | Frei enthalten | Geeignet |
|---|---|---|
| **Vercel Blob** | 1 GB, auf allen Plänen | **ja** — mit privatem Store |
| Global Config | 100.000 Lesevorgänge, **100 Schreibvorgänge** | nein, jedes Speichern ist ein Schreibvorgang |
| Marketplace (Neon, Upstash, Supabase) | eigene Kontingente | ginge, verlangt aber ein zweites Anbieterkonto |

Gewählt: **Vercel Blob mit privatem Store**. Eine Kartei ist genau ein
JSON-Dokument unter `karteien/<id>.json`. „Privat" heißt: Lesen geht nur über
unsere Funktion, nie über eine Blob-URL.

> **Achtung, Nutzungsbedingungen.** Vercel schreibt: *„the Hobby plan restricts
> users to non-commercial, personal use only."* Ein Vertriebswerkzeug für
> Kundengespräche ist kommerziell — formal verlangt das den Pro-Plan.

### Eine URL je Unternehmen

- Anlegen auf `/` → Unternehmen und Passwort → Weiterleitung auf `/k/<id>`
- `<id>` sind 12 Zeichen aus `randomBytes(9)` — nicht zu erraten
- Das Passwort ist voreingestellt Unternehmensname + Jahr (z. B. PPEDV2026), aber frei änderbar
- Gespeichert wird nur ein **scrypt-Hash** mit eigenem Salt, nie das Passwort
- Falsches Passwort und unbekannte Kartei liefern **dieselbe** 401-Antwort,
  sonst verriete der Server, welche Karteien existieren
- Nach einem Fehlversuch wartet die Funktion 400 ms — bremst Rateversuche

**Zur Stärke dieses Schutzes:** Unternehmensname + Jahr ist leicht zu erraten;
wer die URL hat und den Kunden kennt, kommt hinein. Die eigentliche Hürde ist
die nicht erratbare URL. Für höheren Schutz ein eigenes Passwort vergeben.

### Übersicht über alle Karteien

`/` zeigt die Liste aller Karteien (Unternehmen, letzte Änderung, Link) — erst nach dem
**Team-Passwort**. Auch **„+ Neue Kartei“** braucht es: Kunden sollen weder die Namen
anderer Kunden sehen noch Karteien anlegen können. Kartei-Links (`/k/<id>`, mit dem
Kartei-Passwort) und Kundenlinks (`/kunde/<id>`, mit dem Kundenpasswort) gehen ohne.

Das Team-Passwort steht in der Vercel-Umgebungsvariablen **`UEBERSICHT_PASSWORT`**. Ist sie
nicht gesetzt, antwortet die Funktion mit 503 und Übersicht und Anlegen bleiben gesperrt —
eine offene Liste wäre die schlechtere Voreinstellung. Im Browser bleibt das Passwort nur
im Arbeitsspeicher; nach dem Neuladen fragt die Schleuse erneut.

Die Liste kommt aus einem Verzeichnis-Blob `karteien/_index.json`, das bei Anlegen,
Sichern und Löschen nachgeführt wird. Es enthält nur `id`, `titel` und `updatedAt`.

### Kundenzugang

Kunden können ihre eigene Kompetenzwelt selbst anpassen — über einen eigenen Link mit
eigenem Passwort, getrennt vom internen Zugang.

1. Kartei intern öffnen (`/k/<id>`), oben **Kundenzugang** klicken, Passwort bestätigen
   (ein zufälliger Vorschlag ist vorbelegt, mind. 6 Zeichen). Der Link `/kunde/<id>` wird
   kopiert; Link und Passwort getrennt an den Kunden schicken. Ist ein Zugang aktiv, steht
   „Kundenzugang ✓“. Erneut klicken vergibt ein neues Passwort; leer lassen entzieht ihn.
2. Der Kunde sieht nur **Bedarf & Kontext**, **das ppedv-Modell** und **Eure
   Kompetenzwelt**: Themen, Teams, Kurse an den Themen, Größe des gesamten Teams, Wahl des
   Workshops. Keine Kartei-Knöpfe, keine Übersicht, Name und Logo nur zur Anzeige, keine
   Gesprächsnotizen, kein Ablauf, kein Abschluss, keine Preise.

**Durchgesetzt wird das auf dem Server** (`api/kartei.js`), nicht nur in der Oberfläche:
- Mit `rolle: "kunde"` prüft die Funktion das Kundenpasswort (`kundeSalt`/`kundeHash`),
  nie das interne. Das Kundenpasswort öffnet keine andere Kartei und nicht die interne
  Ansicht.
- `oeffnen` liefert dem Kunden nur `name`, `logo`, `skills`, `gesamtN`, `copilotOnly`.
- `sichern` übernimmt vom Kunden nur `skills`, `gesamtN`, `copilotOnly`; alles andere
  (Name, Logo, Kursplan, Preise, Angebot, Notizen) bleibt wie gespeichert.
- `loeschen` und `kundenzugang` sind für Kunden gesperrt (403).

Bearbeiten Kunde und ppedv gleichzeitig, gewinnt die zuletzt gespeicherte Fassung. Vor
eigenen Änderungen die Kartei deshalb neu laden, wenn der Kunde gerade daran war.

### Kein Browser-Speicher mehr

`localStorage` kommt nicht mehr vor. Der Zustand lebt im Arbeitsspeicher der
Seite und wird 1,5 Sekunden nach der letzten Änderung zum Server geschrieben
(`scheduleSave` → `sichern`). Das Passwort bleibt ebenfalls nur im
Arbeitsspeicher: nach dem Neuladen fragt die Schleuse erneut.

### Dateien

```
index.html        die Anwendung, eine Datei
api/kartei.js     anlegen / oeffnen / sichern / loeschen / uebersicht, per POST
vercel.json       Rewrites /k/:id und /kunde/:id → /index.html
package.json      @vercel/blob
```

Blobs: `karteien/<id>.json` je Kartei, `karteien/_index.json` als Verzeichnis.

### Einrichten

1. Repository mit Vercel verbinden
2. Im Vercel-Dashboard einen **Blob-Store mit Zugriffsmodus „private"** anlegen
   (der Modus lässt sich später nicht ändern) und mit dem Projekt verbinden
3. Unter **Settings → Environment Variables** `UEBERSICHT_PASSWORT` setzen (Team-Passwort
   für Übersicht und Anlegen), für „Production“
4. Deployen — die Funktion authentifiziert sich über OIDC, es ist kein Token
   im Code nötig

Lokal testen ohne Vercel-Konto: `api/kartei.js` lässt sich gegen eine
Speicher-Attrappe laufen lassen, da es außer `@vercel/blob` nichts importiert.

## Technisch

- Reines Vanilla-JS in einer HTML-Datei, kein Framework, kein Build-Schritt.
- Datenmodell — eine flache Liste ist der Kern:
  - `profile.skills[]` — `{id, text, welt, teams:[{name,n}], note}`
  - `WORLDS[]` — Katalog der 6 Kompetenzwelten; `komp`, `felder`, `ziel`, `bau`
    sind nur noch Vorschläge und Suchmaterial, kein Auswahlzustand mehr
  - `profile.gesagt` — Mitschrift „Was sagt der Kunde?"
  - `profile.tlWeeks` / `tlSpan[]` / `phTitle[]` — Timeline
- `skillsFromV4()` überführt Karteien älterer Fassungen.
- `normProfile()` normalisiert das Profil bei jedem Laden.

## Drucken und PDF

Das PDF wird **clientseitig selbst gebaut**, kein Druckdialog nötig. Grundlage
ist **jsPDF** von cdnjs.

**Verlaufsnotiz (nicht mehr relevant, aber als Warnung stehen gelassen):** Auf
dem alten Claude-Artifact-Link scheiterte sowohl `window.print()` (Sandkasten
ohne `allow-modals`) als auch eine PDF-Vorschau in einem `<iframe src="blob:...">`
— Letzteres wurde von Edge und teils Chrome als „blockiert" abgewiesen, auch
außerhalb jedes Sandkastens. Die heutige Lösung ist der Web-Standardweg: ein
programmatisch angeklickter `<a download>`-Link (`downloadBlob()`). Der
funktioniert browserübergreifend zuverlässig, ganz ohne Capability-Deklaration
oder Sandkasten-Rücksicht. `zeigePDF()` (iframe-Vorschau) bleibt nur als letzter
Fallback im Code, falls ein Browser auch den `<a download>`-Weg verweigert.

**Aufbau des Dokuments** (`buildPDF(scope)`), A4 hochkant:

1. Kopf: ppedv-Marke, Datum, Kundenname, Kennzahlenzeile
2. Der Kompetenzring als Grafik, mittig, mit Bildunterschrift
3. „Aus dem Gespräch": die Worte des Kunden — wenig Kontext, wie gewünscht
4. „Das Kompetenzmodell": je Welt die Skills mit Teams und Anzahl
5. Nur im vollen Umfang: Balkenplan der Phasen, Phasendetails, Partnerschaft

Der Ring wird aus dem SVG heraus in eine Grafik verwandelt. Zwei Fallstricke
stecken darin:

- **Berechnete Stile müssen vorher fest eingetragen werden.** `var()` und
  `color-mix()` überleben das Serialisieren nicht — sonst käme der Ring
  schwarz heraus.
- **Der `xlink`-Namensraum muss deklariert sein.** Die Weltnamen liegen auf
  `textPath` mit `xlink:href`; ohne `xmlns:xlink` ist die Grafik kein gültiges
  XML und lädt nicht. Genau daran scheiterte der erste Versuch — stillschweigend,
  das PDF kam einfach ohne Ring.

Für den Druck wird kurz `data-theme="light"` erzwungen: ein Druckstück ist
immer hell, auch wenn der Bildschirm gerade dunkel steht. Die Farben im PDF
sind fest hinterlegt, nicht aus den CSS-Variablen gelesen.

Fällt jsPDF aus, gibt die Seite ersatzweise ein in sich geschlossenes
HTML-Dokument aus, das sich beim Öffnen selbst zum Drucken anbietet.

Dateiname: `Kompetenzmatrix-<Kunde>[-Modell]-<JJJJMMTT>.pdf`.

**Die Druckausgabe ist auf den Kunden zugeschnitten**, nicht auf den Vertrieb:
Bedienhinweise (`.lead`, `.hint`, `.need-hint`) fallen weg, das Eckdaten-Formular
ebenso — dessen Inhalt steht schon im Streifen „Im Gespräch notiert". Ein leeres
Kundenfeld verschwindet über `:placeholder-shown`, statt den Platzhalter zu
drucken. Und `main` wird im Druck zur Flex-Spalte, damit die Reihenfolge stimmt:
Erklärung → Matrix → Ergebnis, unabhängig von der DOM-Reihenfolge der Reiter.

## Kartei-Speicherung (Supabase)

Gemeinsame Karteien liegen in einer **Supabase**-Tabelle `karteien`
(Spalten: `id text primary key`, `doc jsonb`, `updated_at timestamptz`),
angesprochen per einfachem `fetch()` gegen die REST-API — kein SDK, kein
Build-Schritt, passt zum Rest des Codes.

```sql
create table if not exists karteien (
  id text primary key,
  doc jsonb not null,
  updated_at timestamptz not null default now()
);
alter table karteien enable row level security;
create policy "anon all" on karteien for all to anon using (true) with check (true);
```

Projekt-URL und `anon`-Key (Supabase-Dashboard → Project Settings → API Keys →
Tab **„Legacy anon, service_role API keys"** — nicht den neuen „Publishable key"
verwenden, dessen REST-Kompatibilität mit reinem `fetch()` ungeprüft ist) stehen
direkt im Code (`SB_URL`, `SB_KEY` in `index.html`). Der `anon`-Key ist zur
Einbettung im Frontend gedacht — Schutz kommt über die Row-Level-Security-Regel
oben, nicht über Geheimhaltung des Keys. **Den `service_role`-Key niemals
verwenden oder committen.**

Kostenloser Supabase-Plan reicht für diesen Anwendungsfall (500 MB, weit mehr
als genug Text-Karteien). Einzige Besonderheit: Ein kostenloses Projekt
pausiert automatisch nach 7 Tagen ganz ohne Zugriff — Daten bleiben erhalten,
im Dashboard reicht ein Klick auf „Restore" zum Reaktivieren.

Vor dieser Umstellung lag jede Kartei nur im `localStorage` des jeweiligen
Browsers (die Claude-Artifact-`db`-Capability war außerhalb von Claude nie
erreichbar) — nicht teamübergreifend sichtbar. Das ist jetzt behoben.

## Noch offen

**Versionshistorie der Kartei** (Punkt 7 des Ablaufs). Heute überschreibt
`Store.put()` den letzten Stand; frühere Fassungen sind nicht mehr abrufbar.
Geplant als eigener Schritt.
