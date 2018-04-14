import { define, HTMLElement } from "my-custom-elements-loader";
import { emit } from "../emit";

const MIN_TIME = 500;
const MAX_TIME = 10000;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export class Mole extends HTMLElement {
  static is = "a-mole";

  connectedCallback() {
    this.addEventListener("click", this._click);
    this.addEventListener("animationend", this._goDown);
    this._goUp();
  }

  disconnectedCallback() {
    this.removeEventListener("click", this._click);
    this.removeEventListener("animationend", this._goDown);
  }

  _click = () => {
    if (this.classList.contains("up")) {
      emit(this, `wack!`);
    }
  };

  _goUp() {
    setTimeout(() => {
      this.classList.add("up");
    }, randomTime(MIN_TIME, MAX_TIME));
  }
  
  _goDown = () => {
    this.classList.remove("up");
    this._goUp();
  };
}

customElements.define(Mole.is, Mole);
