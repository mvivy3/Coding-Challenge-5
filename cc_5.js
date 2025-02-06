// Task 1: Customer Profile

// Declare an object customer with the properties
let customer = {
    name: "Diamond", age: 91, email: "diamond07@gmail.com"};

//Log each perperty using console.log and a template literal
console.log(customer);
console.log(`Customer profile: Name - ${customer.name}, Age - ${customer.age}, Email - ${customer.email}`);


// Task 2: Order Details

// Declare an object order with properties
let order = {
    orderId: 56789,
    totalAmount: 250,
    status: "Processing"
};
// Add a method "displayOrder" to log the order details using "this"
order.displayOrder = function() {
    console.log("Order Id: " + this.orderId, "Total Amount: " + this.totalAmount, "Status: " + this.status);
};
// Call the method 
order.displayOrder();
// Log the order details
console.log(order);


// Task 3: Shopping Cart

// Declare an array cartItems with three product names
let cartItems = ["Dress", "Phone case", "Makeup"];
//Add a new product to the cart using .push()
cartItems.push("Headphones");
// Remove the first item using .shift()
cartItems.pop();
// Add an item at the beginning using .unshift()
cartItems.unshift("Flowers");
// Remove the first item using .shift()
cartItems.shift()

//Log the final array
console.log(cartItems)


// Task 4: Price Adjustments

// Declare an array 
let prices = [100, 200, 300]
// Use the .map() method to apply a 10% discount to each price
let discountedPrices = prices.map(price => price * 0.9);

// Log the new discounted prices
console.log("Discounted Prices: ", discountedPrices);
