export class Progress extends HTMLElement {
  static get is() {
    return "x-progress";
  }

  set percentage(value) {
    this.style.setProperty("--progress", value);
  }

  get percentage() {
    return parseFloat(this.style.getPropertyValue("--progress"));
  }
}

customElements.define(Progress.is, Progress);
