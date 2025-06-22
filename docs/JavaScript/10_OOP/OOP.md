# Object-Oriented Programming (OOP) in JavaScript

## Overview

Object-Oriented Programming (OOP) is a programming paradigm that organizes software design around objects and data rather than functions and logic. JavaScript, being a multi-paradigm language, supports OOP through prototypes and, more recently, classes.

---

## Key Questions and Concepts

### 1. **Does JavaScript Support Classes?**

Yes, JavaScript supports classes starting from **ES6 (ECMAScript 2015)**. However, under the hood, JavaScript classes are syntactic sugar over its existing prototype-based inheritance.

#### Example:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person('Alice', 25);
person1.greet(); // "Hello, my name is Alice"
```

---

### 2. **What Are Objects in JavaScript?**

Objects in JavaScript are collections of key-value pairs. They can contain properties (data) and methods (functions). Built-in objects like `toLowerCase`, `Promise`, `Array`, etc., are examples of objects in JavaScript.

#### Example:

```javascript
const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020,
  drive: function () {
    console.log('Driving...');
  }
};

console.log(car.brand); // "Toyota"
car.drive(); // "Driving..."
```

---

### 3. **Why Should We Use OOP?**

- **Modularity**: Code is organized into reusable components (objects/classes).
- **Encapsulation**: Data and behavior are bundled together, protecting data from external interference.
- **Reusability**: Inheritance allows code reuse.
- **Maintainability**: Easier to debug and maintain structured code.

---

## Parts of OOP in JavaScript

### 1. **Object Literal**

The simplest way to create an object in JavaScript.

#### Example:

```javascript
const user = {
  name: 'John',
  age: 30,
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

user.greet(); // "Hello, John"
```

---

### 2. **Constructor Function**

A function used to create objects. It is invoked using the `new` keyword.

#### Example:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
}

const person1 = new Person('Alice', 25);
person1.greet(); // "Hello, my name is Alice"
```

---

### 3. **Prototypes**

Every JavaScript object has a prototype. Prototypes allow objects to inherit properties and methods from other objects.

#### Example:

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person('Bob');
person1.greet(); // "Hello, my name is Bob"
```

---

### 4. **Classes**

Introduced in ES6, classes provide a cleaner way to create objects and handle inheritance.

#### Example:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex');
dog.speak(); // "Rex barks."
```

---

### 5. **Instances (new, this)**

Instances are objects created using the `new` keyword. The `this` keyword refers to the current instance.

#### Example:

```javascript
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

const car1 = new Car('Toyota', 'Corolla');
console.log(car1.brand); // "Toyota"
```

---

## The 4 Pillars of OOP

### 1. **Abstraction**

Hiding complex implementation details and exposing only the necessary features.

#### Example:

```javascript
class ATM {
  constructor(balance) {
    this.balance = balance;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Insufficient funds');
    } else {
      this.balance -= amount;
      console.log(`Withdrawn: ${amount}`);
    }
  }
}

const atm = new ATM(1000);
atm.withdraw(500); // "Withdrawn: 500"
```

---

### 2. **Encapsulation**

Bundling data and methods that operate on the data, and restricting access to some of the object's components.

#### Example:

```javascript
class BankAccount {
  constructor(balance) {
    let _balance = balance; // Private variable

    this.getBalance = function () {
      return _balance;
    };

    this.deposit = function (amount) {
      _balance += amount;
    };
  }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
```

---

### 3. **Inheritance**

Allowing a class to inherit properties and methods from another class.

#### Example:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex');
dog.speak(); // "Rex barks."
```

---

### 4. **Polymorphism**

The ability of objects to take on multiple forms. In JavaScript, this is achieved through method overriding.

#### Example:

```javascript
class Bird {
  fly() {
    console.log('Flying...');
  }
}

class Penguin extends Bird {
  fly() {
    console.log('Penguins cannot fly.');
  }
}

const bird = new Bird();
bird.fly(); // "Flying..."

const penguin = new Penguin();
penguin.fly(); // "Penguins cannot fly."
```

---

## Additional Interesting Points

1. **Prototypal Inheritance**:

   - JavaScript uses prototypal inheritance, where objects can inherit properties and methods from other objects.
   - Unlike classical inheritance, there are no classes in prototypal inheritance (prior to ES6).

2. **Mixins**:

   - Mixins are a way to add properties and methods to objects without using inheritance.
   - Example:

     ```javascript
     const canEat = {
       eat() {
         console.log('Eating...');
       }
     };

     const canSleep = {
       sleep() {
         console.log('Sleeping...');
       }
     };

     const animal = Object.assign({}, canEat, canSleep);
     animal.eat(); // "Eating..."
     animal.sleep(); // "Sleeping..."
     ```

3. **Static Methods**:

   - Static methods belong to the class itself rather than instances of the class.
   - Example:

     ```javascript
     class MathUtils {
       static square(x) {
         return x * x;
       }
     }

     console.log(MathUtils.square(5)); // 25
     ```

4. **Private Fields (ES2022)**:

   - JavaScript now supports private fields in classes using the `#` symbol.
   - Example:

     ```javascript
     class Person {
       #name;
       constructor(name) {
         this.#name = name;
       }

       getName() {
         return this.#name;
       }
     }

     const person = new Person('Alice');
     console.log(person.getName()); // "Alice"
     console.log(person.#name); // Error: Private field
     ```

---

## Summary

- **OOP in JavaScript**: Supported through prototypes and classes.
- **Objects**: Collections of key-value pairs with properties and methods.
- **4 Pillars of OOP**: Abstraction, Encapsulation, Inheritance, and Polymorphism.
- **Practical Use**: OOP helps in writing modular, reusable, and maintainable code.
