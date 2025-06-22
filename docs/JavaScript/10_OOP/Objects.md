# Objects in JavaScript

## **📜 Original Code**

```js
const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
  name: 'ginger chai',
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log('chai nhi bni');
  }
};

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai, 'name', {
  //writable: false,
  enumerable: true
});

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== 'function') {
    console.log(`${key} : ${value}`);
  }
}
```

---

## **🔹 What’s Happening in the Code?**

### **1️⃣ `Object.getOwnPropertyDescriptor()` - Getting Property Attributes**

```js
const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor);
```

**Why does this work?**

- `Math.PI` is a built-in property of JavaScript.
- `Object.getOwnPropertyDescriptor()` retrieves metadata about the property.
- The output will be:
  ```js
  {
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
  }
  ```
  **Trivia:**
- Since `writable: false`, you cannot change `Math.PI`.
- Since `enumerable: false`, it won’t appear in `for...in` loops.
- Since `configurable: false`, you cannot delete or redefine it.

---

### **2️⃣ Trying to Modify `Math.PI`**

```js
console.log(Math.PI);
Math.PI = 5;
console.log(Math.PI);
```

- Since `writable: false`, **reassigning `Math.PI` will have no effect**.
- `console.log(Math.PI);` still prints **3.141592653589793**.

---

### **3️⃣ Understanding Property Descriptors in Custom Objects**

```js
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
```

**Output:**

```js
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
```

- Default object properties in JavaScript are:
  - `writable: true` → Can be changed
  - `enumerable: true` → Appears in loops
  - `configurable: true` → Can be deleted or modified

---

### **4️⃣ Modifying Property Descriptors with `Object.defineProperty`**

```js
Object.defineProperty(chai, 'name', {
  // writable: false,  // Uncommenting this will prevent changes
  enumerable: true
});
```

- We updated `name`'s descriptor.
- If `writable: false` is added, `chai.name = 'masala chai'` won’t work.
- `enumerable: true` ensures it still appears in loops.

---

### **5️⃣ Looping Over Object Properties**

```js
for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== 'function') {
    console.log(`${key} : ${value}`);
  }
}
```

- `Object.entries(chai)` returns an array of `[key, value]` pairs.
- `if (typeof value !== 'function')` ensures `orderChai()` is skipped.
- Since `name` is **still enumerable**, the output includes:
  ```js
  name : ginger chai
  price : 250
  isAvailable : true
  ```

---

## **📌 Key Takeaways**

✅ **`Object.getOwnPropertyDescriptor()`** helps inspect properties' attributes like `writable`, `enumerable`, and `configurable`.

✅ **`Object.defineProperty()`** allows modifying descriptors to control object behavior.

✅ **Trying to modify `Math.PI` fails** because `writable: false`.

✅ **Looping through object properties excludes functions**, demonstrating a way to filter values.
