

if('loading' in HTMLImageElement.prototype) {
    console.log('Браузер поддерживает lazyload');
    addSrcAttrToLazyImages();
} else {
    console.log('Браузер не поддерживает lazyload');

    addLazySizeScript();
}

const lazyImages = document.querySelectorAll('img[data-src]');
console.log(lazyImages);

lazyImages.forEach(image => {
    image.addEventListener('load', onImageLoaded, {once: true});
});

function onImageLoaded(evt) {
    console.log(evt.target)
console.log('Image loaded')
    evt.target.classList.add('appear')
};

function addSrcAttrToLazyImages() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    });
};

function addLazySizeScript() {
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
    script.integrity = "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
    script.crossOrigin = "anonymous";
    script.referrerpolicy = "no-referrer";

    document.body.appendChild(script);
}