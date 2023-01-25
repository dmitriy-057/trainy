const colors = [
    {hex:'#f44336', rgb:'244, 67, 54'},
    {hex:'#3f51b5', rgb:'63,81,18'},
    {hex:'#2196f3', rgb:'33,150,243'},
    {hex:'#00bcd4', rgb:'0,188,212'},
]

const paletteContainer = document.querySelector('.js-palette');
const cardsMarkup = createColorCardMarkup(colors);

paletteContainer.addEventListener('click', onPaletteContainerClick);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup)


function createColorCardMarkup(elements) {
    return elements
        .map(({hex,rgb}) => {
       return `<div class="color-card">
        <div class="color-swatch"
        data-hex="${hex}"
        data-rgb="${rgb}"
        style="background-color: ${hex}">
        </div>
        <div class="color-meta">
            <p>HEX: ${hex}</p>
            <p>RGB: ${rgb}</p>
        </div>
    </div> `
    }).join('')
}

function onPaletteContainerClick(evt) {
   if(!evt.target.classList.contains('color-swatch')) {
    return;
   };

   removeActiveClass();

    const swatchEl = evt.target;
    const parentColorSwatch = swatchEl.closest('.color-card');
    addActiveClass(parentColorSwatch);

    bodyAddColor(swatchEl.dataset.hex);

}

function bodyAddColor(color) {
    document.body.style.backgroundColor = color;
    console.log(color);
};

function removeActiveClass() {
    const currentActiveCard = document.querySelector('.color-card.is-active');

    if(currentActiveCard) {
     currentActiveCard.classList.remove('is-active');
    };
};

function addActiveClass(elem) {
    elem.classList.add('is-active');
};
