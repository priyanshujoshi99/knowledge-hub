# Basic Math

## Count Digits of a Number

### Brute Force Approach

```java
class Solution {
    public int countDigit(int n) {
        int noOfDigits = 0;
        if (n == 0) return 1;
        while (n > 0) {
            noOfDigits = noOfDigits + 1;
            n = n / 10;
        }
        return noOfDigits;
    }
}
```

#### Notes

- This approach iteratively divides `n` by 10 to count the number of digits.

#### Time Complexity

- O(log base 10 of n)

#### Space Complexity

- O(1) — Uses a constant amount of extra space.

---

### Optimized Approach

```java
class Solution {
    public int countDigits(int n) {
        int count = (int)(Math.log10(n) + 1);
        return count;
    }
}
```

#### Notes

- Uses logarithm base 10 to compute the number of digits directly.

#### Time Complexity

- O(1) — Uses a single mathematical operation.

#### Space Complexity

- O(1) — No extra space used.

---

## Reversing a Number

```java
class Solution {
  public int reverseNumber(int n) {
    int reversedNum = 0;
    while (n > 0) {
        reversedNum = (reversedNum * 10) + n % 10;
        n = n / 10;
    }
    return reversedNum;
  }
}
```

#### Notes

- Extracts digits using modulo (%) and reconstructs the number.

#### Time Complexity

- O(log base 10 of n) — Proportional to the number of digits.

#### Space Complexity

- O(1) — Uses only a few integer variables.

---

## Count Total Number of Divisors

### Brute Force Approach

```java
class Solution {
    public int countTotalNoOfDivisors(int n) {
        int count = 0;
        for (int i = 1; i <= n; i++) {
            if (n % i == 0) count++;
        }
        return count;
    }
}
```

#### Notes

- Iterates from 1 to n, checking divisibility.

#### Time Complexity

- O(n) — Checks each number up to n.

#### Space Complexity

- O(1)

---

### Optimized Approach

```java
class Solution {
    public int countTotalNoOfDivisors(int n) {
        int count = 0;
        for (int i = 1; i * i <= n; ++i) {
            if (n % i == 0) {
                count += 1;
                if (i != (n / i)) {
                    count += 1;
                }
            }
        }
        return count;
    }
}
```

#### Notes

- Iterates only up to square root of n, counting both i and n/i as divisors.

#### Time Complexity

- O(sqrt(n))

#### Space Complexity

- O(1)

---

## Greatest Common Divisor (GCD)

### Brute Force Approach

```java
class Solution {
    public int GCD(int n1, int n2) {
        int gcd = 1;
        int minOfN1N2 = Math.min(n1, n2);
        for (int i = 2; i <= minOfN1N2; i++) {
            if (n1 % i == 0 && n2 % i == 0) gcd = i;
        }
        return gcd;
    }
}
```

#### Notes

- Checks all numbers up to min(n1, n2) to find the highest divisor.

#### Time Complexity

- O(min(n1, n2))

#### Space Complexity

- O(1)

---

### Optimized Approach

```java
class Solution {
    public int GCD(int n1, int n2) {
        int minOfN1N2 = Math.min(n1, n2);
        for (int i = minOfN1N2; i >= 2; i--) {
            if (n1 % i == 0 && n2 % i == 0) return i;
        }
        return 1;
    }
}
```

#### Notes

- Starts from min(n1, n2) and finds the first common divisor.

#### Time Complexity

- O(min(n1, n2))

#### Space Complexity

- O(1)

---

### Optimized Approach Using Euclidean Algorithm

```java
class Solution {
    public int GCD(int n1, int n2) {
       while (n1 != 0 && n2 != 0) {
        if (n1 > n2) n1 = n1 - n2;
        else n2 = n2 - n1;
       }
       return (n1 == 0) ? n2 : n1;
    }
}
```

#### Notes

- Uses subtraction-based Euclidean Algorithm.

#### Time Complexity

- O(max(n1, n2)) — Worst case.

#### Space Complexity

- O(1)

---

### Optimized Approach Using Euclidean Algorithm With Modulo

```java
class Solution {
    public int GCD(int n1, int n2) {
       while (n1 != 0 && n2 != 0) {
        if (n1 > n2) n1 = n1 % n2;
        else n2 = n2 % n1;
       }
       return (n1 == 0) ? n2 : n1;
    }
}
```

#### Notes

- Uses modulo-based Euclidean Algorithm, which is faster than subtraction.

#### Time Complexity

- O(log(max(n1, n2)))

#### Space Complexity

- O(1)

---

## Lowest Common Multiple (LCM)

### Brute Force Approach

```java
class Solution {
  public int LCM(int n1, int n2) {
    int i = 1;
    int max = Math.max(n1, n2);
    while (true) {
      int mul = i * max;
      if (mul % n1 == 0 && mul % n2 == 0) {
        return mul;
      }
      i++;
    }
  }
}
```

#### Notes

- Finds the smallest multiple of max(n1, n2) that is divisible by both.

#### Time Complexity

- O(n1 \* n2) in the worst case.

#### Space Complexity

- O(1)

---

### Optimized Approach Using GCD

```java
class Solution {
  public int GCD(int n1, int n2) {
    while (n1 != 0 && n2 != 0) {
      if (n1 > n2) n1 = n1 % n2;
      else n2 = n2 % n1;
    }
    return (n1 == 0) ? n2 : n1;
  }

  public int LCM(int n1, int n2) {
    return (n1 * n2) / GCD(n1, n2);
  }
}
```

#### Notes

- Uses the formula: LCM(a, b) = (a \* b) / GCD(a, b)

#### Time Complexity

- O(log(max(n1, n2)))

#### Space Complexity

- O(1)

```

```
