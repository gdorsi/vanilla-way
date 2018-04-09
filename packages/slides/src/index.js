import { whenDefined } from "./web-components";
import { ToggleButton } from "./ToggleButton";
import { loveButton } from "./loveButton";
import { deck } from "./deck";

//main
deck(document.body);

//Examples
whenDefined(ToggleButton.is).then(() => {
  loveButton(document.querySelector(".js-love"));
});
