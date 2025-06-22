# Prototype in JavaScript

## What is Prototype?

In JavaScript, every function and object has a prototype. The prototype is an object that is associated with every function and object by default in JavaScript, and it allows for inheritance and shared properties across instances of objects.

## JavaScript's Prototypal Behavior

JavaScript uses prototypal inheritance, meaning objects can inherit properties and methods from other objects. Instead of using classes as in classical inheritance, JavaScript allows objects to be linked to a prototype object.

## Why `this` Doesn't Work in Arrow Functions

Arrow functions do not have their own `this`. Instead, they inherit `this` from their lexical scope. This means that when you use `this` inside an arrow function, it does not refer to the object it is called on but rather to the scope where the function was defined.

```javascript
const obj = {
  name: 'Priyanshu',
  greet: () => {
    console.log(this.name); // undefined
  }
};

obj.greet();
```

In the above example, `this.name` is `undefined` because arrow functions do not have their own `this`, and it does not refer to `obj`.

## Everything in JavaScript is an Object

In JavaScript, almost everything is an object or can be treated as an object. Primitive values (except `null` and `undefined`) are wrapped in their respective object types (e.g., `Number`, `String`).

## Is Function in JavaScript an Object?

Yes, functions in JavaScript are also objects. They can have properties and methods, including the `prototype` property, which enables inheritance.

```javascript
function greet() {}
console.log(typeof greet); // 'function'
console.log(greet instanceof Object); // true
```

## What is `this`?

`this` refers to the context in which a function is called. The value of `this` depends on how the function is executed.

- In a regular function, `this` refers to the global object (`window` in browsers, `global` in Node.js) unless used inside an object.
- In a method of an object, `this` refers to the object itself.
- With the `new` keyword, `this` refers to the newly created object.

Example:

```javascript
function Person(name) {
  this.name = name;
}

const user = new Person('John');
console.log(user.name); // 'John'
```

## Sample Code with Theoretical Knowledge

### Example 1: Function Prototype

```javascript
function createProduct(name, price) {
  this.name = name;
  this.price = price;
}

createProduct.prototype.increment = function () {
  this.price++;
};
createProduct.prototype.printMe = function () {
  console.log(`price of ${this.name} is $${this.price}`);
};

const tea = new createProduct('tea', 25);
const coffee = new createProduct('coffee', 250);

coffee.printMe();
```

### Example 2: Extending Built-in Prototypes

```javascript
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

const userName = 'JohnDoe    ';
userName.trueLength();
```

### Interesting Case: Prototype Chain and Custom Properties

```javascript
let myHeroes = ['Shaktiman', 'Balveer'];

let heroPower = {
  canFly: true,
  canRun: true,

  getGreeting: function () {
    console.log(`The hero ${this.canFly ? 'can' : 'can not'} fly`);
  }
};

Object.prototype.newProp = function () {
  console.log('new Property');
};

Array.prototype.newArrayProp = function () {
  console.log('new Array Property');
};

myHeroes.newProp(); // Works because Array inherits from Object
heroPower.newProp(); // Works because heroPower is an object

myHeroes.newArrayProp(); // Works because it's an array
heroPower.newArrayProp(); // Fails because heroPower is not an array
```

## Inheritance using Prototype

```javascript
const User = {
  name: 'chai',
  email: 'chai@google.com'
};

const Teacher = {
  makeVideo: true
};

const TeachingSupport = {
  isAvailable: false
};

const TASupport = {
  makeAssignment: 'JS assignment',
  fullTime: true,
  __proto__: TeachingSupport
};

// Legacy syntax
Teacher.__proto__ = User;

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
```

## Sample Code with Theoretical Knowledge

### Example 1: Function Prototype

```javascript
function createProduct(name, price) {
  this.name = name;
  this.price = price;
}

createProduct.prototype.increment = function () {
  this.price++;
};
createProduct.prototype.printMe = function () {
  console.log(`price of ${this.name} is $${this.price}`);
};

const tea = new createProduct('tea', 25);
const coffee = new createProduct('coffee', 250);

coffee.printMe();
```

Here's what happens behind the scenes when the new keyword is used:

- **A new object is created:** The new keyword initiates the creation of a new JavaScript object.

- **A prototype is linked:** The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

- **The constructor is called:** The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, assumes this, the newly created object, to be the intended return value.

- **The new object is returned:** After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

Explanation:

- The function `createProduct` serves as a constructor function.
- The methods `increment` and `printMe` are added to the prototype, making them shared among all instances.
- `new` creates a new object with `createProduct.prototype` as its prototype.

### Example 2: Extending Built-in Prototypes

```javascript
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

const userName = 'JohnDoe    ';
userName.trueLength();
```

Explanation:

- `trueLength` is added to `String.prototype`, allowing all strings to use this method.
- The method trims the string and calculates the actual length, demonstrating prototype extension.

### Interesting Case: Prototype Chain and Custom Properties

```javascript
let myHeroes = ['Shaktiman', 'Balveer'];

let heroPower = {
  canFly: true,
  canRun: true,

  getGreeting: function () {
    console.log(`The hero ${this.canFly ? 'can' : 'can not'} fly`);
  }
};

Object.prototype.newProp = function () {
  console.log('new Property');
};

Array.prototype.newArrayProp = function () {
  console.log('new Array Property');
};

myHeroes.newProp(); // Works because Array inherits from Object
heroPower.newProp(); // Works because heroPower is an object

myHeroes.newArrayProp(); // Works because it's an array
heroPower.newArrayProp(); // Fails because heroPower is not an array
```

Explanation:

- `newProp` is added to `Object.prototype`, so all objects and arrays inherit it.
- `newArrayProp` is added to `Array.prototype`, so only arrays can access it.
- Prototype chaining allows properties of `Object.prototype` to be accessible in arrays.

## Inheritance using Prototype

```javascript
const User = {
  name: 'chai',
  email: 'chai@google.com'
};

const Teacher = {
  makeVideo: true
};

const TeachingSupport = {
  isAvailable: false
};

const TASupport = {
  makeAssignment: 'JS assignment',
  fullTime: true,
  __proto__: TeachingSupport
};

// Legacy syntax
Teacher.__proto__ = User;

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
```

Explanation:

- The `__proto__` property establishes prototype relationships manually (legacy way).
- `Object.setPrototypeOf()` is the modern and recommended approach.
- `TeachingSupport` inherits from `Teacher`, and `Teacher` inherits from `User`.
