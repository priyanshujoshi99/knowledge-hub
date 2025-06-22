# JavaScript Execution Context

JavaScript isn't a language that just executes code line by line. The way JavaScript organizes and processes code involves some clever mechanisms like **Execution Context** and **Call Stack**, and understanding them is key to mastering JavaScript. Let’s dive deep into these concepts and break them down in a way that’s both insightful and easy to grasp!

## 📜 **Global Execution Context**

The **Global Execution Context (GEC)** is created when the JavaScript script begins to run. It serves as the foundation or "home base" for everything in your program. It's the first context that gets pushed onto the **Call Stack**, and it represents the global scope in JavaScript.

- **What’s inside the Global Context?**
  - Variables and functions are defined globally, meaning they can be accessed throughout the entire program.
  - The `this` keyword refers to the **global object** (e.g., `window` in browsers or `global` in Node.js).

Think of the **Global Execution Context** as the starting point — the context from which all the other parts of your code execute.

## 🏠 **Function Execution Context**

Every time a function is called, a new **Function Execution Context (FEC)** is created. This context defines the local scope of the function where variables and parameters are declared.

- **What’s inside a Function Execution Context?**
  - It contains **function arguments**, **local variables**, and the function’s **`this`** context (which depends on how the function is called).

This context is ephemeral — it gets created when the function is invoked, and once the function finishes execution, the context is popped off the stack.

## 🧠 **Memory Creation Phase**

Before code begins executing, the **Memory Creation Phase** sets up the environment. This is where JavaScript "prepares" the code to be run.

- **What happens in the Memory Phase?**
  1. **Variable Object (VO)**: This is a map of all the variables and functions in the current scope. It includes function parameters, function declarations, and variable declarations.
  2. **Scope Chain**: A list of all variable objects accessible in the current scope. It helps JavaScript resolve variable references.
  3. **The `this` keyword**: The **`this`** keyword is set based on the scope in which the function is called. In the global context, `this` refers to the global object.

## 🚀 **Execution Phase**

After the setup, the **Execution Phase** is where JavaScript actually starts executing the code. During this phase, the JavaScript engine:

1. **Assigns values to variables**.
   - `var`-declared variables are **hoisted** with `undefined` as their initial value.
   - `let` and `const` variables are also **hoisted**, but they remain uninitialized until the point they are declared.
2. **Manages the Call Stack**: Each function call creates a new **execution context** that is added to the top of the stack. Once a function returns, its execution context is popped off the stack.

---

## How JavaScript Code Is Executed: A Step-by-Step Breakdown

Let’s explore how JavaScript processes code using the following example:

```javascript
let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
```

### **Step 1: Global Execution Context**

At the beginning, the **Global Execution Context** is created, where all global variables and functions are initialized.

- **What happens?**
  - Variables `val1`, `val2`, and `addNum` are hoisted but not initialized yet.

### **Step 2: Memory Creation Phase**

At this stage, the JavaScript engine sets up the **Variable Object (VO)** for the global context:

```
val1 -> undefined
val2 -> undefined
addNum -> function definition
result1 -> undefined
result2 -> undefined
```

### **Step 3: Execution Phase**

1. **Assign values** to global variables:  
   `val1` is assigned 10, and `val2` is assigned 5.
2. **Function Call**: `addNum(val1, val2)` creates a new **execution context** for `addNum`:

- **Memory Phase for `addNum`:**

  ```
  num1 -> undefined
  num2 -> undefined
  total -> undefined
  ```

- **Execution Phase for `addNum`:**
  ```
  num1 <- 10
  num2 <- 5
  total <- 15
  ```

3. **Return value**: The function returns `15`, which is assigned to `result1`.

### **Step 4: Another Function Call**

When `addNum(10, 2)` is called, **a new execution context** for `addNum` is created.

- **Memory Phase for second call**:

  ```
  num1 -> undefined
  num2 -> undefined
  total -> undefined
  ```

- **Execution Phase**:
  ```
  num1 <- 10
  num2 <- 2
  total <- 12
  ```

---

## 🏗️ **JavaScript Call Stack**

The **Call Stack** is a crucial part of JavaScript’s execution model. It’s a stack data structure that keeps track of function calls. When a function is called, its execution context is pushed onto the stack, and when it finishes, it is popped off.

Let’s visualize the call stack with an example:

```javascript
function one() {
  console.log('one');
  two();
}

function two() {
  console.log('two');
  three();
}

function three() {
  console.log('three');
}

one();
```

### **Call Stack Steps**

1. **Call Stack is empty** initially.

2. **`one()` is called**: The execution context for `one` is pushed onto the stack.

   ```
   | one  |
   |______|
   ```

3. **`two()` is called from `one`**: The execution context for `two` is added to the stack.

   ```
   | two  |
   |______|
   | one  |
   |______|
   ```

4. **`three()` is called from `two`**: The execution context for `three` is pushed onto the stack.

   ```
   | three|
   |______|
   | two  |
   |______|
   | one  |
   |______|
   ```

5. Once `three()` finishes, it’s popped off the stack:

   ```
   | two  |
   |______|
   | one  |
   |______|
   ```

6. After `two()` finishes, it’s popped off the stack:

   ```
   | one  |
   |______|
   ```

7. Finally, once `one()` finishes, the stack is empty again:
   ```
   |      |
   |______|
   ```

---

## 🔑 **Key Takeaways**

- **Execution Context**: This is where JavaScript variables and functions live and execute. It encompasses both the **Global Execution Context** (the "home base") and **Function Execution Contexts** (where functions execute locally).
- **Call Stack**: It’s the "manager" of function calls, following a Last In First Out (LIFO) principle. Each function call gets its execution context, and once done, it’s removed from the stack.

- **Memory and Execution Phases**: Before code executes, the environment is set up in the **Memory Phase**, followed by the **Execution Phase**, where actual code execution happens line by line.

---
