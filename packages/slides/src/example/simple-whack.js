
export function simpleWhack(el) {
    let points = 0;
    let score = el.querySelector('.score');

    el.addEventListener('hit!', () => {
        score.textContent = ++points;
    });

    el.addEventListener('miss!', () => {
        score.textContent = --points;
    });
}