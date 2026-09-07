# ppedv Kompetenzmatrix

Interaktives Vertriebstool für ppedv, um im Kundengespräch live ein individuelles
Kompetenzmodell zusammenzustellen — als Grundlage für Schulungskonzept und Angebot.

**Live:** https://claude.ai/code/artifact/d000a0b9-bdc8-4a60-a48a-f2c0e8fd4091
**Quelle:** `index.html` (einzelne, eigenständige HTML-Datei — kein Build nötig, einfach im Browser öffnen)

## Die Strategie hinter dem Ablauf

Das Werkzeug führt das Salesgespräch entlang einer einzigen Kette:

> **Wo fehlen Kompetenzen — und bei wie vielen Menschen?**
> → Zuordnung in die sechs ppedv-Kompetenzwelten
> → Kernkompetenzen (Unterkategorien) in den Worten des Kunden
> → individuelle Timeline
> → Angebot

Alles, was das Sales-Team hier sieht, sieht auch der Kunde: es gibt keine
verborgene interne Ansicht. Der Bildschirm ist das gemeinsame Arbeitsdokument.

## Ablauf im Kundengespräch

### Schritt 1 — Bedarf & Kontext

Kernstück ist die **Bedarfsaufnahme**: eine Zeile je Team oder Abteilung mit

- **Name des Bereichs** (z. B. „Vertriebsinnendienst")
- **Anzahl der Mitarbeitenden**
- **in welchen Kompetenzwelten es hakt** — die sechs Welten als Auswahl
- **was genau fehlt**, in den Worten des Kunden

Kopfzeile rechts summiert laufend mit: *„2 Bereiche · 17 Mitarbeitende ·
2 von 6 Kompetenzwelten"*. Diese Summe ersetzt die früheren Einzelfragen nach
Teilnehmerzahl und Rollen — sie ergibt sich jetzt aus der Aufnahme.

Dazu vier Eckdaten-Fragen (Anlass, Erfolgsbild, Start, Entscheidung), das
Freitextfeld „Was sagt der Kunde?" mit lokaler Stichwortsuche über den
Skill-Katalog, und ein Notizfeld.

### Schritt 2 — Kompetenzen wählen

Über dem Ring steht die **Bedarfsleiste**: je genannter Kompetenzwelt eine
Karte mit Bereichen und Kopfzahl, ein Klick springt in die Welt. Im Panel
rechts erscheint der Bedarf noch einmal samt Kundenzitat.

Der Kompetenzring zeigt die sechs Kompetenzwelten (außen) mit ihren
Kernkompetenzen (innen). Auswahl per Klick im Ring oder im Panel.

### Schritt 3 — Ergebnis & Ablauf

Tabelle **„Bedarf im Haus"** (Bereich · Personen · Kompetenzwelten · was fehlt,
mit Summenzeile), darunter das Kompetenzmodell als Karten je Welt, die
Umsetzungs-Timeline und das Partnerschaftsmodell. Export als PDF
(Browser-Druckdialog) oder als Text (Zwischenablage) — beides enthält die
Bedarfsaufnahme und die angepasste Timeline.

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
Bereichszeilen.

## Bekannte Einschränkung: KI-Zuordnung („Mit KI zuordnen")

Der Button für KI-gestützte Zuordnung ganzer Sätze zu Kompetenzwelt,
Kernkompetenz und Skill ist im Code vorhanden, aber **aktuell nicht aktiv**:
Claude Artifacts erlaubt die dafür nötige `sample`-Capability nicht auf
Artifacts, die öffentlich (jeder mit Link, ohne Login) geteilt sind — und
das Sales-Team hat keine eigenen Claude-Accounts, braucht also den offenen Link.

Ersatz bis auf Weiteres: die lokale Stichwortsuche (funktioniert ohne KI)
plus manuelles Anlegen neuer Kernkompetenzen über den „+"-Button.

Falls sich das ändert (z. B. gemeinsamer Claude-Workspace fürs Team), kann
die Capability nachträglich aktiviert werden — dazu müsste das Teilen auf
„nur Organisation" statt „jeder mit Link" umgestellt werden.

## Technisch

- Reines Vanilla-JS in einer HTML-Datei, kein Framework, kein Build-Schritt.
- Zustand liegt im `localStorage` des Browsers (pro Gerät/Browser getrennt),
  Karteien zusätzlich in der Artifact-Datenbank, wenn verfügbar.
- Datenmodell:
  - `WORLDS` — Katalog der 6 Kompetenzwelten mit Kernkompetenzen/Skills
  - `profile.teams[]` — Bedarfsaufnahme: `{name, n, worlds[], note}`
  - `state[weltId].kompExtra[]` — pro Kunde ergänzte Kernkompetenzen
  - `state[weltId].kompCustom{}` — pro Kunde umformulierte Kernkompetenzen
  - `profile.tlWeeks` / `profile.tlSpan[]` / `profile.phTitle[]` — Timeline
- `normProfile()` normalisiert und migriert das Profil beim Laden.
