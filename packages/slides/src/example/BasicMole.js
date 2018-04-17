import { define, HTMLElement } from "my-custom-elements-loader";
import { emit } from "../emit";

const MIN_TIME = 500;
const MAX_TIME = 10000;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export class BasicMole extends HTMLElement {
  static is = "a-basic-mole";

  constructor() {
    super();

    this.addEventListener("click", () => {
      if (this.classList.contains("up")) emit(this, "hit!");
    });

    this.addEventListener("animationend", () => {
      this.classList.remove("up");
      this._goUp();
    });
  }

  _goUp() {
    setTimeout(() => {
      this.classList.add("up");
    }, randomTime(MIN_TIME, MAX_TIME));
  }

  connectedCallback() {
    this._goUp();
  }
}

define(BasicMole.is, BasicMole);
