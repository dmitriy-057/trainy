const submitFormEl = document.querySelector('.form');

submitFormEl.addEventListener('submit', onSubmitFormClick)

function onSubmitFormClick(event) {
event.preventDefault()

const formData = new FormData(event.currentTarget);
formData.forEach((value, name) => {
  console.log('onSubmitFormClick ---> name', name);
  console.log('onSubmitFormClick ---> value', value);
})

}