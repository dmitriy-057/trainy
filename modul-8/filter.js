const tech = [
    {label: 'HTML'},
    {label: 'CSS'},
    {label: 'JavaScript'},
    {label: 'React'},
    {label: 'Redux'},
    {label: 'Redux Router'},
    {label: 'Node.js'},
];

const refs = {
    list: document.querySelector('.js-list'),
    input: document.querySelector('#filter'),
};


refs.input.addEventListener('input', _.debounce(onFilterChange, 300));

// записали вызов функции в переменную;
const createlistMarkup = createListItemsMarkup(tech);


// рендерим разметку в ul;
populateList(createlistMarkup);

// функция для рендера разметки;
function createListItemsMarkup(items) {   
    return items.map(item => `<li>${item.label}</li>`).join('');
};

// функция для фильтра массива обьектов по значению инпута;
function onFilterChange(evt) {
    const filter = evt.target.value.toLowerCase();

    //фильтруем массив обьектов
   const filteredItems = tech.filter(elem => elem.label.toLowerCase().includes(filter));


    const filteredListItemsMarkup = createListItemsMarkup(filteredItems);

    // рендерим отфлитрованный массив обьектов;
    populateList(filteredListItemsMarkup);
    
};


// функция для рендера массива обьектов в ul;
function populateList(markup) {
    refs.list.innerHTML = markup;
}
