# `call` and `this` in JavaScript

```js
function setUserName(userName) {
  console.log('called');

  this.userName = userName;
}

function createUser(userName, email, phoneNo) {
  setUserName.call(this, userName); // To hold the reference for function we use call property / function

  this.email = email;
  this.phoneNo = phoneNo;
}

const userOne = new createUser('John', 'john@fb.com', '100');
console.log(userOne);
```

#### **1. Function Definitions**

- `setUserName(userName)`:

  - Logs `'called'` to the console.
  - Assigns `userName` to `this.userName`.

- `createUser(userName, email, phoneNo)`:
  - Calls `setUserName.call(this, userName)` to execute `setUserName` in the correct context.
  - Assigns `email` and `phoneNo` to `this`.

#### **2. Why the Code Works**

- **`.call()` for Function Borrowing**:
  - Ensures `setUserName` runs in the `createUser` object’s context.
- **`new` Keyword Mechanics**:
  1. Creates a new object `{}`.
  2. Sets `this` to reference that object inside `createUser`.
  3. Executes `setUserName.call(this, userName)`, setting `userName`.
  4. Assigns `email` and `phoneNo` to `this`.
  5. Returns the newly created object.

#### **3. Output**

```js
called
createUser { userName: 'John', email: 'john@fb.com', phoneNo: '100' }
```

#### **4. Trivia**

- **Why Not `this.setUserName(userName);`?**

  - `setUserName` is not a method of `createUser`, so `this.setUserName(userName)` would cause an error.

- **Alternative ES6+ Class Implementation**

  ```js
  class User {
    constructor(userName, email, phoneNo) {
      this.setUserName(userName);
      this.email = email;
      this.phoneNo = phoneNo;
    }

    setUserName(userName) {
      console.log('called');
      this.userName = userName;
    }
  }

  const userOne = new User('John', 'john@fb.com', '100');
  console.log(userOne);
  ```

- **`.apply()` Alternative**

  - `setUserName.call(this, userName);` could also be written as:
    ```js
    setUserName.apply(this, [userName]);
    ```

- **Arrow Functions Won't Work Here**
  - Arrow functions do not have their own `this`, so using an arrow function in `setUserName` would fail.
