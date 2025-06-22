const user = {
  username: 'name',
  price: 999,

  // Method in an object: 'this' refers to the object the method belongs to (i.e., the 'user' object)
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`); // Accessing 'username' from the 'user' object using 'this'
    console.log(this); // Logs the entire 'user' object. 'this' refers to the object context.
  }
};

// user.welcomeMessage();  // Calls the method, logs the message with 'name' and the entire 'user' object

// Changing the 'username' property in the 'user' object and calling the method again to see updated values
// user.username = "sam";  // Changes the 'username' property to 'sam'
// user.welcomeMessage();  // Logs the updated message with 'sam'

// console.log(this);  // Logs 'this' outside of any function, which refers to the global object (window in browsers) or `undefined` in strict mode

// Function `chai` using regular function syntax
function chai() {
  let username = 'name'; // Local variable inside the function
  console.log(this.username); // 'this' refers to the global object in regular functions (not the function's context), so 'this.username' will be undefined
}

// chai();  // Calls the function, logs 'undefined' because `this` refers to the global object and doesn't have a 'username' property

// Function `chai` using function expression syntax (same result as the regular function, `this` is still the global object)
const chai = function () {
  let username = 'name'; // Local variable inside the function
  console.log(this.username); // Logs 'undefined' because `this` refers to the global object
};

// Arrow function `chai` - Notice how 'this' behaves differently in arrow functions
const chai = () => {
  let username = 'name'; // Local variable inside the function
  console.log(this); // In arrow functions, 'this' is lexically bound, meaning it inherits 'this' from its surrounding context, usually the global object
};

// chai();  // Logs the surrounding context (global object in browsers)

// Arrow function with explicit return
// Traditional arrow function syntax with a body that requires explicit return statement
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }  // Explicit return; same as traditional function syntax

// Arrow function with implicit return
// const addTwo = (num1, num2) => num1 + num2;  // Implicit return; no need for curly braces or 'return' keyword

// Arrow function returning an object
const addTwo = (num1, num2) => ({ username: 'name' }); // When returning an object, wrap it in parentheses to avoid ambiguity with function body

console.log(addTwo(3, 4)); // Logs the object { username: 'name' }

// Using forEach with an array
const myArray = [2, 5, 3, 7, 8];

// The forEach method is used to iterate over each element of the array and perform an operation
// myArray.forEach() is an array method that requires a callback function as an argument
// Example: Iterate through the array and log each value
// myArray.forEach(item => console.log(item));  // Logs each item in the array (i.e., 2, 5, 3, 7, 8)
