const lazyImages = document.querySelectorAll('img[loading="lazy"]');
console.log(lazyImages);

lazyImages.forEach(image => {
    image.addEventListener('load', onImageLoaded);
})

function onImageLoaded(evt) {
console.log('Image loaded')

}