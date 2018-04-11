let loader;

let HTMLElement = function() {
  return window.HTMLElement.call(this);
};

HTMLElement.prototype = window.HTMLElement.prototype;

if ("customElements" in window) {
  loader = import("@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js");
} else {
  loader = import("@webcomponents/custom-elements");
}

export { HTMLElement };

export let define = (tagName, CustomElement, options) =>
  loader.then(() => {
    customElements.define(tagName, CustomElement, options);
  });

export let whenDefined = tagName =>
  loader.then(() => customElements.whenDefined(tagName));
