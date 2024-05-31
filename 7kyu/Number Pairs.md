# [Number Pairs](https://www.codewars.com/kata/563b1f55a5f2079dc100008a)

## Description

In this Kata the aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.

Note: Both arrays have the same dimensions.

Example:

```js
let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]
```

## My Solution

**JavaScript**

```js
const getLargerNumbers = (a, b) => a.map((v, i) => Math.max(v, b[i]));
```

```js
const getLargerNumbers = (a, b) => Array.from(a, (_, i) => Math.max(a[i], b[i]));
```

**Python**

```py
def get_larger_numbers(a, b):
    return [max(x) for x in zip(a, b)]
```

```py
def get_larger_numbers(a, b):
    return [max(a[i], b[i]) for i in range(len(a))]
```
