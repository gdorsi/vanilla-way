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
      if (this.classList.contains("up") && !this._hit) {
        emit(this, "hit!", { x, y });
        this._hit = true;
      }
    });

    this.addEventListener("animationend", () => {
      if (!this._hit && this._start) {
        emit(this, "miss!");
      }

      this._hit = false;
      this.classList.remove("up");
      this._goUp();
    });
  }

  _goUp() {
    if (this._start) {
      this._timeout = setTimeout(() => {
        this.classList.add("up");
      }, randomTime(MIN_TIME, MAX_TIME));
    }
  }

  start() {
    this._start = true;
    this._goUp();
  }

  stop() {
    this._start = false;
    clearTimeout(this._timeout);
  }
}

define(Mole.is, Mole);
