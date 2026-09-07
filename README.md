# ppedv Kompetenzmatrix

Interaktives Vertriebstool für ppedv, um im Kundengespräch live ein individuelles
Kompetenzmodell zusammenzustellen — als Grundlage für Schulungskonzept und Angebot.

**Live:** https://claude.ai/code/artifact/d000a0b9-bdc8-4a60-a48a-f2c0e8fd4091
**Quelle:** `index.html` (einzelne, eigenständige HTML-Datei — kein Build nötig, einfach im Browser öffnen)

## Der Ablauf im Kundengespräch

Das Werkzeug bildet einen Verkaufstermin ab, nicht einen Fragebogen:

1. **Fragen stellen** — was sind die Herausforderungen, in welchen Teams,
   und tiefer nachfassen.
2. **Mitschreiben.** Jedes genannte Thema ist ein **Skill**, in den Worten des
   Kunden. Er bekommt eine der sechs **Kompetenzwelten** zugeordnet — der
   Vorschlag kommt automatisch aus dem Text.
3. **Teams dazu.** Wem fehlt der Skill, und wie viele Mitarbeitende betrifft es
   dort? Mehrere Teams je Skill mit eigener Zahl.
4. **Matrix live zeigen.** „Eure Kompetenzwelt" baut sich zeitgleich auf — der Ring ist das
   Ergebnis der Erfassung, nicht ein Katalog zum Abhaken. Danach Ergebnis und
   Ablauf durchgehen, Zeitbalken bei Bedarf verschieben.
5. **PDF sichern, Kartei speichern.**
6. PDF an den Kunden senden.
7. Kartei später nachbearbeiten. *(Versionshistorie ist noch offen — siehe unten.)*

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

## Technisch

- Reines Vanilla-JS in einer HTML-Datei, kein Framework, kein Build-Schritt.
- Zustand liegt im `localStorage` des Browsers (pro Gerät/Browser getrennt),
  Karteien zusätzlich in der Artifact-Datenbank, wenn verfügbar.
- Datenmodell — eine flache Liste ist der Kern:
  - `profile.skills[]` — `{id, text, welt, teams:[{name,n}], note}`
  - `WORLDS[]` — Katalog der 6 Kompetenzwelten; `komp`, `felder`, `ziel`, `bau`
    sind nur noch Vorschläge und Suchmaterial, kein Auswahlzustand mehr
  - `profile.gesagt` — Mitschrift „Was sagt der Kunde?"
  - `profile.tlWeeks` / `tlSpan[]` / `phTitle[]` — Timeline
  - Kein `state` mehr: die frühere Fassung hielt je Welt Auswahl-Arrays, die
    aus dem Modell verschwunden sind
    `teamNames() ∪ profile.ziele`
  - `state[weltId].kompExtra[]` — pro Kunde ergänzte Kernkompetenzen
  - `state[weltId].kompCustom{}` — pro Kunde umformulierte Kernkompetenzen
  - `profile.tlWeeks` / `profile.tlSpan[]` / `profile.phTitle[]` — Timeline
- `skillsFromV4()` überführt Karteien der team-first-Fassung: aus jedem
  gewählten Skill und jeder Kernkompetenz wird eine Skill-Zeile, die
  Welt-Zielgruppen werden zu Teams. Läuft beim Laden der Kartei und beim ersten
  Start aus dem alten localStorage-Schlüssel.
- `normProfile()` normalisiert das Profil bei jedem Laden.

## Drucken und PDF

Der Artifact-Rahmen läuft mit
`sandbox="allow-scripts allow-same-origin allow-forms"`. Ohne `allow-modals`
bleibt `window.print()` **wirkungslos** — es wirft nicht einmal eine Ausnahme,
der Knopf schien einfach nichts zu tun. Popups und Downloads sind ebenso
gesperrt; `capabilities: {downloads: true}` wird beim Veröffentlichen
mit 422 abgelehnt, solange „jeder mit dem Link" eingestellt ist.

Die Seite misst das: schlägt `beforeprint` nicht innerhalb von 700 ms an, gibt
sie stattdessen **eine Datei aus** — über die `downloads`-Capability, die seit
der Umstellung der Freigabe deklariert ist.

Die Datei ist ein **in sich geschlossenes HTML-Dokument**: derselbe Stand,
dieselben Stile, ohne die App-Skripte, mit `body.pm-model` beim schmalen Umfang.
Beim Öffnen springt der Druckdialog von selbst auf — dort „Als PDF sichern".
Aus dem Rahmen heraus geht Drucken nicht, aus einer lokalen Datei schon.

`input.value` steckt nur in der Eigenschaft, nicht im Markup; die Werte werden
deshalb vor dem Serialisieren als Attribute gesetzt, sonst wäre der Kundenname
in der Datei leer.

Dateiname: `Kompetenzmatrix-<Kunde>[-Modell]-<JJJJMMTT>.html`.

**Die Druckausgabe ist auf den Kunden zugeschnitten**, nicht auf den Vertrieb:
Bedienhinweise (`.lead`, `.hint`, `.need-hint`) fallen weg, das Eckdaten-Formular
ebenso — dessen Inhalt steht schon im Streifen „Im Gespräch notiert". Ein leeres
Kundenfeld verschwindet über `:placeholder-shown`, statt den Platzhalter zu
drucken. Und `main` wird im Druck zur Flex-Spalte, damit die Reihenfolge stimmt:
Erklärung → Matrix → Ergebnis, unabhängig von der DOM-Reihenfolge der Reiter.

**Die Alternative zur Freigabe: irgendwo selbst hosten.** `index.html` ist eine
einzelne Datei ohne Abhängigkeiten außer Google Fonts. Auf einem beliebigen
Webserver — oder auch nur lokal geöffnet — gibt es keinen Sandkasten, und
Drucken funktioniert nativ.

**Wichtig: die Freigabe darf nicht zurück auf „Anyone with the link".** Sobald
sie das täte, ließe sich `downloads` nicht mehr deklarieren und die
Dateiausgabe fiele wieder aus. Dieselbe Sperre betrifft `sample` (KI-Zuordnung)
und `db` (server-seitige Karteien) — beide sind jetzt möglich, aber noch nicht
deklariert.

## Noch offen

**Versionshistorie der Kartei** (Punkt 7 des Ablaufs). Heute überschreibt
`Store.put()` den letzten Stand; frühere Fassungen sind nicht mehr abrufbar.
Geplant als eigener Schritt.
