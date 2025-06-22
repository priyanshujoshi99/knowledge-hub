// Comparison Operators in JavaScript

// Basic comparisons
// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

// Type coercion in comparisons
// console.log("2" > 1); // true ("2" is converted to number 2)
// console.log("02" > 1); // true ("02" is converted to number 2)

// Special cases with `null`
console.log(null > 0); // false (null is treated as 0 in numeric comparisons)
console.log(null == 0); // false (null only equals undefined in non-strict equality)
console.log(null >= 0); // true (null is treated as 0 for >= comparisons)

// Special cases with `undefined`
console.log(undefined == 0); // false (undefined only equals null in non-strict equality)
console.log(undefined > 0); // false (undefined cannot be compared numerically)
console.log(undefined < 0); // false (undefined cannot be compared numerically)

// Strict equality (no type coercion)
console.log('2' === 2); // false ('2' is a string, 2 is a number)
