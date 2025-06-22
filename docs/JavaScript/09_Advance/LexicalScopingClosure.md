# Lexical Scoping and Closures in JavaScript

## Overview

**Lexical Scoping** and **Closures** are fundamental concepts in JavaScript that govern how variables are accessed and functions retain access to their lexical environment even after the outer function has finished executing.

---

## Key Concepts

### 1. **Lexical Scoping**

- Lexical scoping means that the scope of a variable is determined by its position in the source code.
- Inner functions have access to variables declared in their outer (enclosing) functions.

### 2. **Closures**

- A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.
- Closures are created every time a function is created, at function creation time.

---

## Code Snippet Breakdown

### 1. **Basic Example of Lexical Scoping**

```javascript
function init() {
  let name = 'Mozilla';
  function displayName() {
    console.log(name);
  }
  displayName();
}
init();
```

- **Explanation**:
  - `displayName` is an inner function that has access to the `name` variable from its outer function `init`.
  - This demonstrates lexical scoping, where the inner function can access variables from its outer scope.

---

### 2. **Nested Functions and Scope Chain**

```javascript
function outer() {
  let username = 'john';
  console.log('OUTER', secret); // Error: secret is not defined
  function inner() {
    let secret = 'my123';
    console.log('inner', username); // "john"
  }
  function innerTwo() {
    console.log('innerTwo', username); // "john"
    console.log(secret); // Error: secret is not defined
  }
  inner();
  innerTwo();
}
outer();
console.log('TOO OUTER', username); // Error: username is not defined
```

- **Explanation**:
  - `inner` and `innerTwo` are nested functions inside `outer`.
  - `inner` can access `username` from `outer` but cannot access `secret` from `innerTwo` because of block scoping.
  - Variables declared in an outer scope are accessible to inner functions, but not vice versa.

---

### 3. **Closure Example**

```javascript
function makeFunc() {
  const name = 'Mozilla';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc(); // "Mozilla"
```

- **Explanation**:
  - `makeFunc` returns the `displayName` function, which retains access to the `name` variable even after `makeFunc` has finished executing.
  - This is a closure, where the inner function (`displayName`) "closes over" the `name` variable.

---

### 4. **Practical Use of Closures (Event Handlers)**

```javascript
function clickHandler(color) {
  return function () {
    document.body.style.backgroundColor = `${color}`;
  };
}

document.getElementById('orange').onclick = clickHandler('orange');
document.getElementById('green').onclick = clickHandler('green');
```

- **Explanation**:
  - `clickHandler` returns a function that changes the background color of the document body.
  - The returned function forms a closure over the `color` parameter, allowing it to remember the `color` value even after `clickHandler` has finished executing.
  - This is a practical use of closures in event handling.

---

## Additional Points

### 1. **Advantages of Closures**

- **Data Encapsulation**: Closures allow you to create private variables and methods.
- **Function Factories**: Closures can be used to create functions with preset parameters.
- **Callbacks and Event Handlers**: Closures are widely used in asynchronous programming, such as in event listeners and callbacks.

### 2. **Common Pitfalls**

- **Memory Leaks**: Closures can cause memory leaks if not used carefully, as they retain references to their outer scope.
- **Performance Overhead**: Excessive use of closures can lead to performance issues due to increased memory consumption.

### 3. **Lexical Scoping vs Dynamic Scoping**

- **Lexical Scoping**: Scope is determined at the time of writing the code (compile time).
- **Dynamic Scoping**: Scope is determined at runtime (not used in JavaScript).

---

## Interesting Facts

- Closures are a powerful feature of JavaScript and are used extensively in libraries like React (e.g., hooks) and frameworks like Angular.
- Closures are often used in functional programming to create higher-order functions.
- The concept of closures is not unique to JavaScript; it exists in other languages like Python, Ruby, and Swift.

---

## Summary

- **Lexical Scoping**: Determines the accessibility of variables based on their position in the code.
- **Closures**: Functions that retain access to their lexical scope, even when executed outside that scope.
- **Practical Use**: Closures are widely used in event handling, callbacks, and data encapsulation.
