// const refs = {
//     list: document.querySelector('.js-tags'),
// }

// refs.list.addEventListener('click', onClick);

// function onClick(evt) {
//     if (evt.target.nodeName !== 'BUTTON') {
//         return;
//     }
//     let selectedTag = null;
//     const currentActiveTag = document.querySelector('.tags__btn-active');

//     // if(currentActiveTag) {
//     //     currentActiveTag.classList.remove('tags__btn-active');
//     // }

//     currentActiveTag?.classList.remove('tags__btn-active');

//     const nextActiveTag = evt.target;
//     nextActiveTag.classList.add('tags__btn-active');

//     selectedTag =nextActiveTag.dataset.value;
//     console.log(selectedTag)
// }

const refs = {
    list: document.querySelector('.js-tags'),
}
let selectedTags = new Set();

refs.list.addEventListener('click', onClick);

function onClick(evt) {
    if (evt.target.nodeName !== 'BUTTON') {
        return;
    }
    const btn = evt.target;
    const tag = btn.dataset.value;
    const isActiveTag = btn.classList.contains('tags__btn-active');

    if(isActiveTag) {
        selectedTags.delete(tag);
    } else {
        selectedTags.add(tag);
    }
    
    evt.target.classList.toggle('tags__btn-active');

    console.log(selectedTags);
}