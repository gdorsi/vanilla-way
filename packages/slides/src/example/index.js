import './Mole';
import './ScoreBoard';
import { simpleWack } from './simple-wack';
import { scoredWack } from './scored-wack';

export function startExample1(deck) {
}

export function startExample2(deck) {
    simpleWack(deck.querySelector('.example2'));
}

export function startExample3(deck) {
    scoredWack(deck.querySelector('.example3'));
}