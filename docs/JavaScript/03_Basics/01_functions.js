// Function to print each letter of the word 'HIT' on a new line
function sayMyName() {
  console.log('H'); // Prints 'H'
  console.log('I'); // Prints 'I'
  console.log('T'); // Prints 'T'
}

// sayMyName()  // Uncomment to call the function and see the result

// Function to add two numbers and print the result
// The function has been refactored to return the sum instead of logging it
function addTwoNumbers(number1, number2) {
  // let result = number1 + number2  // Store the result in a variable
  // return result  // Return the stored result
  return number1 + number2; // Directly return the sum of the two numbers
}

const result = addTwoNumbers(3, 5); // Call the function with 3 and 5

// console.log("Result: ", result);  // Uncomment to log the result of addition, which is 8

// Function to return a login message with a default username
function loginUserMessage(username = 'sam') {
  // Default value for username is 'sam'
  if (!username) {
    // If username is falsy (empty string, null, undefined, etc.)
    console.log('Please enter a username');
    return;
  }
  return `${username} just logged in`; // If username is provided, return the message
}

// console.log(loginUserMessage("userName"))  // Uncomment to see the message for the username "userName"
// console.log(loginUserMessage("userName"))  // The same output will occur as the function is called twice

// Function to calculate cart price with rest parameter to accept any number of additional arguments
function calculateCartPrice(val1, val2, ...num1) {
  // `...num1` is a rest parameter that collects all extra arguments into an array
  return num1; // Return the array of additional arguments (cart items)
}

// console.log(calculateCartPrice(200, 400, 500, 2000))  // Uncomment to log the array [500, 2000]

// Function to handle an object and print its properties
const user = {
  username: 'userName', // The username property of the object
  prices: 199 // The price property of the object
};

// Function to handle an object and log specific properties
function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}` // Accessing the properties of the object
  );
}

// handleObject(user)  // Uncomment to call the function with the user object

// Handle object inline without storing in variable
handleObject({
  username: 'sam', // Inline object with a new username and price
  price: 399
}); // Prints 'Username is sam and price is 399'

// Function to return the second value of an array
const myNewArray = [200, 400, 100, 600]; // Example array

function returnSecondValue(getArray) {
  return getArray[1]; // Return the second element in the array (index 1)
}

// console.log(returnSecondValue(myNewArray));  // Uncomment to get the second value from the example array (400)
console.log(returnSecondValue([200, 400, 500, 1000])); // Returns the second value of the new inline array, which is 400
