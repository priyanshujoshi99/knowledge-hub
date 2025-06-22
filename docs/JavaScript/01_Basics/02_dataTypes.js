'use strict'; // Treat all JavaScript code as newer version (ES6 and above)

// Avoid using browser-specific functions like `alert` in a Node.js environment
// alert(3 + 3); // ❌ Commented out because this is Node.js, not a browser

/*
Readable code is important. Properly format multi-line expressions to enhance clarity.
For example:
console.log(3 + 3); // ✅ Better readability
*/

// Output a simple string to the console
console.log('john');

// Declare variables using `let` and initialize them with appropriate values
let name = 'john'; // String variable
let age = 18; // Number variable
let isLoggedIn = false; // Boolean variable
let state; // Declared but not initialized (undefined)

/*
JavaScript Data Types:
1. Number:
   - Includes integers and floating-point numbers.
   - Can handle values up to ±(2^53 - 1).
2. BigInt:
   - Used for representing numbers larger than ±(2^53 - 1).
3. String:
   - Textual data enclosed in double quotes ("") or single quotes ('').
4. Boolean:
   - Represents logical true or false.
5. Null:
   - A standalone value that signifies "nothing" or "empty".
6. Undefined:
   - A variable that has been declared but not yet assigned a value.
7. Symbol:
   - Represents a unique and immutable value, often used as object property keys.
*/

// - Object: A collection of key-value pairs

// Check the types of different values
console.log(typeof undefined); // Outputs: undefined
console.log(typeof null); // Outputs: object (a known quirk in JavaScript)
