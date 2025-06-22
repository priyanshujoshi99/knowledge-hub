# 3 Sum

## Problem

Given an integer array nums.Return all triplets such that:

- i != j, i != k, and j != k
- nums[i] + nums[j] + nums[k] == 0.

- Notice that the solution set must not contain duplicate triplets. One element can be a part of multiple triplets.
- The output and the triplets can be returned in any order.

### Examples

```
Input: nums = [2, -2, 0, 3, -3, 5]

Output: [[-2, 0, 2], [-3, -2, 5], [-3, 0, 3]]

Explanation: nums[1] + nums[2] + nums[0] = 0
nums[4] + nums[1] + nums[5] = 0
nums[4] + nums[2] + nums[3] = 0
```

```
Input: nums = [2, -1, -1, 3, -1]

Output: [[-1, -1, 2]]

Explanation: nums[1] + nums[2] + nums[0] = 0
Note that we have used two -1s as they are separate elements with different indexes
But we have not used the -1 at index 4 as that would create a duplicate triplet
```

## Solution

```java
class Solution {
  public List<List<Integer>> threeSum(int[] nums) {
    int n = nums.length;
    List<List<Integer>> ans = new ArrayList<>();

    Arrays.sort(nums);

    // Iterate through the array to find triplets
    for (int i = 0; i < n; i++) {
      // Skip duplicates
      if (i > 0 && nums[i] == nums[i - 1]) continue;

      int j = i + 1;
      int k = n - 1;

      while (j < k) {
        int sum = nums[i] + nums[j] + nums[k];

        if (sum < 0) {
          j++;
        } else if (sum > 0) {
          k--;
        } else {
          // Found a triplet that sums up to target
          List<Integer> temp = new ArrayList<>();
          temp.add(nums[i]);
          temp.add(nums[j]);
          temp.add(nums[k]);
          ans.add(temp);

          // Skip duplicates
          j++;
          k--;
          while (j < k && nums[j] == nums[j - 1]) j++;
          while (j < k && nums[k] == nums[k + 1]) k--;
        }
      }
    }
    return ans;
  }
}

```
