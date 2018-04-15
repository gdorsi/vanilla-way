import { define, HTMLElement } from "my-custom-elements-loader";

export class HitMessage extends HTMLElement {
  static is = "hit-message";

  constructor(hit, x, y) {
    super();

    this.textContent = hit ? 'Whack!': 'Miss!';
    this.style.top = `${y}px`;
    this.style.left = `${x}px`;
  }

  connectedCallback() {
    //Autodestroy
    setTimeout(() => {
     this.remove();
    }, 1000);
  }
}

define(HitMessage.is, HitMessage);
