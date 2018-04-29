import { define, HTMLElement } from "my-custom-elements-loader";

export class Lives extends HTMLElement {
  static is = "lives-count";

  get value() {
    return this.querySelectorAll('.heart').length;
  }

  set value(value) {
    this.innerHTML = Array.apply(null, Array(value)).map(() => '<i class="heart"></i>').join('');
  }
}

define(Lives.is, Lives);
