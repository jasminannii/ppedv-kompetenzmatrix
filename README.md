# ppedv Kompetenzmatrix

Interaktives Vertriebstool für ppedv, um im Kundengespräch live ein individuelles
Kompetenzmodell zusammenzustellen — als Grundlage für Schulungskonzept und Angebot.

**Live:** https://claude.ai/code/artifact/d000a0b9-bdc8-4a60-a48a-f2c0e8fd4091
**Quelle:** `index.html` (einzelne, eigenständige HTML-Datei — kein Build nötig, einfach im Browser öffnen)

## Ablauf im Kundengespräch

1. **Schritt 1 — Kontext**: Der Kunde erzählt, was nicht funktioniert. Im Feld
   "Was sagt der Kunde?" wird live mitgeschrieben; eine lokale Stichwortsuche
   schlägt passende Skills aus dem Katalog vor. Dazu die sechs Eckdaten-Fragen
   (Teilnehmende, Rollen, Start, Entscheidung, Anlass, Erfolgsbild).
2. **Schritt 2 — Kompetenzen wählen**: Der Kompetenzring zeigt sechs
   Kompetenzwelten (außen) mit je drei (oder mehr) Kernkompetenzen (innen).
   Auswahl per Klick im Ring oder im Panel rechts.
3. **Schritt 3 — Ergebnis & Ablauf**: Zusammenfassung als Karten je
   Kompetenzwelt, Umsetzungs-Timeline (5 Phasen) und Partnerschaftsmodell.
   Export als PDF (Browser-Druckdialog) oder als Text (Zwischenablage).

## Anpassbarkeit (pro Kundengespräch, nicht global)

- **Kernkompetenzen umformulieren**: ✎-Symbol neben jeder Kernkompetenz im
  Panel öffnet ein Formular für Name + Beschreibung. Wird in den Worten des
  Kunden gespeichert, wirkt sich auf Ring, Panel, Ergebnis-Karten und
  Text-Export aus. "Zurücksetzen" stellt den Original-Text wieder her.
- **Neue Kernkompetenz ergänzen**: "+ Eigene Kernkompetenz hinzufügen" im
  Panel. Passt aus dem Kundengespräch nichts Vorhandenes, wird hier direkt
  eine neue erstellt und ausgewählt. Der Ring passt sich automatisch an
  (variable Segmentanzahl pro Kompetenzwelt).
- **Zeitraum pro Phase anpassen**: In Schritt 3 unter jeder Phase lässt sich
  der Wochenzeitraum (Start/Ende) individuell einstellen, mit Zurücksetzen-Option.
- Alle Anpassungen werden pro **Kartei** (Kundendatensatz, oben rechts im
  Header speicherbar) isoliert gespeichert — sie verändern nicht den
  Katalog für andere Kunden.

## Bekannte Einschränkung: KI-Zuordnung ("Mit KI zuordnen")

Der Button für KI-gestützte Zuordnung ganzer Sätze zu Kompetenzwelt,
Kernkompetenz und Skill ist im Code vorhanden, aber **aktuell nicht aktiv**:
Claude Artifacts erlaubt die dafür nötige `sample`-Capability nicht auf
Artifacts, die öffentlich (jeder mit Link, ohne Login) geteilt sind — und
das Sales-Team hat keine eigenen Claude-Accounts, braucht also den offenen Link.

Ersatz bis auf Weiteres: die lokale Stichwortsuche (funktioniert ohne KI)
plus manuelles Ergänzen neuer Kernkompetenzen über den "+"-Button.

Falls sich das ändert (z. B. gemeinsamer Claude-Workspace fürs Team), kann
die Capability nachträglich aktiviert werden — dazu müsste das Teilen auf
"nur Organisation" statt "jeder mit Link" umgestellt werden.

## Technisch

- Reines Vanilla-JS in einer HTML-Datei, kein Framework, kein Build-Schritt.
- Zustand liegt im `localStorage` des Browsers (pro Gerät/Browser getrennt).
- Datenmodell: `WORLDS` (6 feste Kompetenzwelten mit Kernkompetenzen/Skills)
  als Katalog; `state[weltId].kompExtra` für pro-Kunde ergänzte
  Kernkompetenzen; `state[weltId].kompCustom` für pro-Kunde umformulierte
  Original-Kernkompetenzen; `profile.tlSpan` für individuelle Timeline-Zeiträume.
