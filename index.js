import products from './products.js';

const makeProductsTableMarkUp = ({id,name,description, price}) => {
return `<tr>
<td>
  ${id}
</td>
<td>
  ${name}
</td>
<td>
  ${description}
</td>
<td>
  ${price}
</td>
</tr> `
}

const createProductsTable = products.map(makeProductsTableMarkUp).join('') ;
console.log(createProductsTable)

const tableEl = document.querySelector('.js-table');
tableEl.insertAdjacentHTML('beforeend', createProductsTable);


// const makeCard = ({name, description, price}) => {
//     const articleEl = document.createElement('article');
//     articleEl.classList.add('product');
    
//     const nameEl = document.createElement('h2');
//     nameEl.classList.add('product__name');
//     nameEl.textContent = name;
    
//     const descrEl = document.createElement('p');
//     descrEl.classList.add('product__descr');
//     descrEl.textContent = description;
    
//     const priceEl = document.createElement('p');
//     priceEl.classList.add('product__price');
//     priceEl.textContent = `Цена: ${price} $`;
    
    
//     articleEl.append(nameEl, descrEl, priceEl);
//     console.log('articleEl', articleEl);
//     return articleEl
// }




// const elements = products.map(makeCard);
// const containerEl = document.querySelector('.js-container');
// containerEl.append(...elements);