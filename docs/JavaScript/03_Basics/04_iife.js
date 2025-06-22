// Immediately Invoked Function Expressions (IIFE)

// IIFE is a function expression that is defined and executed immediately after its creation.
// It's typically used to create a local scope and avoid polluting the global scope.

(function chai() {
  // This is a named IIFE, where the function is called immediately after it's defined.
  // It is wrapped inside parentheses to treat it as an expression rather than a declaration.
  // 'chai' is the name of the function, but it's invoked immediately, so the name doesn't have to be used outside.
  console.log(`DB CONNECTED`); // Logs a message to the console
})();
// The function is invoked right away after being defined. This is a common pattern for encapsulating code to avoid affecting the global scope.

// Arrow function IIFE
((name) => {
  // This is an anonymous arrow function that is immediately invoked.
  // The function takes one argument ('name'), which is passed in when the function is invoked.
  console.log(`DB CONNECTED TWO ${name}`); // Logs a message using the argument passed
})('name');
// In this case, 'name' is passed as an argument to the IIFE, which is then logged in the message.
// The arrow function syntax makes this IIFE more concise.

// **Why use IIFE?**
// IIFE is commonly used to avoid creating global variables or functions that might conflict with other parts of the code.
// It is a self-contained unit of execution that can encapsulate logic and variables, ensuring no unintended modifications to the global scope.
