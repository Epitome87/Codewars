# [The Clockwise Spiral](https://www.codewars.com/kata/the-clockwise-spiral)

## Description

Do you know how to make a spiral? Let's test it!

Classic definition: A spiral is a curve which emanates from a central point, getting progressively farther away as it revolves around the point.

Your objective is to complete a function `createSpiral(N)` that receives an integer `N` and returns an `NxN` two-dimensional array with numbers `1` through `NxN` represented as a clockwise spiral.

Return an empty array if `N < 1` or `N` is not int / number

Examples:

`N = 3` `Output: [[1,2,3],[8,9,4],[7,6,5]]`

```
1    2    3
8    9    4
7    6    5
```

`N = 4` `Output: [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]`

```
1   2   3   4
12  13  14  5
11  16  15  6
10  9   8   7
```

`N = 5` `Output: [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]`

```
1   2   3   4   5
16  17  18  19  6
15  24  25  20  7
14  23  22  21  8
13  12  11  10  9
```

## My Solution

**JavaScript**

```js
const createSpiral = (n) => {
  if (!Number.isInteger(n)) return [];

  // Stores the traversal order of our spiral matrix
  const result = Array.from({ length: n }, () => Array(n).fill(0));

  // CONST helpers to grab matrix lengths
  const ROWS = n;
  const COLS = n;

  // 0-indexed to store current boundaries
  let left = 0;
  let right = COLS - 1;
  let top = 0;
  let bottom = ROWS - 1;

  // Keep track of current value
  let value = 1;

  // Perform the algorithm while our boundaries haven't completely enclosed together
  while (left <= right && top <= bottom) {
    // Iterate right, from left boundary to right boundary
    for (let col = left; col <= right; col++) {
      result[top][col] = value++;
    }
    // Shrink our top towards the bottom
    top++;

    // Iterate down
    for (let row = top; row <= bottom; row++) {
      result[row][right] = value++;
    }
    // Shrink our right wall toward left
    right--;

    // TRIPPING POINT: Check if we are still in bounds
    // We just changed our horizontal and vertical boundaries;
    // ensure they have not crossed their counterparts
    if (left > right || top > bottom) break;

    // Iterate left
    for (let col = right; col >= left; col--) {
      result[bottom][col] = value++;
    }
    // Shrink our bottom wall toward top
    bottom--;

    // Iterate up
    for (let row = bottom; row >= top; row--) {
      result[row][left] = value++;
    }
    // Shrink left toward right
    left++;
  }

  return result;
};
```

**Python**

```py
def create_spiral(n):
    if not isinstance(n, int): return []

    result = [[0] * n for _ in range(n)]

    left, top, right, bottom = 0, 0, n - 1, n - 1
    value  = 1

    while left <= right and top <= bottom:
        for col in range(left, right + 1):
            result[top][col] = value
            print('GOING RIGHT: TOP COL VALU', top, col, value)
            value += 1
        top += 1

        for row in range(top, bottom + 1):
            result[row][right] = value
            print('GOING DOWN: TOP COL VALU', top, col, value)
            value += 1
        right -= 1

        if left > right or top > bottom:
            break

        for col in range(right, left - 1, -1):
            result[bottom][col] = value
            print('GOING LEFT: TOP COL VALU', top, col, value)
            value += 1
        bottom -= 1

        for row in range(bottom, top - 1, -1):
            result[row][left] = value
            print('GOING UP: TOP COL VALU', top, col, value)
            value += 1
        left += 1

        print(result)

    return result
```

### User Solution

**Python**

```py
def createSpiral(n):
    if not isinstance(n,int) or n<1:
        return []
    seq = list(range(1,n**2))
    arr = [[n**2]]
    while seq:
        l = len(arr)
        arr = [seq[-l:]] + list(map(list, zip(*arr[::-1])))
        seq = seq[:-l]
    return arr
```
