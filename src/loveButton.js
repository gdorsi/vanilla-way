
export function loveButton(el) {
    el.addEventListener('change', evt => {
        if (evt.target.active) {
            alert('I love you!');
        } else {
            alert('You don\'t love me!');
        }
    })
}