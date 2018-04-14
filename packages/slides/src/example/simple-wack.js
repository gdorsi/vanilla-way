
export function simpleWack(el) {
    let count = 0;
    let score = el.querySelector('.score');

    el.addEventListener('wack!', () => {
        score.textContent = ++count;
    });
}