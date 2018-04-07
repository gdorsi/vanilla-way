import "document-register-element";

import { ToggleButton } from "./ToggleButton";
import { loveButton } from "./loveButton";
import { deck } from "./deck";

//main
deck(document.body);

//Examples
customElements.define(ToggleButton.is, ToggleButton);
loveButton(document.querySelector('.js-love'));


