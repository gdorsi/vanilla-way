import observe from "callbag-observe";

import { pipe, map, scan, fromEvent, share } from "callbag-basics-esmodules";

let selectedDayFromatter = Intl.DateTimeFormat("en-US", {
  day: "numeric",
  month: "long"
});

let magicDayFormatter = (button, month) => {
  let day = parseInt(button.textContent.trim(), 10);
  let date = new Date(new Date().getFullYear(), month - 1, day);
  return selectedDayFromatter.format(date);
};

export let month = (el, month) => {
  let dayChange$ = pipe(fromEvent(el, "change"), map(evt => evt.target), share);

  //Disables the deactivation!
  pipe(
    dayChange$,
    filter(day => !day.active),
    observe(button => {
      button.active = true;
    })
  );

  let dayActivation$ = pipe(dayChange$, filter(day => day.active), share);

  //Day switch!
  pipe(
    dayActivation$,
    scan(([prev, active], next) => [active, next], []),
    observe(([active, prev]) => {
      prev.active = false;
    })
  );

  let selected = el.querySelector(".selected");

  //Display selection!
  pipe(
    dayActivation$,
    map(button => magicDayFormatter(button, month)),
    observe(date => {
      selected.textContent = date;
    })
  );
};
