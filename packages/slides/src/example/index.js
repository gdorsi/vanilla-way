import "./BasicMole";
import "./Mole";
import "./ScoreBoard";
import "./Lives";
import { simpleWhack } from "./simple-whack";
import { scoredWhack } from "./scored-whack";
import { callbagWhack } from "./callbag-simple-whack";
import { missMessage } from "./miss-message";
import { hitMessage } from "./hit-message";

export function startExample1(deck) {}

export function startExample2(deck) {
  simpleWhack(deck.querySelector(".example2"));
}

export function startExample3(deck) {}

export function startExample4(deck) {
  missMessage(deck.querySelector(".example4"));
  deck.querySelector(".example4 a-mole").start();
}

export function startExample4b(deck) {
  hitMessage(deck.querySelector(".example4b"));
  deck.querySelector(".example4b a-mole").start();
}

export function startExample5(deck) {
  callbagWhack(deck.querySelector(".example5"));
}
