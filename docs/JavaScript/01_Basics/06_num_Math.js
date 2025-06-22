// Working with numbers in JavaScript

// Declaring numbers
const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// Working with number methods
// console.log(balance.toString().length); // Converts number to string and gets its length
// console.log(balance.toFixed(1)); // Rounds to 1 decimal place

const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4)); // Rounds to 4 significant digits

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // Formats number as per Indian locale

// +++++++++++++ Math Object Operations +++++++++++++++++++++++++++++

// console.log(Math); // Math object with mathematical constants and methods
// console.log(Math.abs(-4)); // Absolute value; Outputs: 4
// console.log(Math.round(4.6)); // Rounds to nearest integer; Outputs: 5
// console.log(Math.ceil(4.2)); // Rounds up to the nearest integer; Outputs: 5
// console.log(Math.floor(4.9)); // Rounds down to the nearest integer; Outputs: 4
// console.log(Math.min(4, 3, 6, 8)); // Returns the smallest value; Outputs: 3
// console.log(Math.max(4, 3, 6, 8)); // Returns the largest value; Outputs: 8

// Generating random numbers
console.log(Math.random()); // Outputs a random number between 0 and 1
console.log(Math.random() * 10 + 1); // Random number between 1 and 11 (exclusive)
console.log(Math.floor(Math.random() * 10) + 1); // Random integer between 1 and 10 (inclusive)

// Generating random numbers in a range
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random integer between min and max (inclusive)
