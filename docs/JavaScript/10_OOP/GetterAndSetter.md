# Understanding Getters & Setters in JavaScript

This code demonstrates three different ways of using **getters and setters** in JavaScript:  
1️⃣ **Modern (ES6 Class) Approach**  
2️⃣ **Legacy (Constructor Function with `Object.defineProperty`) Approach**  
3️⃣ **Object Literal with Getters & Setters**

---

## **📜 Original Code**

```js
// Modern way
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}john`;
  }

  set password(value) {
    this._password = value;
  }
}

const john = new User('h@john.ai', 'abc');
console.log(john.email);

// Legacy way
function Person(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, 'email', {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    }
  });
  Object.defineProperty(this, 'password', {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    }
  });
}

const chai = new Person('chai@chai.com', 'chai');

console.log(chai.email);

// Getter and setter in object
const Human = {
  _email: 'h@hc.com',
  _password: 'abc',

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  }
};

const tea = Object.create(Human);
console.log(tea.email);
```

---

## **🔹 What’s Happening in the Code?**

### **1️⃣ ES6 Class with Getters & Setters (Modern Way)**

```js
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}john`;
  }

  set password(value) {
    this._password = value;
  }
}

const john = new User('h@john.ai', 'abc');
console.log(john.email);
```

**How it Works:**

- **Encapsulation:** `_email` and `_password` are private-like properties (convention).
- **Getter (`get email`)** → Returns email in uppercase.
- **Setter (`set email`)** → Stores the value in `_email`.
- **Getter (`get password`)** → Appends `"john"` to password.
- **Setter (`set password`)** → Stores the value in `_password`.

**Trivia:**

- Getters and setters are useful for **computed properties** and **data validation**.
- `_email` and `_password` are used instead of `email` and `password` to **avoid recursive calls**.

---

### **2️⃣ Constructor Function with `Object.defineProperty` (Legacy Way)**

```js
function Person(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, 'email', {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    }
  });

  Object.defineProperty(this, 'password', {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    }
  });
}

const chai = new Person('chai@chai.com', 'chai');
console.log(chai.email);
```

**How it Works:**

- Instead of `class`, **`Object.defineProperty()`** is used to define getters and setters.
- Similar to ES6 classes, it modifies `_email` and `_password`.
- **Getter (`get email`)** → Returns uppercase email.
- **Setter (`set email`)** → Assigns `_email`.
- **Getter (`get password`)** → Converts password to uppercase.

**Trivia:**

- This is how getters/setters were implemented before ES6.
- It allows more control over property descriptors like **writable, enumerable, configurable**.

---

### **3️⃣ Object Literals with Getters & Setters**

```js
const Human = {
  _email: 'h@hc.com',
  _password: 'abc',

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  }
};

const tea = Object.create(Human);
console.log(tea.email);
```

**How it Works:**

- `Human` is an **object literal** with **getters and setters**.
- `Object.create(Human)` creates a new object that **inherits from `Human`**.
- **Getter (`get email`)** → Returns uppercase email.
- **Setter (`set email`)** → Modifies `_email`.

**Trivia:**

- `Object.create()` is used to create objects with **prototype-based inheritance**.
- Unlike ES6 classes, **there’s no constructor function**.

---

## **📌 Key Takeaways**

✅ **Encapsulation:** `_email` and `_password` are used as private-like properties.  
✅ **Getter Methods:** Allow computed properties (e.g., `email.toUpperCase()`).  
✅ **Setter Methods:** Modify internal properties and prevent accidental changes.  
✅ **Multiple Approaches:**

- **ES6 Classes (Modern)**
- **Constructor Functions with `Object.defineProperty` (Legacy)**
- **Object Literals with Getters & Setters**
