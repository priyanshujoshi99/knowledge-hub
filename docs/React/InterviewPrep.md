# React Interview Prep

## **1. Show me the Real React**

**What is React?**

React is a JavaScript library for building user interfaces, particularly single-page applications where data changes over time. It allows developers to create reusable UI components.

**Key Features:**

- **Declarative:** React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
- **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs.
- **Learn Once, Write Anywhere:** You can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.

  **Code Snippet:**

```jsx
import React from 'react';

function App() {
  return <h1>Hello, React!</h1>;
}

export default App;
```

**Interesting Point:**

React uses a **Virtual DOM** to optimize rendering. Instead of directly manipulating the browser's DOM, React creates a virtual representation of the DOM and updates it efficiently.

---

## **2. How React Works Under the Hood**

**Virtual DOM:**

React creates a virtual DOM in memory, where it does all the necessary manipulations before making the changes in the browser DOM. This process is called **reconciliation**.

**Reconciliation:**

React uses a **diffing algorithm** to compare the virtual DOM with the actual DOM and updates only the parts that have changed.

**Code Snippet:**

```jsx
function updateDOM() {
  const element = (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a virtual DOM example.</p>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
```

**Interesting Point:**

React's **Fiber** architecture (introduced in React 16) allows for incremental rendering, which means React can split rendering work into chunks and spread it out over multiple frames.

---

## **3. Rendering Process**

**Steps:**

1. **Initial Render:** React creates a virtual DOM tree and renders it to the actual DOM.
2. **Re-render:** When state or props change, React creates a new virtual DOM tree and compares it with the previous one.
3. **Commit Phase:** React updates the actual DOM with the differences found during the reconciliation process.

**Code Snippet:**

```jsx
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

**Interesting Point:**

React's **batching** mechanism groups multiple state updates into a single re-render to optimize performance.

---

## **4. Most Asked Interview Questions**

**1. What is React and why use it?**

# **Answer:**

React is a **JavaScript library** developed by Facebook for building user interfaces, particularly for single-page applications (SPAs). It allows developers to create reusable UI components that update efficiently when data changes.

# **Why Use React?**

1. **Component-Based Architecture:** React encourages building UIs as a composition of reusable components, making code more modular and maintainable.
2. **Virtual DOM:** React uses a virtual DOM to optimize rendering, making updates faster and more efficient.
3. **Declarative Syntax:** React allows you to describe what the UI should look like for a given state, making the code more predictable and easier to debug.
4. **Unidirectional Data Flow:** Data flows in one direction (parent to child), making it easier to understand and debug the application.
5. **Rich Ecosystem:** React has a vast ecosystem of libraries, tools, and community support, making it easier to build complex applications.
6. **Cross-Platform:** React can be used to build web applications (React), mobile apps (React Native), and even desktop apps (Electron with React).

# **Example:**

```jsx
function App() {
  return <h1>Hello, React!</h1>;
}
```

---

**2. Explain the Virtual DOM.**

# **Answer:**

The **Virtual DOM** is a lightweight copy of the actual DOM (Document Object Model). React uses the Virtual DOM to optimize rendering performance.

# **How It Works:**

1. **Initial Render:** React creates a virtual DOM tree in memory.
2. **Re-render:** When state or props change, React creates a new virtual DOM tree.
3. **Diffing:** React compares the new virtual DOM with the previous one using a **diffing algorithm**.
4. **Reconciliation:** React updates only the parts of the actual DOM that have changed, minimizing direct DOM manipulations.

# **Benefits:**

- **Performance:** Direct DOM manipulations are expensive. The Virtual DOM reduces the number of updates, making the application faster.
- **Efficiency:** React batches multiple updates into a single re-render, further optimizing performance.

# **Example:**

```jsx
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

---

**3. What are the differences between class and functional components?**

# **Answer:**

| **Aspect**            | **Class Components**                            | **Functional Components**              |
| --------------------- | ----------------------------------------------- | -------------------------------------- |
| **Syntax**            | Use ES6 classes.                                | Use JavaScript functions.              |
| **State Management**  | Use `this.state` and `this.setState`.           | Use `useState` hook.                   |
| **Lifecycle Methods** | Use lifecycle methods like `componentDidMount`. | Use `useEffect` hook.                  |
| **Complexity**        | More boilerplate code.                          | Less code, easier to read and write.   |
| **Performance**       | Slightly heavier due to class overhead.         | Lightweight and faster.                |
| **Hooks**             | Cannot use hooks.                               | Can use hooks for state and lifecycle. |

# **Example:**

**Class Component:**

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

**Functional Component:**

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

---

**4. How does React handle state and props?**

# **Answer:**

**State:**

- **Definition:** State is an internal data storage mechanism for a component. It is mutable and can be changed using `setState` (in class components) or `useState` (in functional components).
- **Usage:** State is used to manage data that changes over time, such as user input, toggles, or counters.

**Props:**

- **Definition:** Props (short for properties) are read-only data passed from a parent component to a child component.
- **Usage:** Props are used to pass data and event handlers down the component tree.

# **Example:**

**State in Functional Component:**

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**Props:**

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <Welcome name="React" />;
}
```

---

**5. What are React Hooks and how do they work?**

# **Answer:**

React Hooks are functions that allow you to use state and other React features in functional components. They were introduced in React 16.8 to enable stateful logic in functional components without needing to convert them to class components.

# **Common Hooks:**

1. **useState:** Allows you to add state to functional components.

   ```jsx
   const [count, setCount] = React.useState(0);
   ```

2. **useEffect:** Allows you to perform side effects (e.g., data fetching, subscriptions) in functional components.

   ```jsx
   React.useEffect(() => {
     document.title = `You clicked ${count} times`;
   }, [count]);
   ```

3. **useContext:** Allows you to consume context in functional components.

   ```jsx
   const theme = React.useContext(ThemeContext);
   ```

4. **useReducer:** Allows you to manage complex state logic using a reducer function.

   ```jsx
   const [state, dispatch] = React.useReducer(reducer, initialState);
   ```

5. **useRef:** Allows you to create a mutable reference that persists across renders.
   ```jsx
   const inputRef = React.useRef();
   ```

# **How Hooks Work:**

- Hooks are called at the top level of a functional component.
- They rely on the order in which they are called, so they should not be used conditionally or inside loops.
- Hooks allow you to reuse stateful logic across components without changing the component hierarchy.

# **Example:**

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

## **5. Rendering Lists and Conditional Operators**

**Rendering Lists:**

Use the `map` function to render lists in React.

**Code Snippet:**

```jsx
function ListComponent() {
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

**Conditional Rendering:**

Use conditional operators like `&&` or ternary operators to conditionally render elements.

**Code Snippet:**

```jsx
function ConditionalComponent({ isLoggedIn }) {
  return (
    <div>{isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}</div>
  );
}
```

**Interesting Point:**

React's **key prop** is essential when rendering lists to help React identify which items have changed, are added, or are removed.

---

## **6. Map, Filter, and Reduce in React**

**Map:**

Transforms an array into a list of elements.

**Filter:**

Filters an array based on a condition.

**Reduce:**

Reduces an array to a single value.

**Code Snippet:**

```jsx
function NumberList() {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((num) => num * 2);
  const evens = numbers.filter((num) => num % 2 === 0);
  const sum = numbers.reduce((acc, num) => acc + num, 0);

  return (
    <div>
      <p>Doubled: {doubled.join(', ')}</p>
      <p>Evens: {evens.join(', ')}</p>
      <p>Sum: {sum}</p>
    </div>
  );
}
```

**Interesting Point:**

These methods are **immutable**, meaning they return new arrays without modifying the original array.

---

## **7. Conditional Operators in React**

**Ternary Operator:**

```jsx
{
  isLoggedIn ? <LogoutButton /> : <LoginButton />;
}
```

**Logical && Operator:**

```jsx
{
  isLoggedIn && <WelcomeMessage />;
}
```

**Interesting Point:**

Using `&&` for conditional rendering can lead to bugs if the left-hand side evaluates to `0` or `NaN`, which are falsy but still render in JSX.

---

## **8. All About Components**

**Class Components:**

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

**Functional Components:**

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

**Interesting Point:**

Functional components are now preferred due to their simplicity and the power of hooks.

---

## **9. State vs Props in Components**

**State:**

- Internal to a component.
- Can be changed using `setState` or `useState`.

  **Props:**

- Passed from parent to child.
- Immutable within the child component.

  **Code Snippet:**

```jsx
function ChildComponent({ name }) {
  return <h1>Hello, {name}</h1>;
}

function ParentComponent() {
  const [name, setName] = React.useState('React');

  return <ChildComponent name={name} />;
}
```

**Interesting Point:**

Props can be used to pass down **callback functions** to child components to allow communication back to the parent.

---

## **10. Different Types of Components**

**Presentational vs Container Components:**

- **Presentational:** Concerned with how things look.
- **Container:** Concerned with how things work.

  **Code Snippet:**

```jsx
// Presentational
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

// Container
function ButtonContainer() {
  const handleClick = () => alert('Clicked!');

  return <Button onClick={handleClick}>Click Me</Button>;
}
```

**Interesting Point:**

This pattern is less common with the advent of hooks, which allow functional components to manage state and side-effects.

---

## **11. React Hooks Interview Questions**

**1. What are React Hooks?**

# **Answer:**

React Hooks are functions that allow you to "hook into" React state and lifecycle features from functional components. They were introduced in **React 16.8** to enable stateful logic and side effects in functional components without needing to use class components.

# **Key Hooks:**

- `useState`: Manages state in functional components.
- `useEffect`: Handles side effects (e.g., data fetching, subscriptions).
- `useContext`: Accesses context in functional components.
- `useReducer`: Manages complex state logic.
- `useRef`: Creates mutable references.
- `useMemo` and `useCallback`: Optimize performance by memoizing values and functions.

# **Example:**

```jsx
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

**2. What is `useState`? How does it work?**

# **Answer:**

`useState` is a Hook that allows you to add state to functional components. It returns an array with two elements:

1. The **current state value**.
2. A **function to update the state**.

# **Syntax:**

```jsx
const [state, setState] = useState(initialState);
```

# **Example:**

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

# **Key Points:**

- `useState` can be used multiple times in a single component to manage different pieces of state.
- The state update function (`setCount` in this case) can take a **callback** to update state based on the previous state:
  ```jsx
  setCount((prevCount) => prevCount + 1);
  ```

---

**3. What is `useEffect`? How does it work?**

# **Answer:**

`useEffect` is a Hook that allows you to perform side effects in functional components. It replaces lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

# **Syntax:**

```jsx
useEffect(() => {
  // Side effect logic
  return () => {
    // Cleanup logic (optional)
  };
}, [dependencies]);
```

# **Example:**

```jsx
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <p>Seconds: {seconds}</p>;
}
```

# **Key Points:**

- If the dependency array (`[]`) is empty, the effect runs only once (like `componentDidMount`).
- If the dependency array includes variables, the effect runs whenever those variables change (like `componentDidUpdate`).
- The cleanup function (returned from `useEffect`) runs when the component unmounts or before the effect runs again.

---

**4. What is the difference between `useEffect` and `useLayoutEffect`?**

# **Answer:**

- **`useEffect`:** Runs **asynchronously** after the browser has painted the screen. It is non-blocking and suitable for most side effects.
- **`useLayoutEffect`:** Runs **synchronously** after the DOM has been updated but before the browser paints the screen. It is blocking and should be used for DOM measurements or updates that need to happen before the paint.

# **Example:**

```jsx
useEffect(() => {
  console.log('This runs after the browser paints');
}, []);

useLayoutEffect(() => {
  console.log('This runs before the browser paints');
}, []);
```

---

**5. What is `useContext`? How does it work?**

# **Answer:**

`useContext` is a Hook that allows you to consume context in functional components. It provides a way to pass data through the component tree without manually passing props at every level.

# **Syntax:**

```jsx
const value = useContext(MyContext);
```

# **Example:**

```jsx
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);
  return <div>Current Theme: {theme}</div>;
}
```

# **Key Points:**

- `useContext` re-renders the component whenever the context value changes.
- It simplifies context consumption compared to the `Context.Consumer` component.

---

**6. What is `useReducer`? How is it different from `useState`?**

# **Answer:**

`useReducer` is a Hook used for managing complex state logic. It is similar to `useState` but is more suitable when the state transitions are complex or involve multiple sub-values.

# **Syntax:**

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

# **Example:**

```jsx
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

# **Key Points:**

- `useReducer` is useful when the next state depends on the previous state or when the state logic is complex.
- It is often used in conjunction with `useContext` for global state management.

---

**7. What is `useRef`? How does it work?**

# **Answer:**

`useRef` is a Hook that creates a mutable object with a `.current` property. It is commonly used to:

1. Access DOM elements directly.
2. Store mutable values that persist across renders without causing re-renders.

# **Syntax:**

```jsx
const refContainer = useRef(initialValue);
```

# **Example:**

```jsx
function TextInput() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

# **Key Points:**

- Changes to `ref.current` do not trigger re-renders.
- `useRef` is often used for storing previous values or managing timers.

---

**8. What is the purpose of `useMemo` and `useCallback`?**

# **Answer:**

- **`useMemo`:** Memoizes a value, recomputing it only when its dependencies change. It is used to optimize expensive calculations.

  ```jsx
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```

- **`useCallback`:** Memoizes a function, recreating it only when its dependencies change. It is used to optimize performance by preventing unnecessary re-renders of child components.
  ```jsx
  const memoizedCallback = useCallback(() => {
    doSomething(a, b);
  }, [a, b]);
  ```

# **Example:**

```jsx
function Parent() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);

  return <Child onClick={increment} />;
}

function Child({ onClick }) {
  return <button onClick={onClick}>Increment</button>;
}
```

---

**9. What are Custom Hooks? Can you give an example?**

# **Answer:**

Custom Hooks are JavaScript functions that use React Hooks to encapsulate reusable logic. They allow you to extract component logic into reusable functions.

# **Example:**

```jsx
function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
```

# **Usage:**

```jsx
function App() {
  const [width, height] = useWindowSize();
  return (
    <p>
      Window Size: {width} x {height}
    </p>
  );
}
```

---

**10. What is `useImperativeHandle`?**

# **Answer:**

`useImperativeHandle` is a Hook that customizes the instance value that is exposed when using `ref` with `forwardRef`. It is used to control what properties or methods are accessible on the ref.

# **Example:**

```jsx
const FancyInput = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} />;
});

function App() {
  const inputRef = useRef();

  return (
    <div>
      <FancyInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
}
```

**Interesting Point:**

Hooks allow you to use state and other React features without writing a class.

---

## **12. Light and Dark Mode Implementation**

**Code Snippet:**

```jsx
const ThemeContext = React.createContext('light');

function App() {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = React.useContext(ThemeContext);
  return <div className={theme}>Current Theme: {theme}</div>;
}
```

**Interesting Point:**

You can use CSS variables to dynamically change themes.

---

## **13. useReducer**

`useReducer` is a React Hook used for managing **complex state logic** in functional components. It is an alternative to `useState` and is particularly useful when:

- The state transitions are complex.
- The next state depends on the previous state.
- The state involves multiple sub-values.

# **How It Works:**

1. **Reducer Function:** A pure function that takes the current state and an action, and returns the new state.

   ```jsx
   function reducer(state, action) {
     switch (action.type) {
       case 'increment':
         return { count: state.count + 1 };
       case 'decrement':
         return { count: state.count - 1 };
       default:
         throw new Error();
     }
   }
   ```

2. **Initial State:** The starting state for the reducer.

   ```jsx
   const initialState = { count: 0 };
   ```

3. **Dispatch Function:** A function returned by `useReducer` that sends actions to the reducer to update the state.
   ```jsx
   const [state, dispatch] = useReducer(reducer, initialState);
   ```

# **Example:**

```jsx
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

# **Key Points:**

- **Predictable State Updates:** Since the reducer is a pure function, state updates are predictable and easier to debug.
- **Scalability:** `useReducer` is more scalable than `useState` for managing complex state logic.
- **Use with Context:** `useReducer` is often used with `useContext` for global state management.

---

## **14. useMemo and useCallback**

# **useMemo:**

`useMemo` is a Hook that **memoizes a value**, recomputing it only when its dependencies change. It is used to optimize expensive calculations and avoid unnecessary re-renders.

# **How It Works:**

- **Memoization:** The value is cached and only recalculated when the dependencies change.
- **Syntax:**
  ```jsx
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```

# **Example:**

```jsx
function ExpensiveComponent({ a, b }) {
  const result = useMemo(() => {
    return a * b; // Expensive calculation
  }, [a, b]);

  return <div>Result: {result}</div>;
}
```

# **Key Points:**

- **Performance Optimization:** Prevents expensive calculations on every render.
- **Dependency Array:** The value is recalculated only when the dependencies in the array change.

---

# **useCallback:**

`useCallback` is a Hook that **memoizes a function**, recreating it only when its dependencies change. It is used to optimize performance by preventing unnecessary re-renders of child components.

# **How It Works:**

- **Memoization:** The function is cached and only recreated when the dependencies change.
- **Syntax:**
  ```jsx
  const memoizedCallback = useCallback(() => {
    doSomething(a, b);
  }, [a, b]);
  ```

# **Example:**

```jsx
function Parent() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);

  return <Child onClick={increment} />;
}

function Child({ onClick }) {
  return <button onClick={onClick}>Increment</button>;
}
```

# **Key Points:**

- **Prevents Re-renders:** Ensures that the same function reference is passed to child components, preventing unnecessary re-renders.
- **Dependency Array:** The function is recreated only when the dependencies in the array change.

---

## **15. Custom Hooks**

Custom Hooks are JavaScript functions that use React Hooks to encapsulate reusable logic. They allow you to extract component logic into reusable functions, making your code more modular and easier to maintain.

# **How It Works:**

- **Encapsulation:** Custom Hooks encapsulate logic that can be shared across multiple components.
- **Naming Convention:** Custom Hooks must start with the prefix `use` (e.g., `useWindowSize`, `useFetch`).

# **Example: useWindowSize**

```jsx
function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}
```

# **Example: useFetch**

```jsx
function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [url]);

  return data;
}
```

# **Key Points:**

- **Reusability:** Custom Hooks allow you to reuse logic across multiple components.
- **Separation of Concerns:** Keeps your components clean and focused on rendering.

---

## **16. Routing in React JS**

Routing in React is handled by the **React Router** library, which allows you to create single-page applications (SPAs) with multiple views. React Router dynamically updates the UI as the user navigates through the application.

# **How It Works:**

1. **BrowserRouter:** Wraps the entire application and enables client-side routing.
2. **Route:** Defines a mapping between a URL path and a component.
3. **Switch:** Renders the first matching route and prevents multiple routes from rendering simultaneously.

# **Example:**

```jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
```

# **Key Points:**

- **Dynamic Routing:** React Router dynamically updates the UI based on the URL.
- **Nested Routes:** You can nest routes to create complex UIs.
- **React Router v6:** Introduces a new `Routes` component that replaces `Switch` and simplifies route configuration.

# **Example with React Router v6:**

```jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
```

# **Interesting Point:**

React Router v6 introduces a more intuitive API and better performance compared to previous versions.

---

## **17. Advanced State Management (Redux)**

**Redux Basics:**

- **Store:** Holds the state of the application.
- **Actions:** Describe what happened.
- **Reducers:** Specify how the state changes in response to actions.

  **Code Snippet:**

```jsx
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = Redux.createStore(counterReducer);

store.dispatch({ type: 'increment' });
console.log(store.getState()); // { count: 1 }
```

**Interesting Point:**

Redux Toolkit simplifies Redux setup and reduces boilerplate code.

---

## **18. Redux Toolkit Implementation**

**Code Snippet:**

```jsx
import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  }
});

const store = configureStore({
  reducer: counterSlice.reducer
});

store.dispatch(counterSlice.actions.increment());
console.log(store.getState()); // { value: 1 }
```

**Interesting Point:**

Redux Toolkit uses **Immer** under the hood, allowing you to write "mutative" logic in reducers.
