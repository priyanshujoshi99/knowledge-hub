# Intersection of two sorted arrays

## Problem

- Given two sorted arrays nums1 and nums2, return an array containing the intersection of these two arrays.

- The intersection of two arrays is an array where all values are present in both arrays.

### Examples

```
Input: nums1 = [1, 2, 2, 3, 5], nums2 = [1, 2, 7]

Output: [1, 2]

Explanation: The elements 1, 2 are the only elements present in both nums1 and nums2
```

```
Input: nums1 = [1, 2, 2, 3], nums2 = [4, 5, 7]

Output: []

Explanation: No elements appear in both nums1 and nums2
```

## Solution

```java
import java.util.*;

class Solution {
    public int[] intersectionArray(int[] nums1, int[] nums2) {
        Map<Integer, Integer> freqMap = new HashMap<>();
        int[] result = new int[1000];

        // Count occurrences of each element in nums1
        for (int num : nums1) {
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
        }

        // Check nums2 and track intersection
        for (int i=0; i < nums2.length; i++) {
            if (freqMap.containsKey(nums2[i]) && freqMap.get(nums2[i]) > 0) {
                result[i] = nums2[i];
                freqMap.put(num, freqMap.get(nums2[i]) - 1);  // Decrement count
            }
        }

        return result;
    }
}
```
