# [Count the Number of Cubes with Paint On](https://www.codewars.com/kata/5763bb0af716cad8fb000580)

## Description

Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made. ![](https://i.imgur.com/36x8Fkv.png)

    Examples:
    If we cut the cube 2 times, the function should return 26
    If we cut the cube 4 times, the function should return 98

## My Solution

**JavaScript**

```js
const countSquares = (cuts) => (cuts === 0 ? 1 : 6 * cuts * cuts + 2);
```

```js
const countSquares = (cuts) => {
  if (!cuts) return 1;

  // Total number of cubes: (x + 1)^3
  // Number of blue cubes: (x - 1)^3
  // Number of cubes with >= 1 red squares: (x + 1)^3 - (x - 1)^3
  // => (x^3 + 3x^2 + 3x + 1) - (x^3 - 3x^2 + 3x - 1)
  // => 6x^2 + 2
  const totalCubes = Math.pow(cuts + 1, 3);
  const innerCubes = Math.pow(cuts - 1, 3);

  return totalCubes - innerCubes;
};
```

**Python**

```py
def count_squares(cuts):
    return 6 * cuts * cuts + 2 if cuts else 1
```
