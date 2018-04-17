import "./BasicMole";
import "./Mole";
import "./ScoreBoard";
import { simpleWhack } from "./simple-whack";
import { scoredWhack } from "./scored-whack";
import { callbagWhack } from "./callbag-final-whack";
import { funWithMsgs } from "./fun-with-msgs";

export function startExample1(deck) {}

export function startExample2(deck) {
  simpleWhack(deck.querySelector(".example2"));
}

export function startExample3(deck) {
  scoredWhack(deck.querySelector(".example3"));
}

export function startExample4(deck) {
  funWithMsgs(deck.querySelector(".example4"));
}

export function startExample5(deck) {
  callbagWhack(deck.querySelector(".example5"));
}
