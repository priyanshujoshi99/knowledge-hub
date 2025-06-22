// Declare a variable and assign a string value
let score = 'john';

// Demonstrate type conversion from string to number
let valueInNumber = Number(score); // Converts 'john' to NaN
// Conversion rules:
// - "33" => 33
// - "33abc" => NaN
// - true => 1; false => 0

// Declare a string variable and convert it to a boolean
let isLoggedIn = 'john'; // Non-empty string evaluates to true
let booleanIsLoggedIn = Boolean(isLoggedIn);

// Conversion rules:
// - 1 => true; 0 => false
// - "" => false (empty string)
// - Non-empty strings (e.g., "john") => true

// Demonstrate type conversion from number to string
let someNumber = 33;
let stringNumber = String(someNumber); // Converts 33 to "33"

// *********************** Operations ***********************

// Demonstrating unary negation
let value = 3;
let negValue = -value; // -3

// Basic arithmetic operations
// console.log(2 + 2); // Addition
// console.log(2 - 2); // Subtraction
// console.log(2 * 2); // Multiplication
// console.log(2 ** 3); // Exponentiation (2^3 = 8)
// console.log(2 / 3); // Division
// console.log(2 % 3); // Modulus (remainder)

// String concatenation
let str1 = 'hello';
let str2 = ' john';
let str3 = str1 + str2; // Concatenates strings: "hello john"

// Mixed type operations
// console.log("1" + 2); // "12" (string concatenation)
// console.log(1 + "2"); // "12" (string concatenation)
// console.log("1" + 2 + 2); // "122"
// console.log(1 + 2 + "2"); // "32"

// Operator precedence
// console.log((3 + 4) * 5 % 3); // Evaluates the expression using operator precedence

// Unary plus operator
// console.log(+true); // 1
// console.log(+""); // 0 (empty string converts to 0)

// Multiple variable assignment
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // Assigns 4 to num1, num2, and num3

// Increment operator
let gameCounter = 100;
++gameCounter; // Pre-increment, increments gameCounter by 1
console.log(gameCounter); // Outputs: 101
