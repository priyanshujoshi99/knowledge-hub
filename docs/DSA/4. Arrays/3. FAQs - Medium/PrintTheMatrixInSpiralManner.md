# Print the matrix in spiral manner

## Problem

Given an M \* N matrix, print the elements in a clockwise spiral manner. Return an array with the elements in the order of their appearance when printed in a spiral manner.

### Examples

```
Input: matrix = [[1, 2, 3], [4 ,5 ,6], [7, 8, 9]]

Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

Explanation: The elements in the spiral order are 1, 2, 3 -> 6, 9 -> 8, 7 -> 4, 5
```

```
Input: matrix = [[1, 2, 3, 4], [5, 6, 7, 8]]

Output: [1, 2, 3, 4, 8, 7, 6, 5]

Explanation: The elements in the spiral order are 1, 2, 3, 4 -> 8, 7, 6, 5
```

## Solution

```java
class Solution {
  public List<Integer> spiralOrder(int[][] matrix) {
    List<Integer> ans = new ArrayList<>();
    int rows = matrix.length;
    int columns = matrix[0].length;

    int left = 0;
    int right = columns - 1;
    int top = 0;
    int bottom = rows - 1;

    while (top <= bottom && left <= right) {
      for (int i = left; i <= right; i++) {
        ans.add(matrix[top][i]);
      }
      top++;

      for (int i = top; i <= bottom; i++) {
        ans.add(matrix[i][right]);
      }
      right--;

      if(top <= bottom) {
        for (int i = right; i >= left; i--) {
          ans.add(matrix[bottom][i]);
        }
        bottom--;
      }

      if(left <= right) {
        for (int i = bottom; i >= top; i--) {
          ans.add(matrix[i][left]);
        }
        left++;
      }
    }

    return ans;
  }
}
```
