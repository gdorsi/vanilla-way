export let isSlide = el => el instanceof Slide;

let toggle = (el, name, value) => {
  el.classList.toggle(name, !!value);
};

export class Slide extends HTMLElement {
  static get is() {
    return "x-slide";
  }

  get fragments() {
    return Array.from(this.querySelectorAll(".fragment"));
  }

  get active() {
    return this.fragments
      .map(fragment => fragment.classList.contains("active"))
      .lastIndexOf(true);
  }

  set active(value) {
    this.fragments.forEach((fragment, i) => {
      fragment.classList.toggle("active", i <= value);
    });
  }
}

customElements.define(Slide.is, Slide);
