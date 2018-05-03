import { define, HTMLElement } from "my-custom-elements-loader";
import { emit } from "../emit";

const MIN_TIME = 500;
const MAX_TIME = 7000;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export class Mole extends HTMLElement {
  static is = "a-mole";

  _hit = false;
  _start = false;
  _timeout = null;

  constructor() {
    super();

    this.addEventListener('click', () => {
      if (!this.isHittable) return;

      emit(this, "hit!");
      this._hit = true;
    });

    this.addEventListener('animationend', () => {
      if (this.isHittable) emit(this, "miss!");

      this._hit = false;
      this.classList.remove("up");

      if (this._active) this._goUp();
    });
  }

  get isHittable() {
    return this.classList.contains("up") && !this._hit && this._active;
  }

  _goUp() {
    this._timeout = setTimeout(() => {
      this.classList.add("up");
    }, randomTime(MIN_TIME, MAX_TIME));
  }

  start() {
    this._active = true;
    this._goUp();
  }

  stop() {
    this._active = false;
    clearTimeout(this._timeout);
  }
}

define(Mole.is, Mole);
