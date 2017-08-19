var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart[cart.length] = new Object({[item]:Math.floor(Math.random()*100 + 1)})
  var string = "";
  console.log("" + item + " has been added to your cart.")
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }
  else if (cart.length === 1) {
    var string = 'In your cart, you have ';
    var imet = cart[0];
    for (var x in imet) {
      string += 
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
