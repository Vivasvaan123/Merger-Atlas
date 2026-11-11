"""Local preview only. Run on the computer whose browser will view the site."""
from pathlib import Path
from functools import partial
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
import webbrowser

root = Path(__file__).resolve().parent
required = [root / "index.html", root / "data/galaxies.json", root / "data/manifest.json", root / "data/previews.json"]
missing = [str(p.relative_to(root)) for p in required if not p.is_file()]
if missing:
    raise SystemExit("Missing website files: " + ", ".join(missing) + "\nPlace this package beside the exported data and previews folders.")
handler = partial(SimpleHTTPRequestHandler, directory=str(root))
with ThreadingHTTPServer(("127.0.0.1", 8000), handler) as server:
    url = "http://127.0.0.1:8000/"
    print("Local preview:", url)
    print("Keep this terminal open. Press Ctrl+C to stop.")
    webbrowser.open(url)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
