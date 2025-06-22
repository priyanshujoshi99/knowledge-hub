// Declare a constant variable to store account ID 🔑
// `const` ensures that this value cannot be reassigned later 🔒
const accountId = 144553;

// Declare a variable using `let` for account email 📧
// `let` allows reassignment 🔄 and has block scope, which is safer than `var` ⚡
let accountEmail = 'john@google.com';

// Avoid using `var` for variable declaration 🚫 due to its function scope and hoisting behavior 📤
// Hoisting with `var` can lead to unexpected behavior due to its functional scope 🌀
var accountPassword = '12345';

// Assign a value to an undeclared variable (implicitly global variable) 🌍
// This is allowed in JavaScript but should be avoided due to potential issues with global scope pollution 💣
// Best practice is to declare variables explicitly 📝
accountCity = 'Jaipur'; // Not recommended practice ❌

// Declare a `let` variable without initializing it, allowing initialization later ⏳
let accountState;

// Hoisting example with `var` (hoisted to the top of its scope) ⬆️
// `var` declarations are hoisted to the top of their function or global scope, but only the declaration is hoisted, not the value 🔼
console.log(accountHoisted); // Undefined due to hoisting behavior of `var` 😬
var accountHoisted = 'This is hoisted!'; // Hoisting occurs here, but value is assigned after reference 🗓️

// Hoisting with `let` or `const` will result in a ReferenceError 🚨
// Variables declared with `let` and `const` are hoisted, but they are not initialized until their actual declaration line 🕔
// This causes a Temporal Dead Zone (TDZ) 🛑, preventing access to the variable before initialization ⚠️
// Uncommenting the following line will throw an error because of the TDZ for `let` 💥
// console.log(accountHoistedLet); // ReferenceError: Cannot access 'accountHoistedLet' before initialization ❌
let accountHoistedLet = "This won't work with let";

// Uncommenting the line below will throw an error because `const` variables cannot be reassigned 🔐
// `const` ensures immutability and prevents reassignment 🔒
// accountId = 2; // ❌ Not allowed

// Reassign `let` and `var` variables with new values 🔄
accountEmail = 'hc@hc.com'; // Updated email 📨
accountPassword = '21212121'; // Updated password 🔑

console.log(accountId); // Logs accountId 🛡️

/*
Prefer not to use `var` because of its functional scope and potential hoisting issues ⚡,
which can lead to unexpected behavior 🌀. Use `let` or `const` instead for better scoping 🛡️.
Variables declared with `let` and `const` are block-scoped and avoid hoisting pitfalls 🔒.
`const` is used for values that shouldn't change after initialization 🔑.
*/

// Use `console.table` to display the account details in a tabular format 📊
console.table([
  accountId, // Constant account ID 🛡️
  accountEmail, // Updated email 📨
  accountPassword, // Updated password 🔑
  accountState // Undefined state 🤔 (no value assigned yet)
]);
