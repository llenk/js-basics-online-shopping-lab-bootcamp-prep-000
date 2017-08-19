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
  var string = "";
  if (cart.length === 0) {
    string = "Your shopping cart is empty.";
  }
  else {
    string = 'In your cart, you have ';
  }
  if (cart.length === 1) {
    for (var imet in cart[0]) {
      string += "" + imet +  " at \$" + cart[0][imet] + ".";
    }

  }
  else if (cart.length === 2) {
    
  }
  console.log(string);
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
