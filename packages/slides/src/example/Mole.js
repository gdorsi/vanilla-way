import { define, HTMLElement } from "my-custom-elements-loader";
import { emit } from "../emit";

const MIN_TIME = 500;
const MAX_TIME = 7000;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export class Mole extends HTMLElement {
  static is = "a-mole";

  constructor() {
    super();
    
    this.addEventListener("click", ({ x, y }) => {
      emit(this, this.classList.contains("up") ? "hit!" : "miss!", { x, y });
    });

    this.addEventListener("animationend", () => {
      this.classList.remove("up")
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

define(Mole.is, Mole);
