
export function scoredWack(el) {
    let scoreBoard = el.querySelector('score-board');

    el.addEventListener('wack!', () => {
        scoreBoard.points += 1;
    });

    el.addEventListener('miss!', () => {
        scoreBoard.points -= 1;
    });
}