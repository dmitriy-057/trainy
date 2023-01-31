const coordsOutputRef = document.querySelector('.js-coords');

let mousemoveCounter = 0;


window.addEventListener('mousemove', _.throttle(onMouseMove, 500));

function onMouseMove(event) {
    mousemoveCounter +=1;

    coordsOutputRef.textContent = `
    Кол-во вызовов onMouseMove: ${mousemoveCounter},
    X: ${event.clientX},
    Y: ${event.clientY}
    `;
}

const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');

let inputCounter = 0;

inputRef.addEventListener('input', _.debounce(onInputChange, 300));

function onInputChange(event) {
    inputCounter +=1;
    outputRef.textContent = `
    Кол-во вызовов onInputChange: ${inputCounter},
    Значение: ${event.target.value}
    `
}