# Array.prototype.filter

## Custom Implementation in JavaScript

```js
/**
 * @template T
 * @param { (value: T, index: number, array: Array<T>) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {Array<T>}
 */
Array.prototype.myFilter = function (callbackFn, thisArg) {
  const length = this.length; // 'this' refers to the array on which myFilter is called
  let results = [];

  for (let i = 0; i < length; i++) {
    // Only include the index if it's an actual element in the array
    if (i in this && callbackFn.call(thisArg, this[i], i, this)) {
      results.push(this[i]);
    }
  }

  return results;
};
```

---

## 🧠 Explanation:

### What does this implementation do?

- This mimics how the native `.filter()` method works in JavaScript.
- It returns a new array containing only the elements that pass the test implemented by the `callbackFn`.

### Breakdown of Key Concepts:

#### `this.length`

- Retrieves the total length of the array (`this`) on which `myFilter` is called.

#### `i in this`

- Checks if the index `i` exists in the array.
- This is important to skip **sparse array** entries (e.g., `Array(5)` has 5 holes and no values).

#### `callbackFn.call(thisArg, this[i], i, this)`

- Invokes the callback function with:

  - `this[i]`: current element
  - `i`: index
  - `this`: entire array

- Uses `Function.prototype.call` to optionally bind `thisArg` as `this` inside `callbackFn`.

#### Why not just `callbackFn(this[i], i, this)`?

- Because using `.call` with `thisArg` replicates how the native `.filter()` method allows binding a custom context.

---

## 🎯 Trivia:

1. **Sparse Arrays**
   JavaScript arrays can be "sparse", meaning they may have missing indices.

   ```js
   const arr = [1, , 3];
   console.log(arr.length); // 3
   console.log(1 in arr); // false
   ```

   Using `i in this` ensures we only process "real" values and skip holes.

2. **Function.prototype.call vs apply vs bind**

   - `call`: invokes a function immediately with arguments passed one-by-one.
   - `apply`: invokes with arguments as an array.
   - `bind`: returns a new function with `this` bound.

3. **Callback Arity**
   All Array methods like `.map()`, `.filter()`, `.forEach()` follow the same callback signature:

   ```ts
   (value, index, array) => {};
   ```

4. **Performance Note**

   - Native `.filter()` is optimized in JavaScript engines like V8 (Chrome, Node.js).
   - Your custom implementation is great for learning or polyfills but will be slower in production.

---

## ✅ Example Usage:

```js
const arr = [10, 20, 30, 40];

const filtered = arr.myFilter((num) => num > 25);

console.log(filtered); // [30, 40]
```

Here's the custom implementation of `.map()` along with a **clear explanation**, **real-world examples**, and **fun trivia**—all suitable for senior/lead JavaScript engineers:

---

# Array.prototype.map

## Custom Implementation in JavaScript

```js
/**
 * @template T, U
 * @param { (value: T, index: number, array: Array<T>) => U } callbackFn
 * @param {any} [thisArg]
 * @return {Array<U>}
 */
Array.prototype.myMap = function (callbackFn, thisArg) {
  const length = this.length; // 'this' refers to the calling array
  let results = new Array(length); // pre-allocate memory for performance

  for (let i = 0; i < length; i++) {
    if (i in this) {
      results[i] = callbackFn.call(thisArg, this[i], i, this);
    }
  }

  return results;
};
```

---

## 🧠 Explanation:

### What does `myMap` do?

- It creates a new array populated with the **results of calling a provided function** on every element in the calling array.
- It **does not mutate** the original array.
- Sparse elements (i.e., missing values in arrays like `[1, , 3]`) are **skipped** — just like in the native `.map()`.

### Key Concepts:

#### `new Array(length)`

- Creates a new array with the same length as the original for **preallocation**, which is slightly more performant than pushing values dynamically.

#### `callbackFn.call(thisArg, this[i], i, this)`

- Ensures correct `this` binding for the callback.
- Mirrors how native `.map()` works by passing value, index, and the array.

#### `if (i in this)`

- Skips sparse/missing elements.
- Example: `[1,,3].map(...)` will **not** call the callback for the missing index.

---

## 🎯 Trivia:

1. **Mapping vs Filtering**

   - `.map()` always returns the **same number of items** as the input (unless it's sparse).
   - `.filter()` returns a **subset** based on condition.

2. **Historical Note**

   - Array methods like `.map()` and `.filter()` became standardized in **ECMAScript 5 (2009)**.
   - Prior to that, developers had to polyfill these manually, just like this implementation.

3. **Functional Programming Influence**

   - Methods like `.map()` are inspired by **functional programming** paradigms, offering **immutable**, **declarative**, and **pure** transformation logic.

4. **Real-World Use**

   - `.map()` is heavily used in frameworks like **React**, where arrays of data are transformed into lists of components.
   - Example:

     ```jsx
     const list = items.map((item) => <ItemCard key={item.id} data={item} />);
     ```

---

## ✅ Example Usage:

```js
const numbers = [1, 2, 3, 4];

const doubled = numbers.myMap((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8]
```

---

# Array.prototype.reduce

## Custom Implementation in JavaScript

```js
/**
 * @template T, U
 * @param {(accumulator: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {U}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  const length = this.length;
  const isInitialValueNotPassed = initialValue === undefined;

  if (isInitialValueNotPassed && length === 0) {
    throw new TypeError(
      'Cannot perform reduce operation on an empty array with no initial value'
    );
  }

  let acc = isInitialValueNotPassed ? this[0] : initialValue;
  let startIndex = isInitialValueNotPassed ? 1 : 0;

  for (let i = startIndex; i < length; i++) {
    if (i in this) {
      acc = callbackFn(acc, this[i], i, this);
    }
  }

  return acc;
};
```

---

## 🧠 Explanation:

### What does `myReduce` do?

- `reduce` processes each element of the array to **accumulate a single return value**.
- It does this by invoking a **callback function** on each item and passing the result forward (accumulator pattern).

### `initialValue` logic:

- If `initialValue` is **not passed**, the first element of the array becomes the initial accumulator.
- If `initialValue` **is passed**, the reduction starts from index 0 using it.
- If the array is empty **and** no `initialValue` is passed → throws a `TypeError`.

### `accumulator` flow:

- At each iteration, `acc = callbackFn(acc, currentValue, index, array)`.
- This result is then passed to the next call as `acc`.

---

## 🔎 Why no `.call()` for `callbackFn`?

- Unlike `.map()` or `.forEach()`, native `.reduce()` does **not support `thisArg`** binding.
- So, there's **no need to use `callbackFn.call(...)`**, as it doesn't bind `this`.

---

## 🎯 Trivia:

- `.reduce()` was introduced in **ECMAScript 5 (2009)**.
- Many utility libraries like Lodash provide enhanced versions with additional features.
- It’s often the **most powerful** array method, but also **least readable** if overused.

---

## ✅ Example Usage:

```js
const numbers = [1, 2, 3, 4];

const sum = numbers.myReduce((acc, val) => acc + val, 0);

console.log(sum); // 10
```

---

## 🧠 Real-World Usage

- Tallying totals: prices, votes, ratings.
- Flattening arrays or objects.
- Rewriting logic like `map`, `filter`, and `find` manually.
- React: building states or reducing component trees.
