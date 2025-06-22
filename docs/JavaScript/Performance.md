# Performance Optimization Questions

## 1. **How do you optimize the loading time of a web application?**

**Answer:**

- **Minify and compress assets:** Use tools like Webpack, Terser, or Gzip to minify JavaScript, CSS, and HTML files.
- **Lazy loading:** Load only the necessary resources initially and defer the loading of non-critical resources.
- **Code splitting:** Split your JavaScript bundles into smaller chunks using tools like Webpack or React.lazy.
- **Optimize images:** Use modern image formats (WebP, AVIF), compress images, and use responsive images with `srcset`.
- **Use a CDN:** Serve static assets from a Content Delivery Network (CDN) to reduce latency.

**Code Snippet (Lazy Loading Images):**

```html
<img data-src="image.jpg" alt="Lazy Loaded Image" class="lazyload" />
<script>
  document.addEventListener('DOMContentLoaded', function () {
    const lazyImages = document.querySelectorAll('.lazyload');
    lazyImages.forEach((img) => {
      img.src = img.dataset.src;
    });
  });
</script>
```

**Additional Points:**

- Use `preload` and `prefetch` for critical resources.
- Implement caching strategies (e.g., Service Workers) for repeat visits.

---

## 2. **How do you reduce the time to first paint (FP) and first contentful paint (FCP)?**

**Answer:**

- **Critical CSS:** Inline critical CSS required for above-the-fold content and defer non-critical CSS.
- **Server-Side Rendering (SSR):** Use SSR frameworks like Next.js to send pre-rendered HTML to the client.
- **Optimize JavaScript execution:** Defer non-essential JavaScript and use `async` or `defer` attributes for script tags.

**Code Snippet (Inline Critical CSS):**

```html
<style>
  /* Critical CSS */
  body {
    font-family: Arial, sans-serif;
  }
  .header {
    background: #333;
    color: #fff;
  }
</style>
<link
  rel="stylesheet"
  href="non-critical.css"
  media="print"
  onload="this.media='all'"
/>
```

**Additional Points:**

- Use tools like Critical or Penthouse to extract critical CSS.
- Minimize render-blocking resources.

---

## 3. **How do you optimize JavaScript performance?**

**Answer:**

- **Debounce and throttle:** Use debouncing and throttling for event handlers like `resize` or `scroll`.
- **Avoid unnecessary re-renders:** Use `React.memo`, `useMemo`, and `useCallback` in React applications.
- **Web Workers:** Offload heavy computations to Web Workers to avoid blocking the main thread.

**Code Snippet (Debouncing):**

```javascript
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

window.addEventListener(
  'resize',
  debounce(() => {
    console.log('Window resized');
  }, 300)
);
```

**Additional Points:**

- Use performance profiling tools like Chrome DevTools to identify bottlenecks.
- Optimize loops and avoid nested loops where possible.

---

## 4. **How do you optimize CSS performance?**

**Answer:**

- **Avoid deeply nested selectors:** Deeply nested CSS selectors can slow down rendering.
- **Use efficient selectors:** Prefer class selectors over tag or ID selectors.
- **Reduce repaints and reflows:** Minimize layout thrashing by batching DOM updates.

**Code Snippet (Avoiding Deeply Nested Selectors):**

```css
/* Bad */
div ul li a {
  color: red;
}

/* Good */
.nav-link {
  color: red;
}
```

**Additional Points:**

- Use CSS containment (`contain: layout`) to isolate parts of the DOM.
- Avoid using `@import` in CSS as it blocks rendering.

---

## 5. **How do you handle large datasets or lists efficiently?**

**Answer:**

- **Virtualization:** Render only the visible items in a list or grid using libraries like `react-window` or `react-virtualized`.
- **Pagination:** Load data in chunks (pages) instead of loading everything at once.
- **Infinite scrolling:** Load more data as the user scrolls down.

**Code Snippet (React-Window):**

```jsx
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => <div style={style}>Row {index}</div>;

function MyList() {
  return (
    <List height={150} itemCount={1000} itemSize={35} width={300}>
      {Row}
    </List>
  );
}
```

**Additional Points:**

- Use `IntersectionObserver` for implementing infinite scrolling.
- Optimize data fetching to avoid unnecessary API calls.

---

## 6. **How do you optimize animations for better performance?**

**Answer:**

- **Use `transform` and `opacity`:** These properties are GPU-accelerated and do not trigger reflows or repaints.
- **Avoid `setTimeout` or `setInterval` for animations:** Use `requestAnimationFrame` instead.
- **Use CSS animations:** CSS animations are generally more performant than JavaScript-based animations.

**Code Snippet (CSS Animation):**

```css
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}

.box {
  animation: slide 1s infinite;
}
```

**Additional Points:**

- Use the `will-change` property to hint the browser about upcoming changes.
- Test animations on low-end devices to ensure smooth performance.

---

## 7. **How do you optimize network requests?**

**Answer:**

- **Bundle and minify assets:** Combine multiple files into a single bundle and minify them.
- **Use HTTP/2:** HTTP/2 allows multiplexing, reducing the overhead of multiple requests.
- **Cache API responses:** Use browser caching or Service Workers to cache API responses.

**Code Snippet (Service Worker Caching):**

```javascript
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll(['/index.html', '/styles.css', '/script.js']);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
```

**Additional Points:**

- Use `preconnect` and `dns-prefetch` to reduce DNS lookup times.
- Optimize API endpoints to return only the required data.

---

## 8. **How do you measure and improve Core Web Vitals?**

**Answer:**

- **Largest Contentful Paint (LCP):** Optimize images, use efficient fonts, and reduce render-blocking resources.
- **First Input Delay (FID):** Minimize JavaScript execution time and use Web Workers.
- **Cumulative Layout Shift (CLS):** Reserve space for images and ads, and avoid inserting content dynamically.

**Code Snippet (Measuring LCP):**

```javascript
import { getLCP } from 'web-vitals';

getLCP((metric) => {
  console.log('LCP:', metric.value);
});
```

**Additional Points:**

- Use tools like Lighthouse, PageSpeed Insights, or Chrome DevTools to measure Core Web Vitals.
- Implement lazy loading and prioritize above-the-fold content.

---

## 9. **How do you handle memory leaks in JavaScript?**

**Answer:**

- **Avoid global variables:** Global variables are not garbage collected and can cause memory leaks.
- **Remove event listeners:** Always remove event listeners when they are no longer needed.
- **Use weak references:** Use `WeakMap` or `WeakSet` to avoid holding onto object references.

**Code Snippet (Removing Event Listeners):**

```javascript
function addEventListener() {
  const button = document.getElementById('myButton');
  const handleClick = () => console.log('Button clicked');
  button.addEventListener('click', handleClick);

  // Cleanup
  return () => button.removeEventListener('click', handleClick);
}
```

**Additional Points:**

- Use Chrome DevTools' Memory tab to detect memory leaks.
- Avoid circular references between objects.

---

## 10. **How do you optimize for mobile devices?**

**Answer:**

- **Responsive design:** Use media queries to adapt the layout to different screen sizes.
- **Touch optimization:** Ensure buttons and links are large enough to be tapped easily.
- **Reduce JavaScript execution:** Mobile devices have less processing power, so minimize heavy computations.

**Code Snippet (Responsive Design):**

```css
@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}
```

**Additional Points:**

- Test your application on real devices, not just emulators.
- Use tools like Lighthouse to audit mobile performance.

---

## 11. **React Profiler**

The React Profiler is a tool provided by React to measure the performance of your React components. It helps you identify performance bottlenecks in your application.

**Code Snippet:**

```jsx
import React, { Profiler } from 'react';

function onRenderCallback(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) {
  console.log('Render Time:', actualDuration);
}

function MyComponent() {
  return (
    <Profiler id="MyComponent" onRender={onRenderCallback}>
      <div>My Component</div>
    </Profiler>
  );
}
```

**Theory:**

- **Phases:** The Profiler tracks two phases: `mount` and `update`.
- **Metrics:** It provides metrics like `actualDuration`, `baseDuration`, and `commitTime`.
- **Use Case:** Use the Profiler to identify slow components and optimize them using techniques like `React.memo`, `useMemo`, or `useCallback`.

**Additional Points:**

- The Profiler should be used in development mode only.
- It can be nested to measure different parts of the application.

---

## 12. **SSR vs CSR**

**Server-Side Rendering (SSR):**

- **Definition:** The server generates the HTML for each request.
- **Advantages:** Better SEO, faster initial load.
- **Disadvantages:** Higher server load, slower time-to-interactive.

**Client-Side Rendering (CSR):**

- **Definition:** The browser downloads a minimal HTML page and then renders the rest using JavaScript.
- **Advantages:** Faster subsequent loads, better for SPAs.
- **Disadvantages:** Poor SEO, slower initial load.

**Code Snippet (SSR with Next.js):**

```jsx
// pages/index.js
export default function Home({ data }) {
  return <div>{data}</div>;
}

export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return { props: { data } };
}
```

**Additional Points:**

- **Hydration:** In SSR, the HTML sent by the server is "hydrated" on the client side.
- **Static Site Generation (SSG):** A middle ground where HTML is generated at build time.

---

## 13. **Web Vitals**

Web Vitals are a set of metrics that measure the user experience on a web page.

**Core Web Vitals:**

- **Largest Contentful Paint (LCP):** Measures loading performance.
- **First Input Delay (FID):** Measures interactivity.
- **Cumulative Layout Shift (CLS):** Measures visual stability.

**Code Snippet (Measuring LCP):**

```javascript
import { getLCP } from 'web-vitals';

getLCP((metric) => {
  console.log('LCP:', metric.value);
});
```

**Additional Points:**

- Use tools like Lighthouse or Chrome DevTools to measure Web Vitals.
- Optimize images, use lazy loading, and minimize JavaScript to improve these metrics.

---

## 14. **Virtualisation**

Virtualisation is a technique used to render only the visible items in a large list or grid, improving performance.

**Code Snippet (React-Window):**

```jsx
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style }) => <div style={style}>Row {index}</div>;

function MyList() {
  return (
    <List height={150} itemCount={1000} itemSize={35} width={300}>
      {Row}
    </List>
  );
}
```

**Additional Points:**

- Libraries like `react-window` and `react-virtualized` are commonly used.
- Virtualisation is crucial for rendering large datasets efficiently.

---

## 15. **Code Splitting**

Code splitting is a technique to split your code into smaller bundles that can be loaded on demand.

**Code Snippet (React.lazy):**

```jsx
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

**Additional Points:**

- Use `React.lazy` for component-level code splitting.
- Use `import()` for dynamic imports in JavaScript.

---

## 16. **Accessibility**

Accessibility ensures that your web application is usable by everyone, including people with disabilities.

**Code Snippet (ARIA Attributes):**

```jsx
<button aria-label="Close" onClick={handleClose}>
  X
</button>
```

**Additional Points:**

- Use semantic HTML elements.
- Ensure keyboard navigability.
- Test with screen readers like NVDA or VoiceOver.

---

## 17. **Popular Design Patterns Questions**

Design patterns are reusable solutions to common problems in software design.

**Common Patterns:**

- **Singleton:** Ensures a class has only one instance.
- **Observer:** Allows objects to subscribe to events.
- **Factory:** Creates objects without specifying the exact class.

**Code Snippet (Observer Pattern):**

```javascript
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class Observer {
  update(data) {
    console.log('Data received:', data);
  }
}
```

---

## 18. **HOC Pattern**

Higher-Order Components (HOCs) are functions that take a component and return a new component.

**Code Snippet:**

```jsx
function withLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <Component {...props} />;
  };
}
```

**Additional Points:**

- HOCs are used for cross-cutting concerns like logging, authentication, etc.
- They can lead to prop drilling if not managed properly.

---

## 19. **Module Pattern**

The Module Pattern is used to create encapsulated and reusable code.

**Code Snippet:**

```javascript
const Module = (function () {
  let privateVariable = 'I am private';

  function privateMethod() {
    console.log(privateVariable);
  }

  return {
    publicMethod: function () {
      privateMethod();
    }
  };
})();

Module.publicMethod(); // Outputs: I am private
```

**Additional Points:**

- The Module Pattern uses closures to create private and public members.
- It’s useful for creating namespaces and avoiding global scope pollution.

---

## 20. **Render Props Pattern**

Render Props is a pattern where a component’s prop is a function that returns a React element.

**Code Snippet:**

```jsx
function DataProvider({ render }) {
  const data = fetchData();
  return render(data);
}

function App() {
  return <DataProvider render={(data) => <div>{data}</div>} />;
}
```

**Additional Points:**

- Render Props is a powerful pattern for sharing logic between components.
- It can be used as an alternative to HOCs.

---

## 21. **Error Boundaries**

Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree.

**Code Snippet:**

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

**Additional Points:**

- Error Boundaries do not catch errors in event handlers, asynchronous code, or server-side rendering.
- Use them to gracefully handle errors and display fallback UI.
