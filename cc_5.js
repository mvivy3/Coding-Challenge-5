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


// Task 5: Product Availability

// Declar an array inventory with at least five product quantities
let inventory = [200, 500, 0, 100, 300]
// Use the .filter method to remove products with zero stock
let filteredInventory= inventory.filter(inventory => inventory > 0);

// Log the filtered array 
console.log(filteredInventory);


// Task 6: Revenue Calculation

// Declare an array
let sales = [1000, 2000, 3000, 4000]
// Use the .reduce() method to calculate total revenue
let totalRevenue = sales.reduce((total, sale) => total + sale, 0);

// Log the total revenue
console.log("Total Revenue: ", totalRevenue); 
