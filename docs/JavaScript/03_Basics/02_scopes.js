// Using `let` to declare a variable `a` with block scope
let a = 300;
if (true) {
  // Block-scoped variable `a` within the `if` block
  let a = 10;
  // Block-scoped constant `b`
  const b = 20;
  // console.log("INNER: ", a);  // Uncomment to see the inner value of `a` (10)
}

// console.log(a);  // Logs the outer `a` value (300)
// console.log(b);  // Throws error: `b` is not defined outside the block
// console.log(c);  // Throws error: `c` is not defined, as it is commented out

// Demonstrating scope with nested functions
function one() {
  const username = 'name'; // Variable scoped within `one` function

  function two() {
    const website = 'youtube'; // Variable scoped within `two` function
    console.log(username); // Accesses `username` from the outer `one` function's scope
  }

  // console.log(website);  // Throws error: `website` is not defined in the outer scope

  two(); // Calls `two()` and logs 'name' from the outer function's scope
}

// one();  // Uncomment to call `one` and see the output 'name'

if (true) {
  const username = 'name'; // Constant scoped to this block
  if (username === 'name') {
    const website = ' youtube'; // Constant scoped within the nested block
    // console.log(username + website);  // Uncomment to see 'name youtube'
  }
  // console.log(website);  // Throws error: `website` is not defined outside the nested block
}

// console.log(username);  // Throws error: `username` is not defined outside the block

// ++++++++++++++++++ interesting ++++++++++++++++++

// Calling a function before its declaration (hoisting behavior)
console.log(addone(5)); // Logs 6 because the function is hoisted

// Function declaration: hoisted, can be called before its definition
function addone(num) {
  return num + 1;
}

// Using function expression: cannot be called before definition
addTwo(5); // Throws error because `addTwo` is not hoisted

// Function expression: `addTwo` is defined as a function expression, and cannot be called before this line
const addTwo = function (num) {
  return num + 2;
};
