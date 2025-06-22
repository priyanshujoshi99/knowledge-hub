# Rearrange array elements by sign

## Problem

Given an integer array nums of even length consisting of an equal number of positive and negative integers.Return the answer array in such a way that the given conditions are met:

- Every consecutive pair of integers have opposite signs.
- For all integers with the same sign, the order in which they were present in nums is preserved.
- The rearranged array begins with a positive integer.

### Examples

```
Input : nums = [2, 4, 5, -1, -3, -4]

Output : [2, -1, 4, -3, 5, -4]

Explanation: The positive number 2, 4, 5 maintain their relative positions and -1, -3, -4 maintain their relative positions
```

```
Input : nums = [1, -1, -3, -4, 2, 3]

Output : [1, -1, 2, -3, 3, -4]

Explanation: The positive number 1, 2, 3 maintain their relative positions and -1, -3, -4 maintain their relative positions
```

## Solution

```java
class Solution {
  public int[] rearrangeArray(int[] nums) {
    int n = nums.length;
    int posIndex = 0;
    int negIndex = 1;
    int[] ans = new int[n];

    for (int i = 0; i < n; i++) {
      if (nums[i] > 0){
        ans[posIndex] = nums[i];
        posIndex += 2;
      }
      else {
        ans[negIndex] = nums[i];
        negIndex += 2;
      }
    }

    return ans;
  }
}
```
