# Basic Arrays

## Sum of Array Elements

### Code:

```java
class Solution {
  public int sum(int arr[], int n) {
    int sum = 0;
    for(int i = 0; i < n; i++) {
      sum += arr[i];
    }
    return sum;
  }
}
```

### Time Complexity:

- **O(n)** (Iterates through the array once)

### Space Complexity:

- **O(1)** (Uses only a constant amount of extra space)

---

## Count of Odd Numbers in Array

### Code:

```java
class Solution {
  public int countOdd(int[] arr, int n) {
    int count = 0;
    for (int i = 0; i < n; i++) {
      if(arr[i] % 2 != 0) count += 1;
    }
    return count;
  }
}
```

### Time Complexity:

- **O(n)** (Iterates through the array once)

### Space Complexity:

- **O(1)** (Uses only a constant amount of extra space)

---

## Reverse an Array

### Brute Force Approach

### Code:

```java
class Solution {
    public void reverse(int[] arr, int n) {
      int[] temp = new int[n];

      for(int i=0; i<n; i++) {
        temp[n-i-1] = arr[i];
      }

      for(int i=0; i<n; i++) {
        arr[i] = temp[i];
      }
    }
}
```

### Time Complexity:

- **O(n)** (Iterates through the array twice)

### Space Complexity:

- **O(n)** (Uses an extra array)

---

### Optimized - Two Pointer Approach

### Code:

```java
class Solution {
    public void reverse(int[] arr, int n) {
      int temp;
      int start = 0;
      int end = n-1;

      while(start < end) {
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
      }
    }
}
```

### Time Complexity:

- **O(n)** (Iterates through half of the array)

### Space Complexity:

- **O(1)** (Swaps elements in place)

---

## Check if the Array is Sorted

### Brute Force Approach

### Code:

```java
class Solution {
    boolean arraySortedOrNot(int[] arr, int n) {
       for(int i = 0; i< n; i++){
        for(int j=i+1; j<n; j++) {
          if(arr[i] > arr[j]) return false;
        }
       }
       return true;
    }
}
```

### Time Complexity:

- **O(n²)** (Compares every element with all later elements)

### Space Complexity:

- **O(1)** (No extra space used)

---

### Optimized Approach

### Code:

```java
class Solution {
  boolean arraySortedOrNot(int[] arr, int n) {
    for (int i = 1; i < n; i++) {
      if (arr[i] < arr[i - 1]) return false;
    }
    return true;
  }
}
```

### Time Complexity:

- **O(n)** (Iterates through the array once)

### Space Complexity:

- **O(1)** (No extra space used)
