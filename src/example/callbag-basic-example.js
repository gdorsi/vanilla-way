import { pipe, fromEvent, filter, map } from "callbag-basics";
import observe from "callbag-observe";

pipe(
  fromEvent(document, "click"),
  filter(evt => evt.target.tagName === "BUTTON"),
  map(({ clientX, clientY }) => ({ x: clientX, y: clientY })),
  observe(coords => console.log(coords))
);
