import { define, HTMLElement } from "./web-components";
import { emit } from "./emit";

export class ToggleButton extends HTMLElement {
  static get is() {
    return 'toggle-button';
  }

  _toggle() {
    this.active = !this.active;
  }

  connectedCallback() {
    this.toggle = this._toggle.bind(this);
    this.addEventListener('click', this.toggle);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.toggle);
  }
  
  set active(value) {
    if (this.active !== !!value) {
      this.classList.toggle('active', !!value);
      emit(this, 'change');
    }
  }

  get active() {
    return this.classList.contains('active');
  }
}

define(ToggleButton.is, ToggleButton);