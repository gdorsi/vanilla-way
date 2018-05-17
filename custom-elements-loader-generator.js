#!/usr/bin/env node

let [publicPath, outputPath] = process.argv.slice(2);

let path = require("path");
let { readFileSync, writeFileSync } = require("fs");
let { execSync } = require("child_process");
let shimPath = require.resolve(
  "@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js"
);
let polyfillPath = require.resolve("@webcomponents/custom-elements");
let ceLoader = publicPath => `
(function() {
    var newScript = document.createElement('script');
    newScript.src = '${publicPath}' + (window.customElements ? 'ce-shim.js' : 'ce-polyfill.js');
    newScript.onload = fire;
    newScript.async = true;
    document.head.appendChild(newScript);
    function fire() {
        var e;
        if ('composed' in CustomEvent.prototype) {
            e = new CustomEvent('CustomElementsPolyfillLoaded', {bubbles: true});
        } else {
            e = document.createEvent('CustomEvent');
            e.initCustomEvent('CustomElementsPolyfillLoaded', true);
        }
        document.dispatchEvent(e);
        window.CustomElementsReady = true;
    }
})();
`;

execSync(`mkdir -p ${outputPath}`);
writeFileSync(path.join(outputPath, "ce-shim.js"), readFileSync(shimPath));
writeFileSync(
  path.join(outputPath, "ce-polyfill.js"),
  readFileSync(polyfillPath)
);
writeFileSync(
  path.join(outputPath, "ce-loader.js"),
  ceLoader(publicPath),
  "utf-8"
);
