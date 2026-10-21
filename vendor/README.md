# vendor/ – lokal gehostete Fremddateien (Datenschutz)

Damit beim Aufruf keine IP-Adressen an Google oder Cloudflare gehen, liegen Schriften
und Bibliotheken hier im Repo statt auf externen CDNs. Eingebunden mit absoluten Pfaden
(`/vendor/...`), damit sie auch unter `/k/<id>` und `/kunde/<id>` funktionieren.

| Datei | Herkunft | Lizenz |
|---|---|---|
| `fonts.css`, `fonts/*.woff2` | Google Fonts: Archivo, IBM Plex Mono, Source Serif 4, Plus Jakarta Sans (nur Latin/Latin-Ext) | SIL Open Font License 1.1 |
| `jspdf.umd.min.js` | jsPDF 2.5.1 | MIT |

Neue Schriften oder Versionen nie wieder per Google-/CDN-Link einbinden, sondern hier ablegen.
