import { define, HTMLElement } from "my-custom-elements-loader";

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
