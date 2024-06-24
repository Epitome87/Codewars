# [Even Numbers in an Array](https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c)

Given an `array` of numbers, return a new array of length `number` containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

```
([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
```

## My Solution

**JavaScript**

```js
const evenNumbers = (array, number) => array.filter((n) => n % 2 === 0).slice(-number);
```

**Python**

```py
def even_numbers(arr, n):
    return [x for x in arr if x % 2 == 0][-n:]
```
