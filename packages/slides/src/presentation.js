import observe from "callbag-observe";

import { pipe, map, merge, scan, share, fromEvent, filter } from "callbag-basics-esmodules";
import { Deck } from "./Deck";
import { Progress } from "./Progress";

let fromArrowKeyDown = el => pipe(
  fromEvent(el, "keydown"),
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

let slideModifier$ = pipe(
  fromArrowKeyDown(document),
  map(key => (key === "ArrowRight" || key === "ArrowUp" ? 1 : -1))
);

export let presentation = el => {
  let deck = el.querySelector("x-deck");
  let progress = el.querySelector("x-progress");
  let initialSlide = location.hash.slice(1) || deck.active;

  deck.active = Math.max(parseInt(initialSlide, 10), 0);

  pipe(
    slideModifier$,
    observe(modifier => {
      deck.active += modifier;
      progress.percentage = deck.active / (deck.length - 1);
      location.hash = deck.active;
    })
  );
};
