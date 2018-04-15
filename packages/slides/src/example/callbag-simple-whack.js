import { pipe, fromEvent, map, merge } from "callbag-basics-esmodules";
import observe from "callbag-observe";

export function callbagSimpleWhack(el) {
  let hit$ = pipe(fromEvent(el, "hit!"), map(() => ({ hit: true })));
  let miss$ = pipe(fromEvent(el, "miss!"), map(() => ({ hit: false })));

  let scoreBoard = el.querySelector("score-board");

  pipe(
    merge(miss$, hit$),
    observe(({ hit }) => {
      scoreBoard.points += hit ? 1 : -1;
    })
  );
}
