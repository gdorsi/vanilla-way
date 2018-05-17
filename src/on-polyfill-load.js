export let onCePolyfillLoad = fn => {
  if (window.CustomElementsReady) return fn();

  document.addEventListener("CustomElementsPolyfillLoaded", () => {
    fn();
  });
};
