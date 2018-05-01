import { pipe, fromEvent, map, merge, combine } from "callbag-basics-esmodules";
import observe from "callbag-observe";

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
    })
  );

  pipe(
    fromEvent(el, "miss!"),
    observe(() => {
      lives.value -= 1;

      if (!lives.value) {
        moles.forEach(mole => mole.stop());
      }
    })
  );
}
