import { pipe, fromEvent, map } from "callbag-basics-esmodules";
import observe from "callbag-observe";
import { AnimatedMessage } from "./AnimatedMessage";

let makeMissMessage = ({ x, y }) =>
  new AnimatedMessage({
    message: "Miss!",
    className: "hit-message miss",
    duration: 1000,
    x,
    y
  });

let getRectCenter = rect => ({
  x: (rect.left + rect.right) / 2,
  y: (rect.top + rect.bottom) / 2
});

export function missMessage(el) {
  pipe(
    fromEvent(el, "miss!"),
    map(({ target }) => target.getBoundingClientRect()),
    map((rect) => getRectCenter(rect)),
    observe(coords => {
      el.appendChild(makeMissMessage(coords));
    })
  );
}
