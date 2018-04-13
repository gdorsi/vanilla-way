import observe from "callbag-observe";

import { pipe, map, merge, scan, share } from "callbag-basics-esmodules";
import { arrowKeyPress$, fromValue } from "./stream";
import { Slide } from "./Slide";
import { Progress } from "./Progress";

let { slice } = [];

let slideModifier$ = pipe(
  arrowKeyPress$,
  map(key => (key === "ArrowRight" || key === "ArrowUp" ? 1 : -1))
);

export let deck = el => {
  let slides = slice.call(el.querySelectorAll(Slide.is));
  let initialSlide =
    location.hash.slice(1) || slides.findIndex(slide => slide.active);

  let slidesCount = slides.length;

  let slideChange$ = pipe(
    merge(slideModifier$, fromValue(initialSlide)),
    scan(
      (active, modifier) =>
        Math.max(0, Math.min(slidesCount - 1, active + modifier)),
      0
    ),
    scan(([prev, active], next) => [active, next], [0, 0]),
    share
  );

  pipe(
    slideChange$,
    observe(([active, next]) => {
      slides[active].active = false;
      slides[next].active = true;
    })
  );

  let progress = el.querySelector("x-progress");

  pipe(
    slideChange$,
    map(([, next]) => next / (slidesCount - 1)),
    observe(percentage => {
      progress.percentage = percentage;
    })
  );

  pipe(
    slideChange$,
    observe(([, next]) => {
      location.hash = next;
    })
  );
};
