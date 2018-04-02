import "document-register-element";

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
    merge(keyboard$, tap(0)),
    scan(
      (active, modifier) =>
        Math.max(0, Math.min(slidesCount - 1, active + modifier)),
      initalSlide
    ),
    scan(
      ({ active }, next) => ({
        active: next,
        prev: active
      }),
      { active: initalSlide }
    )
  );

let deck = el => {
  let slides = slice.call(el.querySelectorAll(Slide.is));
  let active = slides.findIndex(slide => slide.active);

  if (active === -1) {
    active = 0;
  }

  let state$ = deck$(active, slides.length);

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
};

customElements.define(Slide.is, Slide);
customElements.define(Progress.is, Progress);

deck(document.body);
