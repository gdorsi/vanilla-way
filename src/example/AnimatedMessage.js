export class AnimatedMessage extends HTMLElement {
  static is = "animated-message";

  constructor({ message, x, y, className, duration }) {
    super();

    this.textContent = message;
    this.style.top = `${y}px`;
    this.style.left = `${x}px`;
    this.className = className;
    this.duration = duration;
  }

  connectedCallback() {
    //Autodestroy
    setTimeout(() => {
      this.remove();
    }, this.duration);
  }
}

customElements.define(AnimatedMessage.is, AnimatedMessage);
