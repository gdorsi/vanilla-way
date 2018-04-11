import { HTMLElement, define } from "my-custom-elements-loader";
import { ToggleButton } from "./ToggleButton";
import { loveButton } from "./loveButton";
import { deck } from "./deck";

class App extends HTMLElement {
  static get is() {
    return 'my-presentation';
  }

  connectedCallback() {
    deck(this);

    //Examples
    loveButton(document.querySelector(".js-love"));
  }
}

define(App.is, App);

