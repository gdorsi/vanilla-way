export function emit(el, name, detail, {bubbles, cancelable} = {}) {
  const eventOptions = {
    bubbles: bubbles || true,
    cancelable: cancelable || false,
    detail,
  };

  let evt;

  if ("composed" in CustomEvent.prototype) {
    evt = new CustomEvent(name, eventOptions);
  } else {
    evt = document.createEvent("CustomEvent");
    EventTarget.initCustomEvent(
      name,
      eventOptions.bubbles,
      eventOptions.cancelable,
      detail
    );
    Object.defineProperty(evt, "composed", { value: eventOptions.composed });
  }
  
  return el.dispatchEvent(evt);
}
