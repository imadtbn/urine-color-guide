from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
errors = []
html_files = sorted(ROOT.rglob("*.html"))

class Parser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.refs = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        for key in ("href", "src"):
            value = attrs.get(key)
            if value:
                self.refs.append((key, value))

for path in html_files:
    parser = Parser()
    parser.feed(path.read_text(encoding="utf-8"))
    for key, ref in parser.refs:
        parsed = urlparse(ref)
        if parsed.scheme or ref.startswith("#") or ref.startswith("data:") or ref.startswith("//"):
            continue
        target = (ROOT / parsed.path.lstrip("/")).resolve() if parsed.path.startswith("/") else (path.parent / parsed.path).resolve()
        if not target.exists():
            errors.append(f"{path.relative_to(ROOT)}: missing {key} -> {ref}")

articles = sorted((ROOT / "articles").glob("*.html"))
print(f"HTML files: {len(html_files)}")
print(f"Article pages: {len(articles)}")
print(f"Article index cards: {(ROOT / 'articles.html').read_text(encoding='utf-8').count('class=\"article-card\"')}")
if errors:
    print("ERRORS:")
    print("\n".join(errors))
    raise SystemExit(1)
print("All local href/src references resolve.")
for article in articles:
    text = article.read_text(encoding="utf-8")
    required = ["article.css", "mainNav", "navToggle", "article-body"]
    missing = [item for item in required if item not in text]
    if "source-list" not in text and "source-tag" not in text:
        missing.append("source-list/source-tag")
    if missing:
        errors.append(f"{article.name}: missing markers {missing}")
if errors:
    print("ARTICLE ERRORS:")
    print("\n".join(errors))
    raise SystemExit(1)
print("Article structure markers are present.")
