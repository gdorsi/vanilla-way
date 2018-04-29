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

let start = el =>
  pipe(
    fromEvent(el.querySelector(".start"), "click"),
    map(() => ({
      type: "START",
      score: 0,
      lives: 5
    }))
  );

let hit = el =>
  pipe(
    fromEvent(el, "hit!"),
    map(({ detail }) => ({
      type: "HIT",
      score: 1,
      coords: detail
    }))
  );

let miss = el =>
  pipe(
    fromEvent(el, "miss!"),
    map(() => ({
      type: "MISS",
      lives: -1
    }))
  );

let manageState = (el, moles, score, lives) => action => {
  switch (action.type) {
    case "START":
      moles.forEach(mole => mole.start());
      score.value = action.score;
      lives.value = action.lives;
      break;
    case "HIT":
      score.value += action.score;
      el.appendChild(hitMessage(action.coords));
      break;
    case "MISS":
      lives.value += action.lives;

      if (lives.value === 0) {
        moles.forEach(mole => mole.stop());
        el.appendChild(loseMessage());
      }
      break;
  }
};

export function callbagWhack(el) {
  let score = el.querySelector(".score");
  let lives = el.querySelector(".lives");
  let moles = [].slice.call(el.querySelectorAll("a-mole"));

  pipe(
    merge(start(el), hit(el), miss(el)),
    observe(manageState(el, moles, score, lives))
  );
}
