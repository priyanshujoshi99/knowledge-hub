// Primitive Data Types

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 100; // Number
const scoreValue = 100.3; // Number

const isLoggedIn = false; // Boolean
const outsideTemp = null; // Null
let userEmail; // Undefined

const id = Symbol('123'); // Symbol
const anotherId = Symbol('123'); // Another Symbol

console.log(id === anotherId); // false, because Symbols are unique

// const bigNumber = 3456543576654356754n; // BigInt example

// Reference (Non-Primitive Data Types)

// Examples: Arrays, Objects, Functions
const heros = ['shaktiman', 'naagraj', 'doga']; // Array
let myObj = {
  name: 'john',
  age: 22
}; // Object

const myFunction = function () {
  console.log('Hello world'); // Function
};

console.log(typeof anotherId); // Symbol
