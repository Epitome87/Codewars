# [Dominant Array Elements](https://www.codewars.com/kata/5a04133e32b8b998dc000089)

## Description

An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

```
solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right.
solve([5,4,3,2,1]) = [5,4,3,2,1]

Notice that the last element is always included. All numbers will be greater than 0.
```

## My Solution

**JavaScript**

```js
const solve = (arr) => arr.filter((left, i) => arr.slice(i + 1).every((right) => left > right));
```

```js
const solve = (arr) => {
  let dominants = [arr[arr.length - 1]];
  let pointer = arr.length - 1;

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > arr[pointer]) {
      answer.unshift(arr[i]);
      pointer = i;
    }
  }

  return dominants;
};
```

**Python**

```py
def solve(arr):
    return [x for i, x in enumerate(arr) if all(x > y for y in arr[i+1:])]
```

### User Solution

**JavaScript**

```js
function solve(arr) {
  return arr.filter((n, i) => n > Math.max(...arr.slice(i + 1)));
}
```

**Python**

```py
def solve(arr):
    return [a for i,a in enumerate(arr) if a > max(arr[i+1:]+[0])]
```
