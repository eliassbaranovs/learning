//Exporting module

const shippingCost = 10;
export const cart = [];
//Top level await blocking the rest of the code before it finishes
//Blocking code (blocks the rest of the code from running in script.js before it  is finished)
/*
console.log('Start fetch');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log('Finished fetching data');
*/

export const addToCart = function (product, quantity) {
  cart.push({
    product: product,
    quantity: quantity,
  });
  console.log(`${quantity} ${product} has been added to the cart`);
};

const totalPrice = 237;
const totalQuantity = 23;
// qt = totalQuantity, can change variable name to whatever we want
export { totalPrice, totalQuantity as qt };

//Default exports(exports a value)
export default function (product, quantity) {
  cart.push({
    product: product,
    quantity: quantity,
  });
  console.log(`${quantity} ${product} has been added to the cart`);
}

//Common JS modules works only in node.js
/*
export.addToCart =  function (product, quantity) {
  cart.push({
    product: product,
    quantity: quantity,
  });
  console.log(`${quantity} ${product} has been added to the cart`);
};
*/
