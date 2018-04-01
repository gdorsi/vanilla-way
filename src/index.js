import "document-register-element";

let { filter: filterArray } = [];

let isSlide = el => el instanceof Slide;

let slideFlag = (el, name, value) => {
  if (!el || !isSlide(el)) {
    return;
  }

  el.classList.toggle(name, !!value);
};

class Slide extends HTMLElement {
  get active() {
    return this.classList.contains("active");
  }

  set active(value) {
    slideFlag(this, "active", value);
    slideFlag(this.previousElementSibling, "prev", value);
    slideFlag(this.nextElementSibling, "next", value);
  }
}

customElements.define("x-slide", Slide);

class Progress extends HTMLElement {
  set percentage(value) {
    this.style.setProperty("--progress", value);
  }

  get percentage() {
    return parseFloat(this.style.getPropertyValue("--progress"));
  }
}

customElements.define("x-progress", Progress);

import {
  pipe,
  map,
  fromEvent,
  filter,
  merge,
  fromIter,
  scan
} from "callbag-basics-esmodules";
import observe from "callbag-observe";

let onArrowKeyPress$ = pipe(
  fromEvent(document, "keyup"),
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

let tap = value => (start, sink) => {
  if (start !== 0) return;

  sink(0);
  sink(1, value);
};

let keyboard$ = pipe(
  onArrowKeyPress$,
  map(key => (key === "ArrowRight" || key === "ArrowUp" ? 1 : -1))
);

let deck$ = (initalSlide, slidesCount) => source =>
  pipe(
    source,
    scan((active, modifier) => active + modifier, initalSlide),
    filter(next => next > -1 && next < slidesCount),
    scan(
      ({ active }, next) => ({
        active: next,
        prev: active
      }),
      { active: initalSlide }
    )
  );

let deck = el => {
  let slides = filterArray.call(el.childNodes, isSlide);
  let active = slides.findIndex(slide => slide.active);

  if (active === -1) {
    active = 0;
  }

  let state$ = pipe(merge(keyboard$, tap(0)), deck$(active, slides.length));

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
    map(({ active }) => active / slides.length),
    observe(percentage => {
      progress.percentage = percentage;
    })
  );
};

deck(document.body);
