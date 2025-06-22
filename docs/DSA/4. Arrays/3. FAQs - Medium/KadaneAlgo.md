# Kadane's Algorithm

## Problem

Given an integer array nums, find the subarray with the largest sum and return the sum of the elements present in that subarray.

A subarray is a contiguous non-empty sequence of elements within an array.

### Examples

```
Input: nums = [2, 3, 5, -2, 7, -4]

Output: 15

Explanation: The subarray from index 0 to index 4 has the largest sum = 15
```

```
Input: nums = [-2, -3, -7, -2, -10, -4]

Output: -2

Explanation: The element on index 0 or index 3 make up the largest sum when taken as a subarray
```

## Solution

```java
class Solution {
  public int maxSubArray(int[] nums) {
    int sum = 0, maxSum = Integer.MIN_VALUE;
    // for getting the subarray
    int start = 0, ansStart= -1, ansEnd = -1;

    for (int i = 0; i < nums.length; i++) {
      if (sum == 0) start = i;

      sum += nums[i];

      if (sum > maxSum) {
        maxSum = sum;
        ansStart = start;
        ansEnd = i;
      }

      if (sum < 0) sum = 0;
    }

    return maxSum;
  }
}

```
