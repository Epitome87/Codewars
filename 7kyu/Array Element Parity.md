# [Array Element Parity](https://www.codewars.com/kata/5a092d9e46d843b9db000064)

## Description

In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:

```
[1, -1, 2, -2, 3] => 3
```

3 has no matching negative appearance

```
[-3, 1, 2, 3, -1, -4, -2] => -4
```

-4 has no matching positive appearance

```
[1, -1, 2, -2, 3, 3] => 3
```

(the only-positive or only-negative integer may appear more than once)

## My Solution

**JavaScript**

```js
const solve = (arr) => [...new Set(arr)].reduce((acc, cur) => acc + cur, 0);
```

```js
const solve = (arr) => arr.find((v) => !arr.includes(-v));
```

```js
const solve = (arr) => {
  for (const num of arr) {
    if (!arr.includes(-num)) return num;
  }
};
```

**Python**

```py
def solve(arr):
    return sum(set(arr))
```
