//Importing module
// as price = i can rename the imported variable
// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// addToCart('Bread', 2);
// console.log(price, qt);
//Imports everything that is exported from shoppingCart.js
import * as shoppingCart from './shoppingCart.js';
shoppingCart.addToCart('Bread', 2);
console.log(shoppingCart.totalPrice, shoppingCart.qt);
