const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  const allValues = [];
  console.log(allValues);

  function getAllPropValues(propName) {
    // Change code below this line

    
  for (const product of products) {
    console.log(product);
    
    if(propName === product.name) {
      allValues.push(product.name);
    } 
      else if(propName === product.quantity) {
        allValues.push(product.quantity)
    } 
      else if(propName === product.price) {
      allValues.push(product.price)
    } 
    return allValues;
  }
    // Change code above this line
  }
  