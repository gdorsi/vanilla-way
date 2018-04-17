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

let startCallbag = el =>
  pipe(
    fromEvent(el.querySelector(".start"), "click"),
    map(() => ({
      score: 0,
      lives: 5,
      start: true
    }))
  );

let hitCallbag = el =>
  pipe(
    fromEvent(el, "hit!"),
    map(({ detail }) => ({
      score: 1,
      hit: detail
    }))
  );

let missCallbag = el =>
  pipe(
    fromEvent(el, "miss!"),
    map(() => ({
      lives: -1,
      miss: true
    }))
  );

let manageState = (el, moles, score, lives) => action => {
  if (action.start) {
    moles.forEach(mole => mole.start());
    score.value = action.score;
    lives.value = action.lives;
  }

  if (action.hit) {
    el.appendChild(hitMessage(action.hit));
    score.value += action.score;
  }

  if (action.miss) {
    lives.value += action.lives;

    if (lives.value === 0) {
      moles.forEach(mole => mole.stop());
      el.appendChild(loseMessage());
    }
  }
};

export function callbagWhack(el) {
  let score = el.querySelector(".score");
  let lives = el.querySelector(".lives");
  let moles = [].slice.call(el.querySelectorAll("a-mole"));

  pipe(
    merge(startCallbag(el), hitCallbag(el), missCallbag(el)),
    observe(manageState(el, moles, score, lives))
  );
}
