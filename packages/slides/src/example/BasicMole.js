import { define, HTMLElement } from "my-custom-elements-loader";
import { emit } from "../emit";

const MIN_TIME = 500;
const MAX_TIME = 3000;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export class BasicMole extends HTMLElement {
  static is = "a-basic-mole";

  //Called on element creation
  constructor() {
    super();

    this.addEventListener('click', () => {
      if (this.classList.contains("up")) emit(this, "hit!");
    });

    this.addEventListener('animationend', () => {
      this.classList.remove("up");
      this._goUp();
    });
  }

  _goUp() {
    setTimeout(() => {
      this.classList.add("up");
    }, randomTime(MIN_TIME, MAX_TIME));
  }

  //Called when element is attached to the document
  connectedCallback() {
    this._goUp();
  }
}

define(BasicMole.is, BasicMole);
