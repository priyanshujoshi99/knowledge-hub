# Second Largest Element

## Problem

- Given an array of integers nums, return the second-largest element in the array.
- If the second-largest element does not exist, return -1.

### Examples

```
Input: nums = [8, 8, 7, 6, 5]

Output: 7

Explanation: The largest value in nums is 8, the second largest is 7
```

```
Input: nums = [10, 10, 10, 10, 10]

Output: -1

Explanation: The only value in nums is 10, so there is no second largest value, thus -1 is returned
```

## Solution

```java
class Solution {
  public int secondLargestElement(int[] nums) {
    int max = Integer.MIN_VALUE;
    int ans = Integer.MIN_VALUE;
    for (int i = 0; i < nums.length; i++) {
      if (nums[i] > max) {
        ans = max;
        max = nums[i];
      } if(nums[i] > ans && nums[i] < max) {
        ans = nums[i];
      }
    }
    return ans == Integer.MIN_VALUE ? -1 : ans;
  }
}
```
