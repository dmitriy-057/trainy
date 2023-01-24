const containerEl = document.querySelector('.js-container');

containerEl.addEventListener('click', onClick);


function onClick(event) {
    if(event.target.nodeName !== 'BUTTON') {
        return;
    }
    console.log('target', event.target)
    // console.log('currentTarget', event.currentTarget)
}
