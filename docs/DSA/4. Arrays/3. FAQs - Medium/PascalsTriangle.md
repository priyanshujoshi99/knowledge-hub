# Pascal's Triangle

## Problem

Given an integer numRows return the first numRows rows of Pascal's triangle.

In Pascal's triangle:

- The first row has one element with a value of 1.
- Each row has one more element in it than its previous row.
- The value of each element is equal to the sum of the elements directly above it when arranged in a triangle format.

### Examples

```
Input: numRows = 4

Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]

Explanation: 1st Row has its value set to 1.

All other cells take their value as the sum of the values directly above them
```

```
Input: numRows = 5

Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]

Explanation: 1st Row has its value set to 1.

All other cells take their value as the sum of the values directly above them
```

## Solution

```java
import java.util.*;

class Solution {
    /* Function to generate a single
    row of Pascal's Triangle*/
    private List<Integer> generateRow(int row) {
        long ans = 1;
        List<Integer> ansRow = new ArrayList<>();
        // Inserting the 1st element
        ansRow.add(1);

        // Calculate the rest of the elements
        for (int col = 1; col < row; col++) {
            ans = ans * (row - col);
            ans = ans / col;
            ansRow.add((int) ans);
        }
        return ansRow;
    }

    /* Function to generate Pascal's
    Triangle up to n rows*/
    public List<List<Integer>> pascalTriangle(int n) {
        List<List<Integer>> pascalTriangle = new ArrayList<>();

        // Store the entire Pascal's Triangle
        for (int row = 1; row <= n; row++) {
            pascalTriangle.add(generateRow(row));
        }

        // Return the Pascal's Triangle
        return pascalTriangle;
    }
}
```
