import { define, HTMLElement } from "my-custom-elements-loader";
export let isSlide = el => el instanceof Slide;

let toggle = (el, name, value) => {
  el.classList.toggle(name, !!value);
};

export class Deck extends HTMLElement {
  static get is() {
    return "x-deck";
  }

  get length() {
    return this.childElementCount;
  }

  get active() {
    return Array.from(this.children).findIndex(slide =>
      slide.classList.contains("active")
    );
  }

  set active(value) {
    if (value < 0 || value >= this.length) return;

    Array.from(this.children, (slide, i) => {
      toggle(slide, "active", i === value);
      toggle(slide, "prev", i === value - 1);
      toggle(slide, "next", i === value + 1);
    });
  }
}

define(Deck.is, Deck);
