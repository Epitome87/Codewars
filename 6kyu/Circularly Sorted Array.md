# [Circularly Sorted Array](https://www.codewars.com/kata/544975fc18f47481ba00107b)

## Description

An array is **circularly sorted** if the elements are sorted in ascending order, but displaced, or rotated, by any number of steps.

Complete the function/method that determines if the given array of integers is circularly sorted.

**Examples**

These arrays are circularly sorted (true):

```
[2, 3, 4, 5, 0, 1]       -->  [0, 1] + [2, 3, 4, 5]
[4, 5, 6, 9, 1]          -->  [1] + [4, 5, 6, 9]
[10, 11, 6, 7, 9]        -->  [6, 7, 9] + [10, 11]
[1, 2, 3, 4, 5]          -->  [1, 2, 3, 4, 5]
[5, 7, 43, 987, -9, 0]   -->  [-9, 0] + [5, 7, 43, 987]
[1, 2, 3, 4, 1]          -->  [1] + [1, 2, 3, 4]
```

While these are not (false):

```
[4, 1, 2, 5]
[8, 7, 6, 5, 4, 3]
[6, 7, 4, 8]
[7, 6, 5, 4, 3, 2, 1]
```

## My Solution

**JavaScript**

```js
const isCircleSorted = (arr) => {
  for (let i = 1; i < arr.length; i++)
    if (arr[i] < arr[i - 1])
      return arr.slice(i).every((el, idx, a) => (idx ? el <= arr[0] && el >= a[idx - 1] : el <= arr[0]));
  return true;
};
```

### User Solution

**JavaScript**

```js
function isCircleSorted(arr) {
  let jumped = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[(i + 1) % arr.length]) {
      if (jumped) {
        return false;
      }
      jumped = true;
    }
  }
  return true;
}
```

```js
const isCircleSorted = (arr) => `${[...arr, ...arr]}`.includes(`${arr.sort((a, b) => a - b)}`);
```
