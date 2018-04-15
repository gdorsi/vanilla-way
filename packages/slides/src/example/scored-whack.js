
export function scoredWhack(el) {
    let scoreBoard = el.querySelector('score-board');

    el.addEventListener('hit!', () => {
        scoreBoard.points += 1;
    });

    el.addEventListener('miss!', () => {
        scoreBoard.points -= 1;
    });
}