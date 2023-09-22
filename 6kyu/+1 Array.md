# [+1 Array](https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9)

## Description

Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

**Examples**

Valid arrays

[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]

Invalid arrays

[1, -9] is invalid because -9 is not a non-negative integer
[1, 2, 33] is invalid because 33 is not a single-digit integer

## My Solution

**JavaScript**

```js
const upArray = (arr) => {
  if (!arr || !arr.length) return null;
  if (arr.some((n) => n < 0 || n > 9)) return null;

  const plusOne = [...arr];

  for (let i = plusOne.length - 1; i >= 0; i--) {
    if (plusOne[i] !== 9) {
      plusOne[i] = plusOne[i] + 1;
      break;
    } else plusOne[i] = 0;
    if (i === 0) plusOne.unshift(1);
  }

  return plusOne;
};
```

### User Solution

**JavaScript**

```js
function upArray(arr) {
  if (arr.length == 0 || arr.some((e) => e < 0 || e > 9)) return null;

  let i = arr.length - 1;

  while (i >= 0 && arr[i] == 9) arr[i--] = 0;

  if (i < 0) arr.unshift(1);
  else arr[i]++;

  return arr;
}
```

```js
const upArray = (arr) =>
  !arr.length || arr.some((val) => val < 0 || val > 9)
    ? null
    : [...arr.join(``).replace(/(\d)(9*$)/, (_, $1, $2) => ++$1 + `0`.repeat($2.length))].map(Number);
```
