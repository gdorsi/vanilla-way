export let isSlide = el => el instanceof Slide;

let slideFlag = (el, name, value) => {
  if (!el || !isSlide(el)) {
    return;
  }

  el.classList.toggle(name, !!value);
};

export class Slide extends HTMLElement {
  static get is() {
    return 'x-slide';
  }

  get active() {
    return this.classList.contains("active");
  }

  set active(value) {
    slideFlag(this, "active", value);
    slideFlag(this.previousElementSibling, "prev", value);
    slideFlag(this.nextElementSibling, "next", value);
  }
}
