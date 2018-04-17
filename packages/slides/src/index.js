import { HTMLElement, define } from "my-custom-elements-loader";
import { presentation } from "./presentation";
import { startExample2, startExample3, startExample4, startExample1, startExample5 } from "./example";

class App extends HTMLElement {
  static is = "my-presentation";

  connectedCallback() {
    presentation(this);

    //Examples
    startExample1(this);
    startExample2(this);
    startExample3(this);
    startExample4(this);
    startExample5(this);
  }
}

define(App.is, App);
