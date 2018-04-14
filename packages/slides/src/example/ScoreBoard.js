import { define, HTMLElement } from "my-custom-elements-loader";
import { emit } from "../emit";

export class ScoreBoard extends HTMLElement {
  static is = "score-board";

  get points() {
    return parseInt(this.textContent.trim(), 10);
  }

  set points(value) {
    this.textContent = value;
  }
}

define(ScoreBoard.is, ScoreBoard);
