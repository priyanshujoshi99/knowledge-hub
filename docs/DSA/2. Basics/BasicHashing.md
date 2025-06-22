# Basic Hashing

## 1. Introduction to Hashing

- **Hashing** is a technique used to quickly find, store, and manage data.
- It converts an input (e.g., a number or string) into a fixed-size value called a **hash**.
- The hash points to the location of the data in a **hash table**.
- **Goal**: Make data retrieval fast, even with large datasets.

---

## 2. Number Hashing

### 2.1 Method 1: Basic Traversal and Counting

```java
int[] arr = {5, 6, 5, 6, 9, 6};
int count = 0;
for (int num : arr) {
    if (num == 6) {
        count++;
    }
}
System.out.println(count);  // Output: 3
```

- **Time Complexity**: O(N)
  - Traverses the array once.
- **Space Complexity**: O(1)
  - Uses a single variable for counting.
- **Use Case**: Simple counting for small datasets.

---

### 2.2 Method 2: Hashing for Efficient Counting

```java
int[] arr = {5, 6, 5, 6, 9, 6};
int[] hashTable = new int[10];
for (int num : arr) {
    hashTable[num]++;
}
System.out.println(hashTable[6]);  // Output: 3
```

- **Time Complexity**: O(N)
  - Traverses the array once.
- **Space Complexity**: O(M)
  - M is the size of the hash table (10 in this case).
- **Use Case**: Efficient counting for larger datasets with known value ranges.

---

## 3. Character Hashing

### 3.1 Understanding ASCII Values

- **ASCII** assigns numerical values to characters:
  - Lowercase letters: `'a'` (97) to `'z'` (122).
- Example: `hash['a']++` translates to `hash[97]++`.

---

### 3.2 Hashing for Lowercase Alphabets

- Optimize by indexing relative to `'a'`:
  - Example: `hash['b' - 'a'] = hash[1]`.
- **Advantages**:
  - Reduces space to 26 indices (0–25).
  - Simplifies storage and retrieval.

---

## 4. Hashing Implementations

- **HashMap**:
  - Average time complexity: O(1).
  - Worst-case time complexity: O(N) (due to collisions).
- **TreeMap**:
  - Time complexity: O(log N).
  - Ensures consistent performance.

---

## 5. Problems

### 5.1 Highest Occurring Element in an Array

```java
import java.util.*;

class Solution {
    public int mostFrequentElement(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        int maxCount = 0, element = Integer.MAX_VALUE;

        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
            maxCount = Math.max(map.get(num), maxCount);
        }

        for (int num : nums) {
            if (map.get(num) == maxCount) {
                element = Math.min(element, num);
            }
        }

        return element;
    }
}
```

- **Time Complexity**: O(N)
  - Traverses the array twice.
- **Space Complexity**: O(N)
  - Uses a HashMap to store frequencies.

---

### 5.2 Second Highest Occurring Element

```java
import java.util.*;

class Solution {
    public int secondMostFrequentElement(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        int maxCount = 0, secondMaxCount = 0, element = Integer.MAX_VALUE;

        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        for (int count : map.values()) {
            if (count > maxCount) {
                secondMaxCount = maxCount;
                maxCount = count;
            } else if (count > secondMaxCount && count < maxCount) {
                secondMaxCount = count;
            }
        }

        if (secondMaxCount == 0) return -1;

        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if (entry.getValue() == secondMaxCount) {
                element = Math.min(element, entry.getKey());
            }
        }

        return element;
    }
}
```

- **Time Complexity**: O(N)
  - Traverses the array and map.
- **Space Complexity**: O(N)
  - Uses a HashMap to store frequencies.

---

### 5.3 Sum of Highest and Lowest Frequency

```java
import java.util.*;

class Solution {
    public int sumHighestAndLowestFrequency(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        int maxCount = Integer.MIN_VALUE, minCount = Integer.MAX_VALUE;

        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        for (int value : map.values()) {
            maxCount = Math.max(value, maxCount);
            minCount = Math.min(value, minCount);
        }

        return maxCount + minCount;
    }
}
```

- **Time Complexity**: O(N)
  - Traverses the array and map.
- **Space Complexity**: O(N)
  - Uses a HashMap to store frequencies.

---

# **General Notes on Hashing**

- **Collisions**: Occur when two inputs produce the same hash. Handled using techniques like chaining or open addressing.
- **Applications**: Databases, caching, password storage, and more.
- **Trade-offs**: Space vs. time complexity.
