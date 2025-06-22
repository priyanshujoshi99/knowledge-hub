# Basic Recursion

## 1. Sum of First N Numbers

```java
class Solution {
    public int NnumbersSum(int N) {
        if(N == 0) return 0; // Base case
        return N + NnumbersSum(N-1); // Recursive case
    }
}
```

- **Time Complexity**: O(N)
  - The function makes N recursive calls, each reducing the problem size by 1.
- **Space Complexity**: O(N)
  - The recursion stack will have a depth of N.
- **Important Notes**:
  - Base case is crucial to avoid infinite recursion.
  - Tail recursion can be optimized by some compilers.

---

## 2. Factorial of a Given Number

```java
class Solution {
    public long factorial(int n) {
        if(n == 0) return 1; // Base case
        return n * factorial(n-1); // Recursive case
    }
}
```

- **Time Complexity**: O(N)
  - The function makes N recursive calls.
- **Space Complexity**: O(N)
  - The recursion stack will have a depth of N.
- **Important Notes**:
  - Factorial grows very quickly, so use `long` to avoid overflow.
  - Base case for `n == 0` is essential.

---

## 3. Sum of Array Elements

```java
class Solution {
    public int sum(int n, int[] nums) {
        if(n < 0) return 0; // Base case
        return nums[n] + sum(n-1, nums); // Recursive case
    }
    public int arraySum(int[] nums) {
        int n = nums.length - 1;
        return sum(n, nums);
    }
}
```

- **Time Complexity**: O(N)
  - The function processes each element once.
- **Space Complexity**: O(N)
  - The recursion stack will have a depth of N.
- **Important Notes**:
  - The helper function `sum` is used to handle the recursion.
  - Base case ensures the recursion stops when all elements are processed.

---

## 4. Reverse a String

```java
class Solution {
    private void reverse(Vector<Character> s, int left, int right) {
        if(left >= right) return; // Base case

        char temp = s.get(left);
        s.set(left, s.get(right));
        s.set(right, temp);

        reverse(s, left+1, right-1); // Recursive case
    }
    public Vector<Character> reverseString(Vector<Character> s) {
        int left = 0;
        int right = s.size() - 1;
        reverse(s, left, right);
        return s;
    }
}
```

- **Time Complexity**: O(N)
  - The function swaps N/2 elements.
- **Space Complexity**: O(N)
  - The recursion stack will have a depth of N/2.
- **Important Notes**:
  - The base case ensures the recursion stops when the pointers meet or cross.
  - Using two pointers (`left` and `right`) is a common technique for reversing.

---

## 5. Check if String is Palindrome

```java
class Solution {
    private boolean isPalindrome(String s, int left, int right) {
        if(left >= right) return true; // Base case

        if(s.charAt(left) != s.charAt(right)) return false;

        return isPalindrome(s, left+1, right-1); // Recursive case
    }
    public boolean palindromeCheck(String s) {
        int left = 0;
        int right = s.length() - 1;
        return isPalindrome(s, left, right);
    }
}
```

- **Time Complexity**: O(N)
  - The function checks each character pair once.
- **Space Complexity**: O(N)
  - The recursion stack will have a depth of N/2.
- **Important Notes**:
  - The base case ensures the recursion stops when the pointers meet or cross.
  - The function returns `false` as soon as a mismatch is found.

---

## 6. Check if a Number is Prime

```java
class Solution {
    private boolean isPrime(int num, int x) {
        if(x > Math.sqrt(num)) return true; // Base case

        if(num % x == 0) return false;

        return isPrime(num, x+1); // Recursive case
    }
    public boolean checkPrime(int num) {
        if(num <= 1) return false;
        return isPrime(num, 2);
    }
}
```

- **Time Complexity**: O(√N)
  - The function checks divisibility up to the square root of `num`.
- **Space Complexity**: O(√N)
  - The recursion stack will have a depth of √N.
- **Important Notes**:
  - The base case checks divisibility up to the square root of `num`.
  - Numbers less than or equal to 1 are not prime.

---

## 7. Reverse an Array

```java
class Solution {
    private void reverse(int[] nums, int left, int right) {
        if (left >= right) return; // Base case

        int temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;

        reverse(nums, left + 1, right - 1); // Recursive case
    }
    public int[] reverseArray(int[] nums) {
        int left = 0;
        int right = nums.length - 1;
        reverse(nums, left, right);
        return nums;
    }
}
```

- **Time Complexity**: O(N)
  - The function swaps N/2 elements.
- **Space Complexity**: O(N)
  - The recursion stack will have a depth of N/2.
- **Important Notes**:
  - The base case ensures the recursion stops when the pointers meet or cross.
  - Using two pointers (`left` and `right`) is a common technique for reversing.

---

## 8. Check if the Array is Sorted

```java
class Solution {
    private boolean checkSorted(ArrayList<Integer> nums, int left, int right) {
        if (right >= nums.size()) return true; // Base case

        if (nums.get(left) > nums.get(right)) return false;

        return checkSorted(nums, left + 1, right + 1); // Recursive case
    }
    public boolean isSorted(ArrayList<Integer> nums) {
        if (nums.size() <= 1) return true;
        return checkSorted(nums, 0, 1);
    }
}
```

- **Time Complexity**: O(N)
  - The function checks each pair of elements once.
- **Space Complexity**: O(N)
  - The recursion stack will have a depth of N.
- **Important Notes**:
  - The base case ensures the recursion stops when all elements are checked.
  - The function returns `false` as soon as an unsorted pair is found.

---

## 9. Sum of Digits in a Given Number

```java
class Solution {
    public int addDigits(int num) {
        if(num < 10) return num; // Base case

        int sum = 0;
        while(num > 0) {
            sum += num % 10;
            num /= 10;
        }

        return addDigits(sum); // Recursive case
    }
}
```

- **Time Complexity**: O(log N)
  - The function processes each digit of the number.
- **Space Complexity**: O(log N)
  - The recursion stack will have a depth proportional to the number of digits.
- **Important Notes**:
  - The base case ensures the recursion stops when the number is a single digit.
  - The function reduces the number to a single digit by summing its digits.

---

## 10. Fibonacci Number

```java
class Solution {
    public int fib(int n) {
        if(n==0) return 0; // Base case
        if(n==1) return 1; // Base case

        return fib(n-1) + fib(n-2); // Recursive case
    }
}
```

- **Time Complexity**: O(2^N)
  - The function makes two recursive calls for each Fibonacci number.
- **Space Complexity**: O(N)
  - The recursion stack will have a depth of N.
- **Important Notes**:
  - The base cases for `n == 0` and `n == 1` are essential.
  - This approach is inefficient due to repeated calculations; consider using memoization or dynamic programming for optimization.

---

### General Notes on Recursion:

- **Base Case**: Always define a base case to stop the recursion.
- **Recursive Case**: Ensure the problem size reduces with each recursive call.
- **Time Complexity**: Often depends on the number of recursive calls.
- **Space Complexity**: Depends on the depth of the recursion stack.
- **Optimization**: Tail recursion and memoization can optimize recursive solutions.

---
