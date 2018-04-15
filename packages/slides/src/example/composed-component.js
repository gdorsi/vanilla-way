import { pipe, fromEvent, map, merge, combine } from "callbag-basics-esmodules";
import observe from "callbag-observe";
import { HitMessage } from "./HitMessage";
import { querySelector } from 'queryselector-functor';

export function nullSafeWhack(el) {
  let hit$ = pipe(
    fromEvent(el, "hit!"),
    map(({ detail: { x, y } }) => ({ hit: true, x, y }))
  );

  let miss$ = pipe(
    fromEvent(el, "miss!"),
    map(({ detail: { x, y } }) => ({ hit: false, x, y }))
  );

  querySelector(el, "score-board").map(scoreBoard => {
    pipe(
      merge(miss$, hit$),
      observe(({ hit }) => {
        scoreBoard.points += hit ? 1 : -1;
      })
    );
  });

  pipe(
    merge(miss$, hit$),
    map(({ hit, x, y }) => new HitMessage(hit, x, y)),
    observe(message => {
      el.appendChild(message);
    })
  );
}
