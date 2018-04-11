import { define, HTMLElement } from "my-custom-elements-loader";
import { emit } from "./emit";

export class ToggleButton extends HTMLElement {
  static get is() {
    return 'toggle-button';
  }

  connectedCallback() {
    this.toggle = () => {
      this.classList.toggle('active');
      if (this.classList.contains('active')) {
        emit(this, `toggle-button:on`);
      } else {
        emit(this, `toggle-button:off`);
      }
    };

    this.addEventListener('click', this.toggle);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.toggle);
  }
}

define(ToggleButton.is, ToggleButton);