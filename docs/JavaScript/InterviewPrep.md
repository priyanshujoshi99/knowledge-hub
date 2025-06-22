# JS Interview FAQs

## **1. var, let, and const**

### Theory:

- **var**: Function-scoped, hoisted, and can be redeclared.
- **let**: Block-scoped, hoisted but not initialized (Temporal Dead Zone), cannot be redeclared.
- **const**: Block-scoped, cannot be redeclared or reassigned (but object properties can be modified).

### Code Snippet:

```javascript
var x = 10;
let y = 20;
const z = 30;

if (true) {
  var x = 100; // Overwrites global x
  let y = 200; // Scoped to this block
  const z = 300; // Scoped to this block
}

console.log(x); // 100
console.log(y); // 20
console.log(z); // 30
```

### Additional Insights:

- Use `const` by default, `let` when reassignment is needed, and avoid `var`.
- Temporal Dead Zone (TDZ) for `let` and `const` prevents access before declaration.

---

## **2. map, filter, and reduce**

### Theory:

- **map**: Transforms each element in an array and returns a new array.
- **filter**: Returns a new array with elements that pass a condition.
- **reduce**: Reduces an array to a single value by accumulating results.

### Code Snippet:

```javascript
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => num * 2); // [2, 4, 6, 8]
const evens = numbers.filter((num) => num % 2 === 0); // [2, 4]
const sum = numbers.reduce((acc, num) => acc + num, 0); // 10
```

### Additional Insights:

- `map` and `filter` are immutable (do not modify the original array).
- `reduce` is powerful for aggregations, flattening arrays, or creating objects.

---

## **3. Functions**

### Theory:

- Functions can be declared using:
  - Function Declaration: `function foo() {}`
  - Function Expression: `const foo = function() {}`
  - Arrow Functions: `const foo = () => {}`

### Code Snippet:

```javascript
// Function Declaration
function add(a, b) {
  return a + b;
}

// Arrow Function
const multiply = (a, b) => a * b;
```

### Additional Insights:

- Arrow functions do not have their own `this` or `arguments`.
- Function declarations are hoisted, but function expressions are not.

---

## **4. Closures**

### Theory:

- A closure is a function that retains access to its lexical scope, even when executed outside that scope.

### Code Snippet:

```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
```

### Additional Insights:

- Closures are used in **module patterns**, **currying**, and **memoization**.
- They can lead to memory leaks if not managed properly.

---

## **5. Currying**

### Theory:

- Currying transforms a function with multiple arguments into a sequence of functions, each taking a single argument.

### Code Snippet:

```javascript
const add = (a) => (b) => a + b;
const add5 = add(5);
console.log(add5(10)); // 15
```

### Additional Insights:

- Currying enables **partial application** and **function composition**.
- Libraries like **Lodash** and **Ramda** provide utility functions for currying.

---

## **6. Objects**

### Theory:

- Objects are collections of key-value pairs.
- Keys are always strings or symbols.

### Code Snippet:

```javascript
const person = {
  name: 'John',
  age: 30,
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

console.log(person.name); // John
person.greet(); // Hello, John
```

### Additional Insights:

- Use `Object.keys()`, `Object.values()`, and `Object.entries()` to iterate over objects.
- Objects can inherit properties via prototypes.

---

## **7. `this` in JS (Implicit Binding)**

### Theory:

- `this` refers to the object that the function is a method of.
- In arrow functions, `this` is lexically scoped.

### Code Snippet:

```javascript
const obj = {
  name: 'Alice',
  greet: function () {
    console.log(`Hello, ${this.name}`);
  }
};

obj.greet(); // Hello, Alice
```

### Additional Insights:

- `this` can be confusing in callbacks and event handlers. Use arrow functions to avoid issues.

---

## **8. call, bind, and apply (Explicit Binding)**

### Theory:

- **call**: Invokes a function with a specific `this` value and arguments.
- **apply**: Similar to `call`, but arguments are passed as an array.
- **bind**: Returns a new function with a bound `this` value.

### Code Snippet:

```javascript
const person = { name: 'Bob' };

function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

greet.call(person, 'Hello'); // Hello, Bob
greet.apply(person, ['Hi']); // Hi, Bob
const boundGreet = greet.bind(person);
boundGreet('Hey'); // Hey, Bob
```

### Additional Insights:

- Use `bind` for partial application or to fix `this` in event handlers.

---

## **9. Promises (Async JS)**

### Theory:

- Promises represent asynchronous operations that can be resolved or rejected.
- Use `.then()` and `.catch()` to handle results and errors.

### Code Snippet:

```javascript
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data fetched'), 1000);
  });
};

fetchData()
  .then((data) => console.log(data)) // Data fetched
  .catch((err) => console.error(err));
```

### Additional Insights:

- Use `async/await` for cleaner asynchronous code.
- Promises are used in **fetch API**, **Axios**, and other async operations.

---

## **10. Debouncing and Throttling**

### Theory:

- **Debouncing**: Delays the execution of a function until a certain period of inactivity has passed. This is useful for scenarios like search inputs, where you want to wait for the user to stop typing before making an API call.
- **Throttling**: Limits the execution of a function to once every specified period. This is useful for scenarios like scroll or resize events, where you want to limit how often a function is called to improve performance.

### Code Snippet:

#### Debouncing Example:

```javascript
// Debouncing
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Example usage: Search input
const searchInput = document.getElementById('search-input');
const search = () => {
  console.log('Searching for:', searchInput.value);
};

const debouncedSearch = debounce(search, 300);
searchInput.addEventListener('input', debouncedSearch);
```

#### Throttling Example:

```javascript
// Throttling
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Example usage: Window resize
const onResize = () => {
  console.log('Window resized');
};

const throttledResize = throttle(onResize, 1000);
window.addEventListener('resize', throttledResize);
```

### Additional Insights:

- **Debouncing** is particularly useful for:

  - Search inputs: Wait for the user to stop typing before making an API call.
  - Auto-save functionality: Save the form data after the user has stopped typing for a certain period.

- **Throttling** is particularly useful for:
  - Scroll events: Limit how often a function is called while scrolling to improve performance.
  - Resize events: Limit how often a function is called while resizing the window.

### Real-World Example:

#### Debouncing in Search Input:

Imagine you have a search input field where you want to fetch search results as the user types. Without debouncing, an API call would be made on every keystroke, which can be inefficient and overwhelming for the server. With debouncing, the API call is only made after the user has stopped typing for a certain period (e.g., 300ms).

```javascript
const searchInput = document.getElementById('search-input');
const search = () => {
  console.log('Fetching results for:', searchInput.value);
  // Simulate API call
};

const debouncedSearch = debounce(search, 300);
searchInput.addEventListener('input', debouncedSearch);
```

#### Throttling in Scroll Events:

Imagine you have a scroll event listener that updates the UI based on the scroll position. Without throttling, the function would be called many times per second as the user scrolls, which can lead to performance issues. With throttling, the function is only called once every specified period (e.g., 100ms).

```javascript
const onScroll = () => {
  console.log('Updating UI based on scroll position');
  // Simulate UI update
};

const throttledScroll = throttle(onScroll, 100);
window.addEventListener('scroll', throttledScroll);
```

### Advanced Example: Combining Debouncing and Throttling

In some cases, you might want to combine debouncing and throttling. For example, you might want to throttle a function to ensure it is called at regular intervals, but also debounce it to ensure it is not called too frequently.

```javascript
function combinedDebounceThrottle(func, delay, limit) {
  let timeout;
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Example usage: Combined debounce and throttle
const onScroll = () => {
  console.log('Updating UI based on scroll position');
};

const combinedScroll = combinedDebounceThrottle(onScroll, 300, 100);
window.addEventListener('scroll', combinedScroll);
```

### Additional Insights:

- Use debouncing for search inputs and throttling for scroll/resize events.

---

## **11. Event Bubbling, Capturing, and Delegation**

### Theory:

- **Bubbling**: Events propagate from the target element up to the root.
- **Capturing**: Events propagate from the root down to the target.
- **Delegation**: Attach a single event listener to a parent to handle events for multiple children.

### Code Snippet:

```javascript
document.querySelector('#parent').addEventListener('click', (event) => {
  if (event.target.matches('button')) {
    console.log('Button clicked');
  }
});
```

### Additional Insights:

- Use `event.stopPropagation()` to stop bubbling/capturing.
- Event delegation improves performance for dynamic content.

---

## **12. Event Loop**

### Theory:

- JavaScript is single-threaded and uses an event loop to handle asynchronous operations.
- The event loop processes the call stack, callback queue, and microtask queue.

### Code Snippet:

```javascript
console.log('Start');

setTimeout(() => console.log('Timeout'), 0);

Promise.resolve().then(() => console.log('Promise'));

console.log('End');

// Output: Start, End, Promise, Timeout
```

### Additional Insights:

- Microtasks (Promises) have higher priority than macrotasks (setTimeout).

---

## **13. Class and Constructors**

### Theory:

- Classes are syntactic sugar over prototypes.
- Use `constructor` to initialize object properties.

### Code Snippet:

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

const person = new Person('John');
person.greet(); // Hello, John
```

### Additional Insights:

- Use `extends` for inheritance and `super` to call the parent constructor.

---

## **14. Compose and Pipe**

### Theory:

- **Compose**: Combines functions from right to left.
- **Pipe**: Combines functions from left to right.

### Code Snippet:

```javascript
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);

const add5 = (x) => x + 5;
const multiply2 = (x) => x * 2;

const composed = compose(multiply2, add5); // add5 then multiply2
const piped = pipe(add5, multiply2); // multiply2 then add5

console.log(composed(5)); // 20
console.log(piped(5)); // 15
```

### Additional Insights:

- Use compose/pipe for functional programming patterns.

---

## **15. Prototypes**

### Theory:

- Every object has a prototype from which it inherits properties and methods.
- Use `Object.create()` or `new` to create objects with prototypes.

### Code Snippet:

```javascript
const animal = {
  speak() {
    console.log(`${this.name} makes a sound`);
  }
};

const dog = Object.create(animal);
dog.name = 'Rex';
dog.speak(); // Rex makes a sound
```

### Additional Insights:

- Prototypes are the foundation of JavaScript’s inheritance model.
