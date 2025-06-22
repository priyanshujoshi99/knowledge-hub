# Rotate matrix by 90 degrees

## Problem

Given an N \* N 2D integer matrix, rotate the matrix by 90 degrees clockwise.

The rotation must be done in place, meaning the input 2D matrix must be modified directly.

### Examples

```
Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

Output: matrix = [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
```

```
Input: matrix = [[0, 1, 1, 2], [2, 0, 3, 1], [4, 5, 0, 5], [5, 6, 7, 0]]

Output: matrix = [[5, 4, 2, 0], [6, 5, 0, 1], [7, 0, 3, 1], [0, 5, 1, 2]]
```

## Solution

```java
class Solution {
    public void rotateMatrix(int[][] matrix) {
        int n = matrix.length;

        // Step 1: Transpose the matrix (convert rows to columns)
        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                // Swap matrix[i][j] and matrix[j][i]
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }

        // Step 2: Reverse each row to get the rotated matrix
        for (int i = 0; i < n; i++) {
            reverseRow(matrix[i]);
        }
    }

    private void reverseRow(int[] row) {
        int left = 0, right = row.length - 1;
        while (left < right) {
            int temp = row[left];
            row[left] = row[right];
            row[right] = temp;
            left++;
            right--;
        }
    }
}
```
