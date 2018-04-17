import { pipe, fromEvent, map, merge, combine } from "callbag-basics-esmodules";
import observe from "callbag-observe";
import { AnimatedMessage } from "./AnimatedMessage";

let loseMessage = () =>
  new AnimatedMessage({
    message: "Looser!",
    className: "lose-message",
    duration: 3000
  });

let hitMessage = ({ x, y }) =>
  new AnimatedMessage({
    message: "Hit!",
    className: "hit-message",
    duration: 1000,
    x,
    y
  });

export function callbagWhack(el) {
  let score = el.querySelector(".score");
  let lives = el.querySelector(".lives");
  let moles = [].slice.call(el.querySelectorAll("a-mole"));

  pipe(
    fromEvent(el.querySelector(".start"), "click"),
    observe(() => {
      moles.forEach(mole => mole.start());
      score.value = 0;
      lives.value = 3;
    })
  );

  pipe(
    fromEvent(el, "hit!"),
    observe(({ detail }) => {
      score.value += 1;
      el.appendChild(hitMessage(detail));
    })
  );

  pipe(
    fromEvent(el, "miss!"),
    observe(() => {
      lives.value -= 1;

      if (!lives.value) {
        moles.forEach(mole => mole.stop());
        el.appendChild(loseMessage());
      }
    })
  );
}
