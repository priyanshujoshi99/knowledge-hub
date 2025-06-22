# Dutch National Flag Algo

## Problem

Given an array nums consisting of only 0, 1, or 2. Sort the array in non-decreasing order. The sorting must be done in-place, without making a copy of the original array.

### Examples

```
Input: nums = [1, 0, 2, 1, 0]

Output: [0, 0, 1, 1, 2]

Explanation: The nums array in sorted order has 2 zeroes, 2 ones and 1 two
```

```
Input: nums = [0, 0, 1, 1, 1]

Output: [0, 0, 1, 1, 1]

Explanation: The nums array in sorted order has 2 zeroes, 3 ones and zero twos
```

## Solution

### Intuition

The optimal solution is a variation of the popular Dutch National flag algorithm.

This algorithm contains 3 pointers i.e. low, mid, and high, and 3 main rules.

- Index 0 to low -1 contains 0
- Index low to mid - 1 contains 1
- Index high +1 to sizeOfArray - 1 contains 2.

The middle part i.e. mid to high is the unsorted segment. So, this part is a mix of 0's, 1's and 2's. Follow the rules mentioned in approach and image below and sort the array.

### Code

```java
class Solution {
  public void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  public void sortZeroOneTwo(int[] nums) {
    int n = nums.length;
    int low = 0, mid = 0, high = n - 1;

    while (mid <= high) {
      if (nums[mid] == 0) {
        swap(nums, low, mid);
        low++;
        mid++;
      } else if (nums[mid] == 1) {
        mid++;
      } else {
        swap(nums, mid, high);
        high--;
      }
    }
  }
}
```
