import { define, HTMLElement } from "my-custom-elements-loader";

export class ScoreBoard extends HTMLElement {
  static is = "score-board";

  get value() {
    return parseInt(this.textContent.trim(), 10);
  }

  set value(value) {
    this.textContent = value;
  }
}

define(ScoreBoard.is, ScoreBoard);
