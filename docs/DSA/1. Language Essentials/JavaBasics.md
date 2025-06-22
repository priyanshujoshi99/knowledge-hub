# Java Basics

## 1. Sample Code in Java

### a. What is `main`

The `main` method is the entry point of a Java application.

- **Syntax**:

  ```java
  public static void main(String[] args) {
      // Code to be executed
  }
  ```

- **Key Points**:
  - `public`: Accessible from anywhere.
  - `static`: Belongs to the class, not an instance.
  - `void`: Returns nothing.
  - `String[] args`: Command-line arguments.

### b. What is `static`

- **Definition**: A keyword to denote a method or variable that belongs to the class rather than an instance.
- **Example**:

  ```java
  class Example {
      static int count = 0; // Static variable

      static void displayCount() { // Static method
          System.out.println("Count: " + count);
      }
  }
  ```

---

## 2. Comments

### a. Single Line

- **Syntax**: `// This is a single-line comment`
- **Example**:
  ```java
  // This is a comment
  int x = 10; // Variable declaration
  ```

### b. Multi-Line

- **Syntax**:
  ```java
  /* This is a
     multi-line comment */
  ```
- **Example**:
  ```java
  /*
     This code demonstrates
     multi-line comments.
  */
  int y = 20;
  ```

---

## 3. Data Types

### a. `byte`

- 1 byte (8 bits), range: -128 to 127.
- **Example**:
  ```java
  byte b = 100;
  ```

### b. `short`

- 2 bytes (16 bits), range: -32,768 to 32,767.
- **Example**:
  ```java
  short s = 32000;
  ```

### c. `int`

- 4 bytes (32 bits), range: -2^31 to 2^31-1.
- **Example**:
  ```java
  int i = 123456;
  ```

### d. `float`

- 4 bytes (32 bits), precision: 6-7 decimal digits.
- **Example**:
  ```java
  float f = 3.14f;
  ```

### e. `double`

- 8 bytes (64 bits), precision: 15-16 decimal digits.
- **Example**:
  ```java
  double d = 3.14159;
  ```

### f. `char`

- 2 bytes (16 bits), stores a single Unicode character.
- **Example**:
  ```java
  char c = 'A';
  ```

---

## 4. Operators

### a. Arithmetic

```java
int sum = 5 + 3; // Addition
int diff = 5 - 3; // Subtraction
int prod = 5 * 3; // Multiplication
int quo = 5 / 3; // Division
int rem = 5 % 3; // Modulus
```

### b. Unary

```java
int x = 5;
System.out.println(++x); // Pre-increment
System.out.println(x--); // Post-decrement
```

### c. Relational

```java
int a = 10, b = 20;
System.out.println(a > b); // false
```

### d. Logical

```java
boolean res = (a > b) && (b > 0); // AND
```

### e. Assignment

```java
int num = 5;
num += 10; // Equivalent to num = num + 10
```

### f. Bitwise

```java
int result = 5 & 3; // Bitwise AND
```

### g. Ternary

```java
String result = (a > b) ? "Greater" : "Smaller";
```

---

## 5. String

### a. Strings and Immutability

- **Strings in Java**:
  - A `String` is a sequence of characters.
  - Strings in Java are objects of the `String` class.
  - They are defined using double quotes:
    ```java
    String str = "Hello";
    ```
- **Immutability**:

  - Strings are **immutable**, meaning their content cannot be changed once created.
  - Any operation that appears to modify a string (e.g., concatenation) creates a new `String` object instead of modifying the existing one.

- **Example**:
  ```java
  String s1 = "Hello";
  String s2 = s1.concat(" World");
  System.out.println(s1); // Output: Hello
  System.out.println(s2); // Output: Hello World
  ```

### b. Char Array to String

- Strings can be constructed from character arrays.
- **Example**:
  ```java
  char[] chars = {'J', 'a', 'v', 'a'};
  String str = new String(chars);
  System.out.println(str); // Output: Java
  ```

### c. String Methods

#### 1. **Concatenate**:

- Combines two strings.
- **Example**:
  ```java
  String first = "Hello";
  String second = "World";
  String result = first + " " + second; // Using `+` operator
  System.out.println(result); // Output: Hello World
  ```

#### 2. **Length**:

- Returns the number of characters in a string.
- **Example**:
  ```java
  String str = "Java";
  System.out.println(str.length()); // Output: 4
  ```

#### 3. **charAt**:

- Returns the character at a specified index.
- **Example**:
  ```java
  String str = "Java";
  System.out.println(str.charAt(2)); // Output: v
  ```

#### 4. **Substring**:

- Extracts a part of the string.
- **Example**:
  ```java
  String str = "Programming";
  System.out.println(str.substring(3, 8)); // Output: gramm
  ```

#### 5. **Equals**:

- Compares two strings for equality.
- **Example**:
  ```java
  String str1 = "Java";
  String str2 = "java";
  System.out.println(str1.equals(str2)); // Output: false
  System.out.println(str1.equalsIgnoreCase(str2)); // Output: true
  ```

---

## 6. Input/Output

### a. Scanner Class - Implementation

- The `Scanner` class in `java.util` is used to take input from the user.
- **Key Methods**:

  - `nextInt()`: Reads an integer.
  - `nextDouble()`: Reads a double.
  - `nextLine()`: Reads a full line (including spaces).
  - `nextBoolean()`: Reads a boolean.
  - `next()`: Reads a single word (until a space is encountered).

- **Example Implementation**:

  ```java
  import java.util.Scanner;

  public class InputExample {
      public static void main(String[] args) {
          Scanner scanner = new Scanner(System.in);

          System.out.print("Enter an integer: ");
          int num = scanner.nextInt();

          System.out.print("Enter a double: ");
          double decimal = scanner.nextDouble();

          scanner.nextLine(); // Consume the leftover newline

          System.out.print("Enter a string: ");
          String text = scanner.nextLine();

          System.out.println("Integer: " + num);
          System.out.println("Double: " + decimal);
          System.out.println("String: " + text);

          scanner.close();
      }
  }
  ```

---

### b. Common Scanner Methods

#### 1. **nextInt()**:

- Reads an integer value.
- **Example**:
  ```java
  int number = scanner.nextInt();
  ```

#### 2. **nextDouble()**:

- Reads a double value.
- **Example**:
  ```java
  double price = scanner.nextDouble();
  ```

#### 3. **nextLine()**:

- Reads the entire line (including spaces).
- **Example**:
  ```java
  String sentence = scanner.nextLine();
  ```

#### 4. **nextBoolean()**:

- Reads a boolean value (`true` or `false`).
- **Example**:
  ```java
  boolean isActive = scanner.nextBoolean();
  ```

#### 5. **next()**:

- Reads a single word until a space or newline is encountered.
- **Example**:
  ```java
  String word = scanner.next();
  ```

---

### c. BufferedReader

- Used for faster input than the `Scanner` class.
- Requires handling exceptions.
- **Example**:

  ```java
  import java.io.BufferedReader;
  import java.io.InputStreamReader;
  import java.io.IOException;

  public class BufferedReaderExample {
      public static void main(String[] args) {
          BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

          try {
              System.out.print("Enter a string: ");
              String input = reader.readLine();

              System.out.println("You entered: " + input);
          } catch (IOException e) {
              System.out.println("An error occurred: " + e.getMessage());
          }
      }
  }
  ```

---

## 7. Type Casting

### a. Implicit

```java
int x = 10;
double y = x; // Automatic conversion
```

### b. Explicit

```java
double d = 10.5;
int i = (int) d; // Manual conversion
```

---

## 8. Constants

### a. `final` Keyword

```java
final int MAX = 100;
```

---

## 9. Arrays

### a. Declaration and Access

```java
int[] arr = {1, 2, 3};
System.out.println(arr[0]); // Access
```

### b. For Each Loop

```java
for (int num : arr) {
    System.out.println(num);
}
```

### c. 2D Array

```java
int[][] matrix = {{1, 2}, {3, 4}};
```

---

## 10. Conditional Statements

### a. If-Else

```java
if (x > 0) {
    System.out.println("Positive");
} else {
    System.out.println("Negative");
}
```

### b. Switch

```java
switch (day) {
    case 1: System.out.println("Monday"); break;
    default: System.out.println("Invalid");
}
```

---

## 11. Loops

### a. For Loop

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
```

### b. While Loop

```java
int i = 0;
while (i < 5) {
    System.out.println(i++);
}
```

---

## 12. Exception Handling

### Try-Catch

```java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
}
```
