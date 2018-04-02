import { pipe, map, fromEvent, filter, merge } from "callbag-basics-esmodules";

let { filter: filterArray } = [];

export let onArrowKeyPress$ = pipe(
  fromEvent(document, "keydown"),
  map(evt => evt.key || evt.keyCode || evt.which),
  map(
    key =>
      typeof key === "string"
        ? key
        : key === 38
          ? "ArrowUp"
          : key === 40
            ? "ArrowDown"
            : key === 37 ? "ArrowLeft" : key === 39 ? "ArrowRight" : ""
  ),
  filter(key => key.indexOf("Arrow") === 0)
);

export let tap = value => (start, sink) => {
  if (start !== 0) return;

  sink(0);
  sink(1, value);
};
