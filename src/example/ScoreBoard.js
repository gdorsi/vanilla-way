export class ScoreBoard extends HTMLElement {
  static is = "score-board";

  get value() {
    return parseInt(this.textContent.trim(), 10);
  }

  set value(value) {
    this.textContent = value;
  }
}

customElements.define(ScoreBoard.is, ScoreBoard);
