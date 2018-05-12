import observe from "callbag-observe";
import {
  pipe,
  map,
  merge,
  scan,
  share,
  fromEvent,
  filter
} from "callbag-basics-esmodules";
import "./Deck";
import "./Progress";
import "./Slide";

let fromArrowKeyDown = el =>
  pipe(
    fromEvent(el, "keydown"),
    map(evt => evt.key),
    filter(key => key.indexOf("Arrow") === 0),
    map(key => (key === "ArrowRight" || key === "ArrowUp" ? 1 : -1))
  );

let fromEnterKeyDown = el =>
  pipe(
    fromEvent(el, "keydown"),
    map(evt => evt.key),
    filter(key => key === "Enter"),
    map(() => 1)
  );

export let fromKeyboard = el =>
  merge(fromArrowKeyDown(el), fromEnterKeyDown(el));

let activeSlide = deck => deck.slides[deck.active];
let inFragmentsRange = (slide, modifier) =>
  slide.active + modifier >= -1 &&
  slide.active + modifier < slide.fragments.length;

export let presentation = el => {
  let deck = el.querySelector("x-deck");
  let progress = el.querySelector("x-progress");
  let initialSlide = location.hash.slice(1) || deck.active;

  deck.active = Math.max(parseInt(initialSlide, 10), 0);

  pipe(
    fromKeyboard(document),
    observe(modifier => {
      let slide = activeSlide(deck);
      if (inFragmentsRange(slide, modifier)) {
        slide.active += modifier;
      } else {
        deck.active += modifier;
        progress.percentage = deck.active / (deck.length - 1);
        location.hash = deck.active;
      }
    })
  );
};
