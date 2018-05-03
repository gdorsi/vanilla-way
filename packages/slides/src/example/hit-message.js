import { pipe, fromEvent, map } from "callbag-basics-esmodules";
import observe from "callbag-observe";
import sample from "callbag-sample-when";
import { AnimatedMessage } from "./AnimatedMessage";

let makeHitMessage = ({ x, y }) =>
  new AnimatedMessage({
    message: "Hit!",
    className: "hit-message",
    duration: 1000,
    x,
    y
  });

export function hitMessage(el) {
  pipe(
    fromEvent(el, "mousemove"),
    sample(fromEvent(el, "hit!")),
    map(({ clientX, clientY }) => ({ x: clientX, y: clientY })),
    observe(coords => {
      el.appendChild(makeHitMessage(coords));
    })
  );
}
