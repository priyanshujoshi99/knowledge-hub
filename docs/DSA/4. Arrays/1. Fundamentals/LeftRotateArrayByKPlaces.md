# Left Rotate Array by K Places

## Problem

- Given an integer array nums and a non-negative integer k, rotate the array to the left by k steps.

### Examples:

```
Input: nums = [1, 2, 3, 4, 5, 6], k = 2

Output: nums = [3, 4, 5, 6, 1, 2]

Explanation: rotate 1 step to the left: [2, 3, 4, 5, 6, 1]
rotate 2 steps to the left: [3, 4, 5, 6, 1, 2]
```

```
Input: nums = [3, 4, 1, 5, 3, -5], k = 8

Output: nums = [1, 5, 3, -5, 3, 4]

Explanation: rotate 1 step to the left: [4, 1, 5, 3, -5, 3]
rotate 2 steps to the left: [1, 5, 3, -5, 3, 4]
rotate 3 steps to the left: [5, 3, -5, 3, 4, 1]
rotate 4 steps to the left: [3, -5, 3, 4, 1, 5]
rotate 5 steps to the left: [-5, 3, 4, 1, 5, 3]
rotate 6 steps to the left: [3, 4, 1, 5, 3, -5]
rotate 7 steps to the left: [4, 1, 5, 3, -5, 3]
rotate 8 steps to the left: [1, 5, 3, -5, 3, 4]
```

## Solution

```java
class Solution {
  public void rotateArray(int[] nums, int k) {
    int n = nums.length;
    k = k % n; // Handle cases where k > n
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
    reverse(nums, 0, n - 1);
  }

  private void reverse(int[] arr, int start, int end) {
    while (start < end) {
      int temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }
}
```
