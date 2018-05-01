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

let missMessage = ({ x, y }) =>
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

//Actions sources
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
    map(({ target }) => ({
      type: "MISS",
      lives: -1,
      coords: getRectCenter(target.getBoundingClientRect())
    }))
  );

let effectsManager = (getters, effects) => action => {
  switch (action.type) {
    case "START":
      effects.start();
      effects.setScore(action.score);
      effects.setLives(action.lives);
      break;
    case "HIT":
      effects.setScore(getters.score() + action.score);
      effects.appendMsg(hitMessage(action.coords));
      break;
    case "MISS":
      effects.setLives(getters.lives() + action.lives);
      effects.appendMsg(missMessage(action.coords));

      if (getters.lives() === 0) {
        effects.stop();
        effects.appendMsg(loseMessage());
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
    observe(
      effectsManager(
        //Getters
        {
          score: () => score.value,
          lives: () => lives.value
        },
        //Effects
        {
          start() {
            moles.forEach(mole => mole.start());
          },
          stop() {
            moles.forEach(mole => mole.stop());
          },
          setScore(value) {
            score.value = value;
          },
          setLives(value) {
            lives.value = value;
          },
          appendMsg(msg) {
            el.appendChild(msg);
          }
        }
      )
    )
  );
}
