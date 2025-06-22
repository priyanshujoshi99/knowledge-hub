# Java Collections

## 1. Custom Classes

Custom classes in Java are user-defined classes that encapsulate data and behavior. They are the building blocks of object-oriented programming in Java.

### Example:

```java
public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + "}";
    }
}
```

## 2. Collections

Collections in Java are used to store, retrieve, manipulate, and communicate aggregate data. The Java Collections Framework provides a set of interfaces and classes to handle collections of objects.

### a. List

A `List` is an ordered collection that allows duplicate elements.

#### i. ArrayList

`ArrayList` is a resizable array implementation of the `List` interface.

```java
import java.util.ArrayList;
import java.util.List;

public class ArrayListExample {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");
        System.out.println(list); // [Apple, Banana, Cherry]
    }
}
```

#### ii. LinkedList

`LinkedList` is a doubly-linked list implementation of the `List` and `Deque` interfaces.

```java
import java.util.LinkedList;
import java.util.List;

public class LinkedListExample {
    public static void main(String[] args) {
        List<String> list = new LinkedList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");
        System.out.println(list); // [Apple, Banana, Cherry]
    }
}
```

#### iii. Stack

`Stack` is a last-in-first-out (LIFO) stack of objects.

```java
import java.util.Stack;

public class StackExample {
    public static void main(String[] args) {
        Stack<String> stack = new Stack<>();
        stack.push("Apple");
        stack.push("Banana");
        stack.push("Cherry");
        System.out.println(stack.pop()); // Cherry
    }
}
```

#### iv. Vector

`Vector` is a synchronized resizable array implementation of the `List` interface. It is thread safe.

```java
import java.util.Vector;
import java.util.List;

public class VectorExample {
    public static void main(String[] args) {
        List<String> vector = new Vector<>();
        vector.add("Apple");
        vector.add("Banana");
        vector.add("Cherry");
        System.out.println(vector); // [Apple, Banana, Cherry]
    }
}
```

### b. Set

A `Set` is a collection that does not allow duplicate elements.

#### i. HashSet

`HashSet` is a hash table implementation of the `Set` interface.

```java
import java.util.HashSet;
import java.util.Set;

public class HashSetExample {
    public static void main(String[] args) {
        Set<String> set = new HashSet<>();
        set.add("Apple");
        set.add("Banana");
        set.add("Apple");
        System.out.println(set); // [Apple, Banana]
    }
}
```

#### ii. TreeSet

`TreeSet` is a red-black tree implementation of the `Set` interface.

```java
import java.util.TreeSet;
import java.util.Set;

public class TreeSetExample {
    public static void main(String[] args) {
        Set<String> set = new TreeSet<>();
        set.add("Banana");
        set.add("Apple");
        set.add("Cherry");
        System.out.println(set); // [Apple, Banana, Cherry]
    }
}
```

### c. Queue

A `Queue` is a collection designed for holding elements prior to processing.

#### i. ArrayDeque

`ArrayDeque` is a resizable array implementation of the `Deque` interface.

```java
import java.util.ArrayDeque;
import java.util.Queue;

public class ArrayDequeExample {
    public static void main(String[] args) {
        Queue<String> queue = new ArrayDeque<>();
        queue.add("Apple");
        queue.add("Banana");
        queue.add("Cherry");
        System.out.println(queue.poll()); // Apple
    }
}
```

#### ii. LinkedList (as Queue)

`LinkedList` can also be used as a `Queue`.

```java
import java.util.LinkedList;
import java.util.Queue;

public class LinkedListQueueExample {
    public static void main(String[] args) {
        Queue<String> queue = new LinkedList<>();
        queue.add("Apple");
        queue.add("Banana");
        queue.add("Cherry");
        System.out.println(queue.poll()); // Apple
    }
}
```

#### iii. PriorityQueue

`PriorityQueue` is a priority heap implementation of the `Queue` interface.

```java
import java.util.PriorityQueue;
import java.util.Queue;

public class PriorityQueueExample {
    public static void main(String[] args) {
        Queue<String> queue = new PriorityQueue<>();
        queue.add("Banana");
        queue.add("Apple");
        queue.add("Cherry");
        System.out.println(queue.poll()); // Apple
    }
}
```

## 3. Map

A `Map` is an object that maps keys to values.

### a. HashMap

`HashMap` is a hash table implementation of the `Map` interface.

```java
import java.util.HashMap;
import java.util.Map;

public class HashMapExample {
public class HashMapExample {
  public static void main(String[] args) {
    Map<String, Integer> map = new HashMap<>();
    map.put("Apple", 1);
    map.put("Banana", 2);
    map.put("Cherry", 3);

    System.out.println(map.get("Banana")); // 2

    for (Map.Entry<String, Integer> entry : map.entrySet()) {
      System.out.print(entry.getKey());
      System.out.print(", ");
      System.out.println();
      System.out.print(entry.getValue());
      System.out.print(", ");
      /* Output ->
      Apple, Banana, Cherry,
      1, 2, 3,
      */
    }

    for (int value : map.values()) {
      System.out.print(value);
      System.out.print(", ");
      /* Output ->
      1, 2, 3,
      */
    }
  }
}

```

### b. TreeMap

`TreeMap` is a red-black tree implementation of the `Map` interface.

```java
import java.util.TreeMap;
import java.util.Map;

public class TreeMapExample {
    public static void main(String[] args) {
        Map<String, Integer> map = new TreeMap<>();
        map.put("Banana", 2);
        map.put("Apple", 1);
        map.put("Cherry", 3);
        System.out.println(map.get("Apple")); // 1
    }
}
```

## 4. Iterator

An `Iterator` is used to traverse through the elements of a collection.

### a. ListIterator

`ListIterator` is an iterator for lists that allows bidirectional traversal.

```java
import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

public class ListIteratorExample {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");

        ListIterator<String> iterator = list.listIterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }
    }
}
```

## 5. Custom Comparator

A `Comparator` is used to define a custom order for objects.

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class CustomComparatorExample {
    public static void main(String[] args) {
        List<Person> people = new ArrayList<>();
        people.add(new Person("Alice", 30));
        people.add(new Person("Bob", 25));
        people.add(new Person("Charlie", 35));

        Collections.sort(people, new Comparator<Person>() {
            @Override
            public int compare(Person p1, Person p2) {
                return Integer.compare(p1.getAge(), p2.getAge());
            }
        });

        for (Person person : people) {
            System.out.println(person);
        }
    }
}
```

## 6. Common Algorithms

### Collections.sort(list)

Sorts the specified list into ascending order.

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class SortExample {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Banana");
        list.add("Apple");
        list.add("Cherry");
        Collections.sort(list);
        System.out.println(list); // [Apple, Banana, Cherry]
    }
}
```

### Collections.max(list)

Returns the maximum element in the list.

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MaxExample {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(10);
        list.add(20);
        list.add(5);
        System.out.println(Collections.max(list)); // 20
    }
}
```

### Collections.min(list)

Returns the minimum element in the list.

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MinExample {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(10);
        list.add(20);
        list.add(5);
        System.out.println(Collections.min(list)); // 5
    }
}
```

### Collections.reverse(list)

Reverses the order of elements in the list.

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ReverseExample {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");
        Collections.reverse(list);
        System.out.println(list); // [Cherry, Banana, Apple]
    }
}
```

### Collections.sort(array)

Sorts the specified array into ascending order.

```java
import java.util.Arrays;
import java.util.Collections;

public class SortArrayExample {
    public static void main(String[] args) {
        String[] array = {"Banana", "Apple", "Cherry"};
        Arrays.sort(array);
        System.out.println(Arrays.toString(array)); // [Apple, Banana, Cherry]
    }
}
```

### Collections.frequency(list, element)

Returns the number of elements in the list equal to the specified element.

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class FrequencyExample {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Apple");
        System.out.println(Collections.frequency(list, "Apple")); // 2
    }
}
```

### Collections.binarySearch(list, key)

Searches the list for the specified key using the binary search algorithm.

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class BinarySearchExample {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(10);
        list.add(20);
        list.add(30);
        int index = Collections.binarySearch(list, 20);
        System.out.println(index); // 1
    }
}
```

### Math.pow(base, exponent)

Returns the value of the first argument raised to the power of the second argument.

```java
public class MathPowExample {
    public static void main(String[] args) {
        double result = Math.pow(2, 3);
        System.out.println(result); // 8.0
    }
}
```
