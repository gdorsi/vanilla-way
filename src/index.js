import { onCePolyfillLoad } from "./on-polyfill-load";

onCePolyfillLoad(() => {
  let {
    startExample2,
    startExample3,
    startExample4,
    startExample1,
    startExample5,
    startExample4b
  } = require("./example");

  let { presentation } = require("./presentation");
  let { body } = document;

  presentation(body);

  //Examples
  startExample1(body);
  startExample2(body);
  startExample3(body);
  startExample4(body);
  startExample4b(body);
  startExample5(body);
});
