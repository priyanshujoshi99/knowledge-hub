# Promises in JavaScript

## Overview

Promises in JavaScript are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They are used to handle asynchronous operations more elegantly than callbacks, avoiding "callback hell."

### Key Concepts:

1. **States of a Promise**:

   - **Pending**: Initial state, neither fulfilled nor rejected.
   - **Fulfilled**: The operation completed successfully.
   - **Rejected**: The operation failed.

2. **Syntax**:

   ```javascript
   const promise = new Promise((resolve, reject) => {
     // Asynchronous operation
     if (/* operation successful */) {
       resolve(value); // Fulfilled
     } else {
       reject(error); // Rejected
     }
   });
   ```

3. **Chaining**:
   - `.then()`: Handles the resolved value.
   - `.catch()`: Handles errors or rejections.
   - `.finally()`: Executes regardless of the promise's outcome.

---

## Code Snippet Breakdown

### 1. Basic Promise

```javascript
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('Async task is complete');
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log('Promise consumed');
});
```

- **Explanation**:
  - A promise is created and resolves after 1 second.
  - `.then()` is used to handle the resolved state.

---

### 2. Inline Promise

```javascript
new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('Async task 2 is complete');
    resolve();
  }, 1000);
}).then(() => {
  console.log('Async 2 resolved');
});
```

- **Explanation**:
  - The promise is created and resolved inline without assigning it to a variable.

---

### 3. Resolving with Data

```javascript
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('Async task 3 is complete');
    resolve({ userName: 'JS', email: 'js.com' });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});
```

- **Explanation**:
  - The promise resolves with an object containing user data.
  - The resolved data is accessed in the `.then()` handler.

---

### 4. Handling Errors

```javascript
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ userName: 'JS', email: 'js.com' });
    } else {
      reject('ERROR: Something went wrong');
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('The promise is either resolved or rejected');
  });
```

- **Explanation**:
  - The promise is rejected if `error` is `true`.
  - `.catch()` handles the rejection.
  - `.finally()` runs regardless of the outcome.

---

### 5. Using `async/await`

```javascript
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ userName: 'JavaScript', email: 'js.com' });
    } else {
      reject('ERROR: JS went wrong');
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

consumePromiseFive();
```

- **Explanation**:
  - `async/await` provides a cleaner way to handle promises.
  - `await` pauses execution until the promise is resolved or rejected.
  - `try/catch` is used for error handling.

---

### 6. Fetching Data with `async/await`

```javascript
async function getAllUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data[0].name);
  } catch (error) {
    console.log('E: ', error);
  }
}

getAllUsers();
```

- **Explanation**:
  - Fetches data from an API using `fetch()`.
  - `await` is used to wait for the response and parse the JSON data.

---

### 7. Fetching Data with `.then()`

```javascript
fetch('https://api.github.com/users/priyanshujoshi99')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
```

- **Explanation**:
  - Fetches data from the GitHub API.
  - `.then()` is used to handle the response and parse JSON.
  - `.catch()` handles any errors.

---

## Additional Points

1. **Promise Chaining**:

   - Promises can be chained to perform sequential asynchronous operations.
   - Example:
     ```javascript
     fetch(url)
       .then((response) => response.json())
       .then((data) => processData(data))
       .catch((error) => console.error(error));
     ```

2. **Error Propagation**:

   - Errors in promises propagate down the chain until they are caught by a `.catch()` block.

3. **Microtasks Queue**:

   - Promises are executed in the microtasks queue, which has higher priority than the macrotasks queue (e.g., `setTimeout`).

4. **Promise.all()**:

   - `Promise.all` is used when you want to execute multiple promises in parallel and wait for **all of them to resolve**. If any promise rejects, the entire `Promise.all` rejects.
   - **Use Case:** Fetching data from multiple APIs simultaneously and processing the results only when all requests are successful.

   ```javascript
   const fetchUser = fetch(
     'https://api.github.com/users/priyanshujoshi99'
   ).then((response) => response.json());
   const fetchRepos = fetch(
     'https://api.github.com/users/priyanshujoshi99/repos'
   ).then((response) => response.json());
   const fetchGists = fetch(
     'https://api.github.com/users/priyanshujoshi99/gists'
   ).then((response) => response.json());

   Promise.all([fetchUser, fetchRepos, fetchGists])
     .then(([user, repos, gists]) => {
       console.log('User:', user.login);
       console.log('Repos:', repos.length);
       console.log('Gists:', gists.length);
     })
     .catch((error) => {
       console.error('Error fetching data:', error);
     });
   ```

   - **Explanation:**

   1. Three API requests are made in parallel using `fetch`.
   2. `Promise.all` waits for all three promises to resolve.
   3. The results are destructured into `user`, `repos`, and `gists`.
   4. If any of the promises reject, the `.catch` block handles the error.

5. **Promise.race()**:

   - `Promise.race` is used when you want to execute multiple promises in parallel and resolve or reject as soon as **the first promise settles** (either resolves or rejects).
   - **Use Case:** Implementing a timeout mechanism for an API request.

   ```javascript
   const fetchData = fetch(
     'https://api.github.com/users/priyanshujoshi99'
   ).then((response) => response.json());
   const timeout = new Promise((resolve, reject) => {
     setTimeout(() => {
       reject(new Error('Request timed out!'));
     }, 3000); // Timeout after 3 seconds
   });

   Promise.race([fetchData, timeout])
     .then((data) => {
       console.log('Data fetched:', data);
     })
     .catch((error) => {
       console.error(error.message); // "Request timed out!" or fetch error
     });
   ```

   - **Explanation:**

   1. `fetchData` is a promise that fetches user data from the GitHub API.
   2. `timeout` is a promise that rejects after 3 seconds.
   3. `Promise.race` resolves or rejects as soon as either `fetchData` completes or the `timeout` occurs.
   4. If the API request takes longer than 3 seconds, the `timeout` promise wins, and an error is thrown.

---

### Key Differences Between `Promise.all` and `Promise.race`

| Feature            | `Promise.all`                         | `Promise.race`                                         |
| ------------------ | ------------------------------------- | ------------------------------------------------------ |
| **Behavior**       | Waits for all promises to resolve.    | Resolves/rejects as soon as the first promise settles. |
| **Use Case**       | When all results are needed together. | When only the fastest result matters.                  |
| **Error Handling** | Fails if any promise rejects.         | Fails if the first promise rejects.                    |
| **Output**         | Array of resolved values.             | Single resolved/rejected value.                        |

---

### Additional Example: Combining `Promise.all` and `Promise.race`

You can combine both to create advanced workflows. For example, fetch data from multiple sources but timeout if any request takes too long.

```javascript
const fetchUser = fetch('https://api.github.com/users/priyanshujoshi99').then(
  (response) => response.json()
);
const fetchRepos = fetch(
  'https://api.github.com/users/priyanshujoshi99/repos'
).then((response) => response.json());
const timeout = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Request timed out!'));
  }, 2000); // Timeout after 2 seconds
});

Promise.race([Promise.all([fetchUser, fetchRepos]), timeout])
  .then(([user, repos]) => {
    console.log('User:', user.login);
    console.log('Repos:', repos.length);
  })
  .catch((error) => {
    console.error(error.message); // "Request timed out!" or fetch error
  });
```

### Explanation:

1. `Promise.all` is used to fetch user and repo data.
2. `Promise.race` ensures that if the combined `Promise.all` takes longer than 2 seconds, the `timeout` wins and rejects the promise.

---

## Interesting Facts

- Promises were introduced in ES6 (2015) to simplify asynchronous programming.
- `async/await` was introduced in ES8 (2017) to make working with promises even more intuitive.
- Promises are immutable once resolved or rejected, meaning their state cannot be changed.
