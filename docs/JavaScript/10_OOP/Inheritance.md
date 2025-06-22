# Inheritance in JavaScript

## **📌 Notes on the Code**

### **1. Understanding the `User` Class**

```js
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}
```

#### **How It Works**

- **`constructor(username)`**: Initializes the `username` property.
- **`logMe()`**: Logs the `username` to the console.

---

### **2. Understanding the `Teacher` Subclass**

```js
class Teacher extends User {
  constructor(username, email, password) {
    super(username); // Calls the User class constructor
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}
```

#### **How It Works**

- **`extends User`**: `Teacher` inherits from `User`, meaning it has access to `User`'s methods.
- **`super(username)`**: Calls `User`'s constructor to ensure `username` is set before adding `email` and `password`.
- **New Method (`addCourse()`)**: A method specific to `Teacher`, not available in `User`.

---

### **3. Creating Instances**

```js
const chai = new Teacher('chai', 'chai@teacher.com', '123');

chai.logMe(); // ✅ Inherited from User
```

- **Object `chai` belongs to `Teacher` but can use `logMe()` from `User`**.

```js
const masalaChai = new User('masalaChai');

masalaChai.logMe(); // ✅ "USERNAME is masalaChai"
```

- **Object `masalaChai` is an instance of `User`, so it can only use `logMe()`**.

---

### **4. Using `instanceof`**

```js
console.log(chai instanceof User); // ✅ true
```

- **Why is `chai instanceof User` true?**
  - `chai` is an instance of `Teacher`, which **inherits** from `User`.
  - JavaScript checks the **prototype chain**, and since `Teacher` extends `User`, `chai` is also considered an instance of `User`.

---

## **📌 Summary of Key Concepts**

| Feature                                            | Explanation                                             |
| -------------------------------------------------- | ------------------------------------------------------- |
| **Inheritance (`extends User`)**                   | `Teacher` gets all `User` methods.                      |
| **Calling Parent Constructor (`super(username)`)** | Ensures `username` is set before adding new properties. |
| **Method Overriding**                              | `Teacher` can override `logMe()` if needed.             |
| **Prototype Chain**                                | `chai` is an instance of both `Teacher` and `User`.     |
| **Instanceof Check (`instanceof`)**                | Checks if an object is derived from a class.            |

---

## **📌 Trivia**

- **What happens if `super(username)` is not called in `Teacher`?**

  - JavaScript will throw an error:
    ```
    Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    ```
  - This happens because `Teacher` is a subclass, and it **must initialize the parent class before using `this`**.

- **Can `instanceof` check multiple levels of inheritance?**
  - Yes!
    ```js
    console.log(chai instanceof Teacher); // ✅ true
    console.log(chai instanceof User); // ✅ true (because Teacher extends User)
    ```

---

## **📌 How Inheritance Works in the Background**

### **1. The Prototype Chain & Inheritance**

In JavaScript, **inheritance is implemented using prototypes**. When an object accesses a property or method:

1. JavaScript first looks for the property/method in the object itself.
2. If not found, it searches in the object's **prototype (`__proto__`)**, which refers to the class it was created from.
3. If still not found, it continues up the **prototype chain** until it reaches `Object.prototype`, the base prototype of all objects.

---

### **2. Step-by-Step Execution of the Code**

#### **(1) Creating a `Teacher` Instance**

```js
const chai = new Teacher('chai', 'chai@teacher.com', '123');
```

- JavaScript follows these steps in the background:
  1. Calls the `Teacher` constructor.
  2. `super(username)` is executed, invoking the `User` constructor.
  3. `User` constructor assigns `this.username = username`.
  4. Control returns to `Teacher`, where `this.email` and `this.password` are assigned.

#### **(2) The Prototype Chain**

When we create `chai` as a `Teacher` object, it gets the following prototype chain:

```
chai ---> Teacher.prototype ---> User.prototype ---> Object.prototype ---> null
```

- **`chai` (instance of `Teacher`)** has:
  - `username`, `email`, and `password` properties.
  - Access to `addCourse()` from `Teacher.prototype`.
  - Access to `logMe()` from `User.prototype` (inherited).

---

### **3. How Methods Are Accessed in the Prototype Chain**

#### **(1) Calling `chai.logMe();`**

```js
chai.logMe();
```

- JavaScript first looks for `logMe()` in **`chai` itself**. ❌ Not found.
- Then, it checks **`Teacher.prototype`**. ❌ Not found.
- Then, it checks **`User.prototype`**. ✅ Found → Executes `logMe()`.

#### **(2) Calling `chai.addCourse();`**

```js
chai.addCourse();
```

- JavaScript first looks for `addCourse()` in **`chai` itself**. ❌ Not found.
- Then, it checks **`Teacher.prototype`**. ✅ Found → Executes `addCourse()`.

---

### **4. How `instanceof` Works Internally**

```js
console.log(chai instanceof Teacher); // ✅ true
console.log(chai instanceof User); // ✅ true
console.log(chai instanceof Object); // ✅ true
```

- `instanceof` works by checking the **prototype chain**:
  1. `chai.__proto__ === Teacher.prototype` ✅ `true`
  2. `Teacher.prototype.__proto__ === User.prototype` ✅ `true`
  3. `User.prototype.__proto__ === Object.prototype` ✅ `true`
  4. `Object.prototype.__proto__ === null` ✅ Ends here.

Since `User` is in the chain, `chai instanceof User` returns `true`.

---

## **📌 Summary of How Inheritance Works in Background**

| Step                         | What Happens?                                                                                         |
| ---------------------------- | ----------------------------------------------------------------------------------------------------- |
| **1. Class Definition**      | `Teacher extends User`, meaning `Teacher.prototype` is linked to `User.prototype`.                    |
| **2. Instance Creation**     | `const chai = new Teacher('chai', 'chai@teacher.com', '123');`                                        |
| **3. Calling `logMe()`**     | JavaScript searches in `chai → Teacher.prototype → User.prototype`, finds `logMe()`, and executes it. |
| **4. Calling `addCourse()`** | JavaScript finds `addCourse()` in `Teacher.prototype` and executes it.                                |
| **5. `instanceof` Checks**   | Checks the prototype chain to determine if `chai` is an instance of `Teacher`, `User`, or `Object`.   |

---

## **📌 Trivia**

- **Can `Teacher` override `logMe()`?**

  - Yes! If `Teacher.prototype` defines `logMe()`, it will be called **instead of** the one from `User.prototype`.

- **What happens if `super(username)` is not called?**
  - JavaScript will throw an error because `this` cannot be used before calling `super()` in a derived class.
