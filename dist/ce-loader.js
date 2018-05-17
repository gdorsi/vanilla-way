
(function() {
    var newScript = document.createElement('script');
    newScript.src = 'dist/' + (window.customElements ? 'ce-shim.js' : 'ce-polyfill.js');
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
