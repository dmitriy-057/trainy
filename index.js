const outPutEl = document.querySelector('.js-output');
const clearBtn = document.querySelector('button');

window.addEventListener('keypress', onKeyPress);
clearBtn.addEventListener('click', onClearOutput)
function onKeyPress(event) {
  console.log(event.key);
  outPutEl.textContent += event.key;
}

function onClearOutput() {
  outPutEl.textContent = ''
}