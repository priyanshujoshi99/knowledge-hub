# Move Zeros to End

## Problem

Given an integer array nums, move all the 0's to the end of the array. The relative order of the other elements must remain the same. This must be done in place, without making a copy of the array.

### Example

```
Input: nums = [0, 1, 4, 0, 5, 2]

Output: [1, 4, 5, 2, 0, 0]

Explanation: Both the zeroes are moved to the end and the order of the other elements stay the same
```

```
Input: nums = [0, 0, 0, 1, 3, -2]

Output: [1, 3, -2, 0, 0, 0]

Explanation: All 3 zeroes are moved to the end and the order of the other elements stay the same
```

## Solution

```java
class Solution {
  public void moveZeroes(int[] nums) {
    int j = 0;
    for (int i = 0; i < nums.length; i++) {
      if (nums[i] != 0) nums[j++] = nums[i];
    }

    while (j < nums.length) nums[j++] = 0;
  }
}
```
