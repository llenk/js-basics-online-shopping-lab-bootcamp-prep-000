var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart[cart.length] = new Object({[item]:Math.floor(Math.random()*100)})
  console.log(`${name} has been added to your cart.`)
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else if (cart.length === 1) {
    var string += 'In your cart, you have';
    for (var imet in cart[0]) {
      string += `${imet} at ${cart[0][imet]}.`
    }
    console.log(string);
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
