import { define, HTMLElement } from "my-custom-elements-loader";
import { emit } from "../emit";

const MIN_TIME = 500;
const MAX_TIME = 7000;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export class Mole extends HTMLElement {
  static is = "a-mole";

  _click = () => {
    if (this.isUp) {
      emit(this, `wack!`);
    } else {
      emit(this, `miss!`);
    }
  };

  _goUp() {
    setTimeout(() => {
      this.isUp = true;
    }, randomTime(MIN_TIME, MAX_TIME));
  }

  _goDown = () => {
    this.isUp = false;
    this._goUp();
  };

  connectedCallback() {
    this.addEventListener("click", this._click);
    this.addEventListener("animationend", this._goDown);
    this._goUp();
  }

  disconnectedCallback() {
    this.removeEventListener("click", this._click);
    this.removeEventListener("animationend", this._goDown);
  }

  get isUp() {
    return this.classList.contains("up");
  }

  set isUp(value) {
    this.classList.toggle("up", !!value);
  }
}

define(Mole.is, Mole);
