# Notes on Stack vs Heap Memory

## Memory Allocation for Data Types

### Stack Memory

- **Purpose**: Used for storing **primitive data types**.
- **Behavior**: Variables get a **copy** of the value.
- **Example**:
  ```javascript
  let hero = 'Batman';
  let friend = hero;
  // `friend` gets a copy of the value of `hero`, not a reference.
  ```

### Heap Memory

- **Purpose**: Used for storing **non-primitive data types** (e.g., objects, arrays).
- **Behavior**: Variables store a **reference** to the object.
- **Example**:
  ```javascript
  let student = { name: 'Batman' };
  let tutor = student;
  // `tutor` gets a reference to `student`. Changing properties of `tutor` will also affect `student`.
  ```

### Key Differences

1. **Stack Memory**:

   - Fast access.
   - Stores primitive types like `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.
   - Each variable operates independently with its own copy of data.

2. **Heap Memory**:
   - Slower access compared to stack.
   - Stores non-primitive types like `objects`, `arrays`, `functions`.
   - Variables share references to the same memory location.
