
export function scoredWhack(el) {
    let score = el.querySelector('.score');
    let lives = el.querySelector('.lives');
    let moles = [].slice.call(el.querySelectorAll('a-mole'));

    el.querySelector('.start').addEventListener('click', () => {
        moles.forEach(mole => mole.start());
        score.value = 0;
        lives.value = 3;
    });

    el.addEventListener('hit!', () => {
        score.value += 1;
    });

    el.addEventListener('miss!', () => {
        lives.value -= 1;

        if (!lives.value) {
            moles.forEach(mole => mole.stop());
        }
    });
}