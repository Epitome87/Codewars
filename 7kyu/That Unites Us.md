# [That Unites Us](https://www.codewars.com/kata/5a3ddf58e1ce0e6f8f000030)

## Description

You have two arrays of single letters, `array1` and `array2`, where the elements are without duplicates(but the element of the first array can be equal to the element of the second array).

Return a new array containing the first `n` elements from the two arrays in alphabetical order.

For example:

```
thatUnitesUs(['a', 'z', 'c'], ['b', 'f', 'z'], 3) => ['a', 'b', 'c']
thatUnitesUs(['z', 'g', 'f'], ['g', 'f', 'c'], 3) => ['c', 'f', 'g']
thatUnitesUs(['f', 'g', 'z'], ['c', 'f', 'g'], 2) => ['c', 'f']
```

P.S. Array's length >= `n`

## My Solution

**JavaScript**

```js
const thatUnitesUs = (arr1, arr2, n) => [...new Set([...arr1, ...arr2])].sort().slice(0, n);
```
