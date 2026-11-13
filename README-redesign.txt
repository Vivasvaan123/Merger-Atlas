MERGER ATLAS — INTERFACE REDESIGN v2

YOU DO NOT NEED THE CLUSTER FOR THIS UPDATE.
No data export or image download is required. This package contains interface
files only. Keep existing data/, assets/, and asset-config.json unchanged.

INSTALL ON YOUR OWN COMPUTER
1. Back up your current index.html, styles.css, app.js and atlas_upgrade.js
   outside the repository (or rely on your committed Git history).
2. Extract this ZIP. Copy the CONTENTS of merger_atlas_redesign/ into your
   existing local Merger-Atlas repository root. Replace those four files and
   add the vendor/ directory. Do not put an extra parent folder in the repo.
3. Your repository should contain index.html, app.js, styles.css,
   atlas_upgrade.js, vendor/plotly.min.js, your existing data/, assets/ (if
   locally hosted), and asset-config.json. Keep .nojekyll.
4. From the repository folder, run:
      python -m http.server 8000 --bind 127.0.0.1
   Use python3 or py -3 if that is your Python command.
5. Open http://127.0.0.1:8000/. Check a known object, image/mask alignment,
   filters, CSV and an existing share link. Stop the server with Ctrl+C.
6. Commit only the interface update:
      git add index.html styles.css app.js atlas_upgrade.js vendor .nojekyll
      git commit -m "Redesign Merger Atlas exploration interface"
      git push
   You may also commit this README and validation notes if desired.
7. Wait for the Pages deployment. Hard-refresh the public site if necessary.
   Windows/Linux: Ctrl+Shift+R; macOS: Command+Shift+R.

WHAT CHANGED
- Compact brand/header, distinct PCA/Measurements tabs.
- Left sample/display panel; advanced controls revealed on demand.
- Main plot appears near the top; quieter legend, viewport counts and
  selection bar remain beside the relevant workflow.
- Image-first inspector with pin/unpin, layer/opacity/class controls together,
  key properties, exact-key search, overlap cycling and grouped details.
- Methods and scientific limitations are in an accessible modal dialog.
- Responsive layout, visible focus rings and keyboard-operable view tabs.
- Stale image requests cannot overwrite a newer inspected galaxy.
- Selection highlighting updates immediately and stable selected rows remain
  selected across filtering; a new lasso/box selection replaces the old one.
- Share links retain the ORIGINAL #view= JSON schema. Shared view saves
  applied controls rather than uncommitted draft bounds/filter inputs.
- Atlas upgrade code is consolidated in app.js. atlas_upgrade.js is a harmless
  placeholder and is no longer referenced by the new HTML.
- Plotly.js 3.0.1 is included locally in vendor/ rather than fetched from a CDN.
  This is an explicit dependency update from the original 2.35.2. No science
  arrays are changed. The local library is the version used in build tests.

PRESERVED
Existing galaxies.json, manifest.json, previews_full.json,
preview_errors_full.json and asset-config.json formats; stable row/key/fit
identity; native class-mask RGB encoding; image and mask assets;
PCA-fixed PC1/PC2; measurement axis choices; full-cohort percentiles;
manual/full/central-98% limits; offscreen counts; CSV values/fit identity;
external asset URL + anonymous CORS loading; no inference or fitting.
Image-only is still the default. Overlay opacity still defaults to 35%.
Categorical palette is updated for the new visual style; labels are unchanged.

FILTER NOTES
Redshift/cluster/manual-bound edits are drafts until Apply changes (or another
plot-changing control applies the current settings). Color and axis changes
apply immediately. Share saves the last successfully applied settings.
Reset sample filters resets clusters/redshift only. Reset view resets the
viewport to the chosen full/percentile/manual extent, not the cohort.
Gray color is missing/nonfinite. Missing X/Y means not plottable, not deleted.
No per-view persistent viewport was added; view-changing signatures reset
bounds as before. The existing large initial JSON remains unchanged.

SCOPE AND VALIDATION
This is a presentation/interaction redesign, not scientific validation.
See VALIDATION.txt for executed tests and limitations. The separate screenshot
is a layout preview using 120 synthetic test records, NOT your galaxy data.
Keep research-preview labeling until dataset rights, source units, vote
conventions, mask registration and scientific provenance are established.
