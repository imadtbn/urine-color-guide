const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

test("published navigation enhancement is loaded by the existing common script", () => {
  const script = read("assets/js/site-tags.js");
  const enhancer = read("assets/js/nav-icons.js");
  assert.match(script, /loadScript\("nav-icons", new URL\("\.\/nav-icons\.js", document\.currentScript\.src\)\.href\)/);
  assert.doesNotThrow(() => new Function(enhancer));
});

test("React header includes an icon for each primary navigation destination", () => {
  const component = read("source/client/src/components/SiteShell.tsx");
  for (const key of ["Compass", "Palette", "BookOpen", "HeartPulse", "Info"]) {
    assert.match(component, new RegExp("Icon: " + key + "\\b"));
  }
  assert.match(component, /className="nav-link-icon"/);
  assert.match(component, /aria-expanded=\{open\}/);
});

test("React footer covers home, articles, about, privacy, and external sources", () => {
  const component = read("source/client/src/components/SiteShell.tsx");
  for (const key of ["House", "BookOpen", "Info", "ShieldCheck", "Stethoscope", "Activity"]) {
    assert.match(component, new RegExp("\\b" + key + "\\b"));
  }
  assert.match(component, /footer-link-icon/);
  assert.match(component, /footer-external-icon/);
  assert.match(component, /rel="noopener noreferrer"/);
});

test("responsive navigation uses touch-sized links and RTL-safe logical spacing", () => {
  const css = read("source/client/src/index.css");
  assert.match(css, /@media \(max-width:1020px\)/);
  assert.match(css, /min-height:44px/);
  assert.match(css, /inset-inline:16px/);
  assert.match(css, /:focus-visible/);
  const enhancer = read("assets/js/nav-icons.js");
  assert.match(enhancer, /\.nav-link-icon, \.footer-link-icon/);
  assert.match(enhancer, /MutationObserver/);
});
