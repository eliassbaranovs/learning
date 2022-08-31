//Importing module
// as price = i can rename the imported variable
// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// addToCart('Bread', 2);
// console.log(price, qt);
//Imports everything that is exported from shoppingCart.js

import * as shoppingCart from './shoppingCart.js';
shoppingCart.addToCart('Bread', 2);
console.log(shoppingCart.totalPrice, shoppingCart.qt);

//Import default export, can name the function as you want
import add from './shoppingCart.js';
add('Bread', 5);
add('Pizza', 11);
add('Apples', 3);

//Imports are not copies, they are live-connected
import { cart } from './shoppingCart.js';
console.log(cart);
/*
//Top level await, but this block execution of the rest of the code/module
console.log('Start fethcing');
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
console.log('End of fetching, because fetch blocks me from running');


//Async function doesnt block the rest of the code, it is executed in the background
console.log('1');
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  //It will return a promise, not the object, since its still awaiting information
  return { title: data.at(-1).title, text: data.at(-1).body };
};
console.log('2');
// const lastPost = getLastPost(); //Returns promise
// console.log(lastPost); // Returns promise
// lastPost.then(last => console.log(last)); //Not very clean

const lastPost2 = await getLastPost(); //await waits for the promise to be resolved
console.log(lastPost2); //Returns object
*/

/*
//CommonJS import, works only in nodejs
const {addToCart } = require('./shoppingCart.js');
*/
//import without parcel
//import cloneDeep from 'lodash-es/cloneDeep.js';
//Import with parcel
import cloneDeep, { fromPairs } from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', qt: 2 },
    { product: 'pizza', qt: 1 },
  ],
  user: { loggedIn: true },
};
const stateClone = cloneDeep(state);
console.log(stateClone);
state.user.loggedIn = false;

//Saves, packs and restores states(for instance if logged in, you stay logged in)
if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = 'hey!';
  constructor(name) {
    this.name = name;
    console.log(`${this.name}, ${this.#greeting}`);
  }
}
const jonas = new Person('Elis');
console.log(jonas);

//Polyfill(for new features that can`t be implemented in older browsers)
import 'core-js/stable'; //npm i core-js

//Polyfill for async functions
import 'regenerator-runtime/runtime'; //npm i regenerator-runtime
