var loader = void 0;

if ("customElements" in window) {
  //Native CE requires a shim to work with ES5 classes
  loader = import("@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js");
} else {
  loader = import("@webcomponents/custom-elements");
}

//A series of proxies to let us instantly create our CE
var HTMLElement = function HTMLElement() {
  return window.HTMLElement.call(this);
};

HTMLElement.prototype = window.HTMLElement.prototype;

var define = function define(tagName, CustomElement, options) {
  return loader.then(function () {
    customElements.define(tagName, CustomElement, options);
  });
};

var whenDefined = function whenDefined(tagName) {
  return loader.then(function () {
    return customElements.whenDefined(tagName);
  });
};

export { HTMLElement, define, whenDefined };
