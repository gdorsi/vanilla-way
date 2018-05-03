import { define, HTMLElement } from "my-custom-elements-loader";
export let isSlide = el => el instanceof Slide;

let toggle = (el, name, value) => {
  el.classList.toggle(name, !!value);
};

export class Deck extends HTMLElement {
  static get is() {
    return "x-deck";
  }

  get slides() {
    return Array.from(this.children);
  }

  get length() {
    return this.slides.length;
  }

  get active() {
    return this.slides.findIndex(slide => slide.classList.contains("active"));
  }

  set active(value) {
    if (value < 0 || value >= this.length) return;

    this.slides.forEach((slide, i) => {
      toggle(slide, "active", i === value);
      toggle(slide, "prev", i === value - 1);
      toggle(slide, "next", i === value + 1);
    });
  }
}

define(Deck.is, Deck);
