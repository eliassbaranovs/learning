//Exporting module

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({
    product: product,
    quantity: quantity,
  });
  console.log(`${quantity} ${product} has been added to the cart`);
};

const totalPrice = 237;
const totalQuantity = 23;
export { totalPrice, totalQuantity as qt };
// qt = totalQuantity, can change variable name to whatever we want
