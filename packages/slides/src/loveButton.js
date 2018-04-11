
export function loveButton(el) {
    el.addEventListener('toggle-button:on', () => {
        alert('I love you!');
    });

    el.addEventListener('toggle-button:off', () => {
        alert('You don\'t love me!');
    })
}