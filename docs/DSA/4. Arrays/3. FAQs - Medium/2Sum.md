# 2 Sum

## Problem

Given an array of integers nums and an integer target. Return the indices(0 - indexed) of two elements in nums such that they add up to target.

Each input will have exactly one solution, and the same element cannot be used twice. Return the answer in non-decreasing order.

### Examples

```
Input: nums = [1, 6, 2, 10, 3], target = 7

Output: [0, 1]

Explanation: nums[0] + nums[1] = 1 + 6 = 7
```

```
Input: nums = [1, 3, 5, -7, 6, -3], target = 0

Output: [1, 5]

Explanation: nums[1] + nums[5] = 3 + (-3) = 0
```

## Solution

```java
import java.util.*;

class Solution {
  public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> mp = new HashMap<>();

    for (int i = 0; i < nums.length; i++) {
      int complement = target - nums[i];

      // If the complement exists in the map, return its index and the current index
      if (mp.containsKey(complement)) {
        return new int[]{mp.get(complement), i};
      }

      // Store the current number and its index in the map
      mp.put(nums[i], i);
    }

    // Return empty array if no solution found (should never happen in a valid case)
    return new int[]{-1, -1};
  }
}
```
