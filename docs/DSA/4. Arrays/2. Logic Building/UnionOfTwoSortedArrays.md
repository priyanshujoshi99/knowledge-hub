# Union of two sorted arrays

## Problem

- Given two sorted arrays nums1 and nums2, return an array that contains the union of these two arrays. The elements in the union must be in ascending order.

- The union of two arrays is an array where all values are distinct and are present in either the first array, the second array, or both.

### Examples

```
Input: nums1 = [1, 2, 3, 4, 5], nums2 = [1, 2, 7]

Output: [1, 2, 3, 4, 5, 7]

Explanation: The elements 1, 2 are common to both, 3, 4, 5 are from nums1 and 7 is from nums2
```

```
Input: nums1 = [3, 4, 6, 7, 9, 9], nums2 = [1, 5, 7, 8, 8]

Output: [1, 3, 4, 5, 6, 7, 8, 9]

Explanation: The element 7 is common to both, 3, 4, 6, 9 are from nums1 and 1, 5, 8 is from nums2
```

## Solution

```java
import java.util.*;

class Solution {
    public int[] unionArray(int[] nums1, int[] nums2) {
        Set<Integer> set = new TreeSet<>();

        // Insert all elements of nums1 into the set
        for (int num : nums1) {
            set.add(num);
        }

        // Insert all elements of nums2 into the set
        for (int num : nums2) {
            set.add(num);
        }

        // Convert the set to an integer array to get the union
        int[] union = new int[set.size()];
        int index = 0;
        for (int num : set) {
            union[index++] = num;
        }

        return union;
    }
}
```
