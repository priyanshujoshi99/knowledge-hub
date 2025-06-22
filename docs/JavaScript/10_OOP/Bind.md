# `bind` in JavaScript

## Show me the code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React</title>
  </head>
  <body>
    <button>Button Clicked</button>
  </body>
  <script>
    class React {
      constructor() {
        this.library = 'React';
        this.server = 'https://localhost:300';

        //requirement
        document
          .querySelector('button')
          .addEventListener('click', this.handleClick.bind(this));
      }
      handleClick() {
        console.log('button clicked');
        console.log(this.server);
      }
    }

    const app = new React();
  </script>
</html>
```

## **1️⃣ How the Code Works**

### **Step-by-Step Execution**

1. **HTML Structure Loads**

   - A simple webpage with a `<button>` element.

2. **JavaScript Execution Begins**

   - A class named `React` is defined.

3. **Inside the Constructor (`new React()`)**

   - `this.library` and `this.server` are initialized.
   - `document.querySelector('button')` selects the button.
   - `.addEventListener('click', this.handleClick.bind(this))` attaches an event listener to the button.

4. **Click Event Handling (`handleClick` Method)**
   - When the button is clicked, `handleClick()` is called.
   - `console.log('button clicked')` logs the message.
   - `console.log(this.server)` prints `"https://localhost:300"`.

---

## **2️⃣ Key JavaScript Concepts Used**

### **(1) `this` Context & `bind(this)`**

- **Problem Without `bind(this)`**
  ```js
  document.querySelector('button').addEventListener('click', this.handleClick);
  ```
  - In this case, `handleClick()` would be executed in the **global context** (`this` would be `undefined` in strict mode or `window` in non-strict mode).
- **Solution: `.bind(this)`**
  ```js
  document
    .querySelector('button')
    .addEventListener('click', this.handleClick.bind(this));
  ```
  - `bind(this)` ensures that `this` inside `handleClick()` still refers to the instance of the `React` class.

### **(2) Event Listener Execution Flow**

- When the button is clicked:
  - JavaScript **searches for the event handler** assigned via `addEventListener`.
  - It executes `handleClick()`, ensuring `this` refers to the class instance due to `bind(this)`.

---

## **3️⃣ Trivia & Behind-the-Scenes Concepts**

### **🤔 Trivia:**

- **Why Not Use an Arrow Function?**

  ```js
  document
    .querySelector('button')
    .addEventListener('click', () => this.handleClick());
  ```

  - This also works, because **arrow functions do not have their own `this`** and inherit it from the surrounding scope (the `React` class instance).

- **Why is `new React()` Needed?**
  - The constructor runs when `new React()` is called.
  - Without `new`, the class wouldn't be instantiated, and `this.server` wouldn't exist.

### **🔍 How `bind(this)` Works Internally**

- `bind(this)` **returns a new function** where `this` is permanently set to the class instance.
- Internally, `bind` creates a closure to remember the original `this`.

---

## **4️⃣ Summary of Key Takeaways**

| Concept                         | Explanation                                                                      |
| ------------------------------- | -------------------------------------------------------------------------------- |
| **Class Constructor**           | Initializes `library` and `server`. Also binds event listener.                   |
| **`this` & Event Handling**     | `bind(this)` ensures `this` inside `handleClick()` refers to the class instance. |
| **Arrow Functions Alternative** | Using an arrow function also works since it preserves `this`.                    |
| **Click Event Execution**       | When the button is clicked, `handleClick()` logs the message and `server` value. |

---

### **📌 Visualizing `this` Behavior in Event Handling**

### **🔹 How `this` Works in Different Cases**

Here’s a breakdown of how `this` behaves in different scenarios:

| Scenario                                                                   | `this` Value                                                   | Why?                                                                                                        |
| -------------------------------------------------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **Direct Method Call (`obj.method()`)**                                    | `this = obj`                                                   | The method is called on the object, so `this` refers to that object.                                        |
| **Regular Function (`function fn() {}`)**                                  | `this = undefined` (strict mode) or `window` (non-strict mode) | In strict mode, `this` is `undefined`; otherwise, it defaults to the `window` object.                       |
| **Arrow Function (`() => {}`)**                                            | Inherits `this` from enclosing scope                           | Arrow functions do not have their own `this`, so they inherit it from where they are defined.               |
| **Event Listener (`element.addEventListener('click', function() {...})`)** | `this = element`                                               | In regular functions, event listeners set `this` to the element that triggered the event.                   |
| **Event Listener with Arrow Function**                                     | `this = outer scope`                                           | Since arrow functions do not have their own `this`, they inherit it from the class or surrounding function. |
| **Event Listener with `.bind(this)`**                                      | `this = bound object`                                          | `bind(this)` permanently sets `this` to the specified object (in this case, the class instance).            |

---

### **🔹 Visualizing the Code Execution**

Let's go step by step and visualize how JavaScript handles `this` in your code.

#### **(1) Class Constructor Execution**

```js
const app = new React();
```

- A new instance of `React` is created.
- `this.library = 'React'` and `this.server = 'https://localhost:300'` are assigned to the instance.
- The constructor adds an event listener to the button.

#### **(2) Event Listener Setup**

```js
document
  .querySelector('button')
  .addEventListener('click', this.handleClick.bind(this));
```

- `bind(this)` ensures `this` in `handleClick()` refers to `React` instance.

#### **(3) What Happens When the Button is Clicked?**

- The button triggers the event.
- `handleClick()` is called.
- Since `this.handleClick.bind(this)` was used, `this` remains bound to the class instance.

---

### **🔹 Alternative Approaches**

#### **✅ Using Arrow Functions**

Instead of `.bind(this)`, an arrow function can be used:

```js
document
  .querySelector('button')
  .addEventListener('click', () => this.handleClick());
```

- Arrow functions do not have their own `this`, so they inherit `this` from the surrounding class.

#### **✅ Using an Inline Function**

```js
document.querySelector('button').addEventListener('click', function () {
  console.log('button clicked');
  console.log(this.server); // ❌ Won't work, 'this' is now button element
});
```

- Here, `this` refers to the `<button>` element, NOT the `React` instance.

---

### **📌 Final Takeaways**

1️⃣ **Event listeners normally set `this` to the element that triggered the event.**  
2️⃣ **Using `.bind(this)` ensures that `this` refers to the class instance.**  
3️⃣ **Arrow functions can be used instead, as they inherit `this` from the surrounding scope.**  
4️⃣ **Without `.bind(this)`, `this` inside `handleClick()` would refer to `undefined` (in strict mode) or the `window` object.**
