import observe from "callbag-observe";

import { pipe, map, merge, scan, share } from "callbag-basics-esmodules";
import { arrowKeyPress$ } from "./stream";
import { Deck } from "./Deck";
import { Progress } from "./Progress";

let slideModifier$ = pipe(
  arrowKeyPress$,
  map(key => (key === "ArrowRight" || key === "ArrowUp" ? 1 : -1))
);

export let presentation = el => {
  let deck = el.querySelector("x-deck");
  let progress = el.querySelector("x-progress");
  let initialSlide = location.hash.slice(1) || deck.active || 0;

  deck.active = parseInt(initialSlide, 10);

  pipe(
    slideModifier$,
    observe(modifier => {
      deck.active += modifier;
      progress.percentage = deck.active / (deck.length - 1);
      location.hash = deck.active;
    })
  );
};
