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
