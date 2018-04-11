import observe from "callbag-observe";

import { pipe, map, scan, fromEvent } from "callbag-basics-esmodules";

export let month = el => {
  //Day switch!
  pipe(
    fromEvent(el, "change"),
    map(evt => evt.target),
    filter(day => day.active),
    scan(([prev, active], next) => [active, next], []),
    observe(([active, prev]) => {
      prev.active = false;
    })
  );
};
