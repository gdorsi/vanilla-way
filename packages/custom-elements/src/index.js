let loader;

if ("customElements" in window) {
  //Native CE requires a shim to work with ES5 classes
  loader = import("@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js");
} else {
  loader = import("@webcomponents/custom-elements");
}

//A series of proxies to let us instantly create our CE
export let HTMLElement = function() {
  return window.HTMLElement.call(this);
};

HTMLElement.prototype = window.HTMLElement.prototype;

export let define = (tagName, CustomElement, options) =>
  loader.then(() => {
    customElements.define(tagName, CustomElement, options);
  });

export let whenDefined = tagName =>
  loader.then(() => customElements.whenDefined(tagName));
