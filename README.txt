GALAXY MORPHOLOGY EXPLORER — FIRST STATIC WEBSITE PROTOTYPE

INSTALL
1. This archive contains website code, NOT your scientific data.
2. Copy its contents into the existing galaxy_explorer_web folder.
   index.html, app.js, styles.css, serve_local.py, data/, and previews/
   must be siblings. Do not delete or replace data/ or previews/.
3. For simplest testing, copy the complete combined folder to your own
   laptop/desktop. The export is approximately 45 MiB.
4. In a terminal in that folder run:
      python serve_local.py
   If necessary use python3 or py -3 instead of python.
5. Open http://127.0.0.1:8000/ on THAT computer. Keep the terminal open.
   Ctrl+C stops the local server. Internet access to cdn.plot.ly is needed.

REMOTE SYSTEMS
localhost in your laptop browser does not mean the research server.
Do not use --bind 0.0.0.0 to bypass this and do not expose research-system
ports publicly. If testing remotely, use your institution's approved
port-forwarding/Jupyter proxy workflow; this package does not configure it.

FEATURES
- Loads every exported fitted row; no sample cap and no refit.
- PCA/Measurements views, property colors, redshift and cluster filters.
- Fixed fitted-cohort 1st/99th percentile color and viewport limits,
  full/manual alternatives, missing colors gray, offscreen counts.
- Hover preview, click to pin, preview-example menu, raw/overlay switch.
- Retained selected-row IDs across filters and CSV export of stored values.
- Preview/data fit ID checks; missing/failed masks explicitly unavailable.

FIRST TEST
- Check row count and fit ID against notebook export.
- Choose exported previews from the inspector dropdown; confirm 48 images,
  46 available overlays and the two explicit mask errors in your export.
- Change to Measurements and select mass/SFR; no additional log is applied.
- Try continuous colors, redshift/cluster filters, zoom, selection and CSV.
- Confirm a clicked object stays pinned; uncheck Pin to restore hover.
- Lasso/box selection uses the rows reported by Plotly. Exact coincident
  objects can be hard to individually inspect; no overlap-cycling UI yet.

LIMITATIONS / BEFORE PUBLIC RELEASE
- Development prototype, not a validated public release.
- Plotly 2.35.2 is loaded from CDN. Browser needs WebGL for ScatterGL.
- Large uncompressed JSON is loaded/parsed initially; measure performance
  on the actual 51,622-row data before choosing final encoding.
- The initial preview export contains only 48 objects; all other objects
  explicitly say preview not exported. Complete preview delivery is next.
- Overlays are pre-rendered at 35%; no live opacity or class toggles yet.
- Separate saved zoom per view, overlap cycling, state-sharing URLs,
  notebook-equivalent provenance downloads and accessibility refinements
  are not yet implemented.
- No claim that mask alignment or scientific units have been validated.
- Investigate the two out-of-bounds RLE errors; do not clip runs silently.
- Check rights/licensing and remove private paths/internal provenance
  details from public assets where appropriate before uploading.
- Serve this folder only, never the parent research-data directory.
- serve_local.py is a local testing server, not production hosting.

VALIDATION PERFORMED DURING BUILD
JavaScript syntax check; eight JavaScript helper tests (percentiles,
manual validation, missing values, constant values, CSV escaping).
HTML ID/JavaScript reference consistency and Python helper compilation.
No real Plotly browser-rendering, WebGL, image alignment, research-server
networking, or actual-data performance test was performed here.
