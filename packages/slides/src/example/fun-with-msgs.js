import { AnimatedMessage } from "./AnimatedMessage";

let loseMessage = () =>
  new AnimatedMessage({
    message: "Looser!",
    className: "lose-message",
    duration: 3000
  });

let hitMessage = ({ x, y }) =>
  new AnimatedMessage({
    message: "Hit!",
    className: "hit-message",
    duration: 1000,
    x,
    y
  });

export function funWithMsgs(el) {
  let score = el.querySelector(".score");
  let lives = el.querySelector(".lives");
  let moles = [].slice.call(el.querySelectorAll("a-mole"));

  el.querySelector(".start").addEventListener("click", () => {
    moles.forEach(mole => mole.start());
    score.value = 0;
    lives.value = 3;
  });

  el.addEventListener("hit!", ({ detail }) => {
    score.value += 1;

    el.appendChild(hitMessage(detail));
  });

  el.addEventListener("miss!", () => {
    lives.value -= 1;

    if (!lives.value) {
      moles.forEach(mole => mole.stop());
      el.appendChild(loseMessage());
    }
  });
}
