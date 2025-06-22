// Singleton pattern: Ensures a class has only one instance and provides a global point of access to it.
// (This example doesn't explicitly use a singleton, but a singleton can be created via a function or class.)

// Object.create(): Creates a new object, using an existing object as a prototype.
const mySym = Symbol('key1'); // A unique symbol used as a property key

// Object literals: Defining objects using the literal syntax (key-value pairs)
const JsUser = {
  name: 'John', // Regular key-value pair
  'full name': 'John Choudhary', // Key with spaces (must use quotes to access)
  [mySym]: 'mykey1', // Using computed property names (symbol as key)
  age: 18, // Another key-value pair
  location: 'Jaipur',
  email: 'John@google.com', // Initial email value
  isLoggedIn: false, // Boolean indicating logged-in status
  lastLoginDays: ['Monday', 'Saturday'] // Array of login days
};

// Accessing object properties using dot notation and bracket notation:
// console.log(JsUser.email);  // Logs 'John@google.com' - Accesses property using dot notation
// console.log(JsUser["email"]);  // Equivalent to the above, accesses via bracket notation
// console.log(JsUser["full name"]);  // Accesses a property with spaces using bracket notation
// console.log(JsUser[mySym]);  // Accesses a property with a symbol key

// Modifying an existing property value
JsUser.email = 'John@chatgpt.com'; // Changes email to 'John@chatgpt.com'

// Object.freeze(): Freezes the object, preventing any changes to its properties (including adding/removing new properties)
// Object.freeze(JsUser); // Uncommenting this line will prevent further changes to the object properties

JsUser.email = 'John@microsoft.com'; // Since Object.freeze is commented out, this change will occur
// console.log(JsUser);  // Logs the JsUser object with the updated email value

// Adding methods to the object (functions as object properties)
JsUser.greeting = function () {
  console.log('Hello JS user');
};

// Another method with access to the object's properties via `this`
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

// Calling the methods:
console.log(JsUser.greeting()); // Calls greeting function, logs 'Hello JS user'
console.log(JsUser.greetingTwo()); // Calls greetingTwo, logs 'Hello JS user, John'
