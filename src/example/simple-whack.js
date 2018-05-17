
export function simpleWhack(el) {
    let points = 0;
    let livesCount = 3;
    let score = el.querySelector('.score');
    let lives = el.querySelector('.lives');
    let moles = [].slice.call(el.querySelectorAll('a-mole'));

    el.querySelector('.start').addEventListener('click', () => {
        moles.forEach(mole => mole.start());
        points = 0;
        livesCount = 3;
    });

    el.addEventListener('hit!', () => {
        score.textContent = ++points;
    });

    el.addEventListener('miss!', () => {
        lives.textContent = --livesCount;

        if (!livesCount) {
            moles.forEach(mole => mole.stop());
        }
    });
}