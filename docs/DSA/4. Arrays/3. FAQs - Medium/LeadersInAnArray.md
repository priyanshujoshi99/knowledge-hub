# Leaders in an Array

## Problem

- Given an integer array nums, return a list of all the leaders in the array.

- A leader in an array is an element whose value is strictly greater than all elements to its right in the given array. The rightmost element is always a leader. The elements in the leader array must appear in the order they appear in the nums array.

### Examples

```
Input: nums = [1, 2, 5, 3, 1, 2]

Output: [5, 3, 2]

Explanation: 2 is the rightmost element, 3 is the largest element in the index range [3, 5], 5 is the largest element in the index range [2, 5]
```

```
Input: nums = [-3, 4, 5, 1, -4, -5]

Output: [5, 1, -4, -5]

Explanation: -5 is the rightmost element, -4 is the largest element in the index range [4, 5], 1 is the largest element in the index range [3, 5] and 5 is the largest element in the range [2, 5]
```

## Solution

```java
import java.util.*;

class Solution {
  public ArrayList<Integer> leaders(int[] nums) {
    ArrayList<Integer> ans = new ArrayList<>();

    if (nums.length == 0) return ans;

    int max = nums[nums.length - 1];
    ans.add(max);
    for (int i = nums.length - 2; i >= 0; i--) {
      if (nums[i] > max) {
        ans.add(nums[i]);
        max = nums[i];
      }
    }
    Collections.reverse(ans);
    return ans;
  }
}
```
