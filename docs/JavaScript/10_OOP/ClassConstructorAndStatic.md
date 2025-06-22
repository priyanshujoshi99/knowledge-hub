# Classes and Constructor

## **1. ES6 `class` Implementation**

### **How It Works**

- **Class Declaration (`User`)**:
  - The `constructor` initializes `username`, `email`, and `password`.
  - `encryptPassword()` appends `"abc"` to the password.
  - `changeUsername()` converts `username` to uppercase.

```js
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User('chai', 'chai@gmail.com', '123');

console.log(chai.encryptPassword()); // Output: "123abc"
console.log(chai.changeUsername()); // Output: "CHAI"
```

## **2. Behind the Scenes: Prototype-Based Approach**

### **How It Works**

- **Constructor Function (`User`)**:
  - Similar to the class, it initializes properties inside the function.
- **Prototype Methods (`encryptPassword`, `changeUsername`)**:
  - These methods are attached to `User.prototype`, so they are shared across instances instead of being recreated for each object.

```js
function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User('tea', 'tea@gmail.com', '123');

console.log(tea.encryptPassword()); // Output: "123abc"
console.log(tea.changeUsername()); // Output: "TEA"
```

---

## **📌 Key Differences: Class vs. Prototype**

| Feature            | ES6 Class                  | Prototype-Based Approach                |
| ------------------ | -------------------------- | --------------------------------------- |
| **Syntax**         | Uses `class` keyword       | Uses constructor function + `prototype` |
| **Method Storage** | Methods are on `prototype` | Explicitly defined on `User.prototype`  |
| **Instantiation**  | `new User(...)`            | `new User(...)` (same)                  |
| **Readability**    | Cleaner, more structured   | More verbose, traditional               |

---

## **📌 Trivia and Additional Notes**

1. **Classes are syntactic sugar**

   - The ES6 class is just a cleaner way to define objects; behind the scenes, JavaScript still uses prototypes.
   - The `class` syntax improves readability without changing the behavior.

2. **Prototype Methods Save Memory**

   - Instead of creating methods inside the constructor (which would duplicate them for each instance), prototype methods allow all instances to share the same function reference.

3. **Difference in `this` Binding**
   - In `class`, methods are automatically bound to the instance when used with `new`.
   - In prototype-based functions, methods need explicit `this` references.

---

# `static` in JavaScript

## **1. Understanding the `User` Class**

```js
class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}
```

### **How It Works**

- **`constructor(username)`**: Initializes the `username` property.
- **`logMe()`**: A regular instance method that logs the `username`.
- **`static createId()`**: A **static method** that belongs to the class itself, not instances.

---

## **2. Instantiating `User`**

```js
const john = new User('john');
// console.log(john.createId()) ❌ ERROR
```

- **Why does `console.log(john.createId())` throw an error?**
  - `createId()` is a **static method**, meaning it's called on the **class itself** (`User.createId()`), not on an instance (`john.createId()`).
  - **Correct usage:** `console.log(User.createId()); // "123"`

---

## **3. Understanding the `Teacher` Subclass**

```js
class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}
```

### **How It Works**

- **`extends User`**: `Teacher` inherits all non-static properties and methods of `User`.
- **`super(username)`**: Calls the `User` constructor, ensuring `this.username` is set properly before adding `email`.
- **Inheritance Chain:**
  - `Teacher` does **not** inherit `User`'s static methods (like `createId()`).

---

## **4. Creating a `Teacher` Instance**

```js
const iphone = new Teacher('iphone', 'i@phone.com');
console.log(iphone.createId()); ❌ ERROR
```

- **Why does `console.log(iphone.createId());` throw an error?**
  - `createId()` is a **static method** of `User`, but static methods **do not get inherited** by child classes.
  - **Correct usage:** `console.log(User.createId()); // "123"`
  - **Fix:** If you want `createId()` to be available in `Teacher`, redefine it:
    ```js
    class Teacher extends User {
      static createId() {
        return super.createId(); // Calls the static method from User
      }
    }
    console.log(Teacher.createId()); // "123"
    ```

---

## **📌 Summary of Key Concepts**

| Feature                                            | Explanation                                                      |
| -------------------------------------------------- | ---------------------------------------------------------------- |
| **Static Method (`static createId()`)**            | Belongs to the class itself, not instances.                      |
| **Calling Static Methods**                         | Use `ClassName.method()`, e.g., `User.createId()`.               |
| **Instance Methods (`logMe()`)**                   | Belong to instances, called as `object.method()`.                |
| **Inheritance (`extends User`)**                   | `Teacher` gets all non-static methods from `User`.               |
| **Calling Parent Constructor (`super(username)`)** | Ensures `username` is set before adding `email`.                 |
| **Static Methods Are Not Inherited**               | `Teacher.createId()` does not exist unless explicitly redefined. |

---

## **📌 Trivia**

- **Why are static methods useful?**
  - Used for utility functions, like generating IDs, formatting data, etc., without needing an instance.
- **Can `super` be used in static methods?**
  - Yes, `super.createId()` works inside a static method of `Teacher` because `super` refers to the parent class.
