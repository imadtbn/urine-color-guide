const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const htmlFiles = ["index.html", "404.html", "source/client/index.html"];
const loaderPattern = /site-tags\.js/g;
const directLoaderPattern = /(adsbygoogle\.js|googletagmanager\.com\/(?:gtag\/js|gtm\.js)|clarity\.ms\/tag)/g;

for (const relativeFile of htmlFiles) {
  test(`${relativeFile} uses the central tags loader only`, () => {
    const html = fs.readFileSync(path.join(root, relativeFile), "utf8");
    assert.equal((html.match(loaderPattern) || []).length, 1);
    assert.equal((html.match(directLoaderPattern) || []).length, 0);
    assert.equal((html.match(/googletagmanager\.com\/ns\.html\?id=GTM-P6ZPW7KL/g) || []).length, 1);
  });
}

test("central loader keeps known IDs and documented placeholder", () => {
  const loader = fs.readFileSync(path.join(root, "assets/js/site-tags.js"), "utf8");
  assert.match(loader, /G-GDKZ91CQQ9/);
  assert.match(loader, /ca-pub-5656416032906373/);
  assert.match(loader, /gtmId: "GTM-P6ZPW7KL"/);
  assert.match(loader, /clarityId: "xxxxxxxx"/);
  assert.match(loader, /ضع هنا معرف Microsoft Clarity/);
});
