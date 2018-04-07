import observe from "callbag-observe";

import { pipe, map, merge, scan } from "callbag-basics-esmodules";
import { onArrowKeyPress$, tap } from "./stream";
import { Slide } from "./Slide";
import { Progress } from "./Progress";

let { slice } = [];

let keyboard$ = pipe(
  onArrowKeyPress$,
  map(key => (key === "ArrowRight" || key === "ArrowUp" ? 1 : -1))
);

let deck$ = (initalSlide, slidesCount) =>
  pipe(
    merge(keyboard$, tap(initalSlide)),
    scan(
      (active, modifier) =>
        Math.max(0, Math.min(slidesCount - 1, active + modifier)),
      0
    ),
    scan(
      ({ active }, next) => ({
        active: next,
        prev: active
      }),
      { active: 0 }
    )
  );

export let deck = el => {
  let slides = slice.call(el.querySelectorAll(Slide.is));
  let initialSlide = location.hash.slice(1) || slides.findIndex(slide => slide.active);

  let state$ = deck$(initialSlide, slides.length);

  pipe(
    state$,
    observe(({ prev, active }) => {
      slides[prev].active = false;
      slides[active].active = true;
    })
  );

  let progress = el.querySelector("x-progress");

  pipe(
    state$,
    map(({ active }) => active / (slides.length - 1)),
    observe(percentage => {
      progress.percentage = percentage;
    })
  );

  pipe(
    state$,
    observe(({ active }) => {
      location.hash = active;
    })
  );
};

customElements.define(Slide.is, Slide);
customElements.define(Progress.is, Progress);
