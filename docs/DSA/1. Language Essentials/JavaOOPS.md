# Java OOPS Concepts

## Classes and Objects

### Access Specifiers

**Access specifiers** define the visibility or scope of a class, method, or variable.

- **`public`:** Accessible from anywhere in the program.

  ```java
  public class MyClass {
      public int number = 10;

      public void display() {
          System.out.println("This is a public method.");
      }
  }
  ```

- **`private`:** Accessible only within the class where it is declared.

  ```java
  public class MyClass {
      private int number = 10;

      private void display() {
          System.out.println("This is a private method.");
      }
  }
  ```

- **`protected`:** Accessible within the same package and subclasses in other packages.

  ```java
  public class MyClass {
      protected int number = 10;

      protected void display() {
          System.out.println("This is a protected method.");
      }
  }
  ```

### Why Objects Are Needed?

- Objects represent real-world entities with attributes (fields) and behaviors (methods).
- They allow encapsulation, inheritance, and polymorphism in Java.

Example:

```java
class Car {
    String brand;
    int speed;

    void drive() {
        System.out.println(brand + " is driving at " + speed + " km/h.");
    }
}

public class Main {
    public static void main(String[] args) {
        Car car = new Car();
        car.brand = "Toyota";
        car.speed = 100;
        car.drive();
    }
}
```

---

## Methods or Functions

### `void` Method

- Does not return a value.
  ```java
  public void greet() {
      System.out.println("Hello!");
  }
  ```

### `private` Method

- Only accessible within the class where it is defined.
  ```java
  private void secretMessage() {
      System.out.println("This is private.");
  }
  ```

### `static` Method

- Belongs to the class rather than an instance.
  ```java
  public static void displayMessage() {
      System.out.println("Static method called.");
  }
  ```

### Method with Return Type

- Returns a value.
  ```java
  public int add(int a, int b) {
      return a + b;
  }
  ```

### Parameterized Method

- Accepts parameters to perform actions.
  ```java
  public void greet(String name) {
      System.out.println("Hello, " + name);
  }
  ```

---

## Constructor

### Default Constructor

- Automatically provided if no constructor is defined.
  ```java
  class MyClass {
      MyClass() {
          System.out.println("Default constructor called.");
      }
  }
  ```

### Parameterized Constructor

- Accepts arguments to initialize fields.

  ```java
  class MyClass {
      int value;

      MyClass(int value) {
          this.value = value;
      }
  }
  ```

### `this` Keyword

- Refers to the current object instance.

  ```java
  class MyClass {
      int value;

      MyClass(int value) {
          this.value = value;
      }
  }
  ```

---

## Encapsulation

### What is Encapsulation?

- Restricting direct access to fields and methods by using access specifiers.

### Getter & Setter

- Used to access and modify private fields.

  ```java
  class MyClass {
      private int number;

      public int getNumber() {
          return number;
      }

      public void setNumber(int number) {
          this.number = number;
      }
  }
  ```

---

## Inheritance

### What is Inheritance?

- Mechanism to inherit fields and methods from a parent class.

### Types of Inheritance

- Single, Multilevel, Hierarchical

### `super` Keyword

- Refers to the parent class constructor or method.

  ```java
  class Parent {
      Parent() {
          System.out.println("Parent constructor.");
      }
  }

  class Child extends Parent {
      Child() {
          super();
      }
  }
  ```

---

## Polymorphism

### What is Polymorphism?

- Ability to perform a single action in multiple ways.

### Overriding Methods (`@Override`)

- Modifying parent class methods in the child class.

  ```java
  class Parent {
      void display() {
          System.out.println("Parent method.");
      }
  }

  class Child extends Parent {
      @Override
      void display() {
          System.out.println("Child method.");
      }
  }
  ```

---

## Abstraction

### What is Abstraction?

- Hiding implementation details while exposing functionality.

### Abstract Class and Method

- Abstract class contains abstract and concrete methods.
  ```java
  abstract class Animal {
      abstract void sound();
  }
  ```

### extends vs implements

- `extends`: Used for inheritance.
- `implements`: Used for interfaces.

### Methods in Abstract Class

- Can have both abstract and concrete methods.

  ```java
  abstract class Animal {
      abstract void sound();

      void eat() {
          System.out.println("Eating...");
      }
  }
  ```

### `super` in Implementing Class for Abstract

- Refers to the parent class’s constructor or methods.

### Interface

- A blueprint of a class.
  ```java
  interface Animal {
      void sound();
  }
  ```

### default`and`static` in Interface

- `default`: Provides default implementation.
  ```java
  interface Animal {
      default void sleep() {
          System.out.println("Sleeping...");
      }
  }
  ```
- `static`: Belongs to the interface.
  ```java
  interface Animal {
      static void info() {
          System.out.println("Animal info.");
      }
  }
  ```

### `super` in Implementing Class for Interface

- Used to call interface default methods.

  ```java
  interface Animal {
      default void sound() {
          System.out.println("Default sound.");
      }
  }

  class Dog implements Animal {
      public void sound() {
          Animal.super.sound();
          System.out.println("Dog barking.");
      }
  }
  ```
