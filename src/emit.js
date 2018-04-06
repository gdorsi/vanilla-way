export function emit(el, name) {
  const eventOptions = {};
  let evt;

  if ("composed" in CustomEvent.prototype) {
    evt = new CustomEvent(name, eventOptions);
  } else {
    evt = document.createEvent("CustomEvent");
    EventTarget.initCustomEvent(
      name,
      eventOptions.bubbles,
      eventOptions.cancelable,
      eventOptions.detail
    );
    Object.defineProperty(evt, "composed", { value: eventOptions.composed });
  }
  return el.dispatchEvent(evt);
}
