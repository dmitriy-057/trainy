const lazyImages = document.querySelectorAll('img[loading="lazy"]');
console.log(lazyImages);

lazyImages.forEach(image => {
    image.addEventListener('load', onImageLoaded, {once: true});
})

function onImageLoaded(evt) {
    console.log(evt.target)
console.log('Image loaded')
    evt.target.classList.add('appear')
} 