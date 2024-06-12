# [Stanton Measure](https://www.codewars.com/kata/59a1cdde9f922b83ee00003b)

## Description

The `Stanton` measure of an array is computed as follows: count the number of occurrences for value `1` in the array. Let this count be `n`. The `Stanton` measure is the number of times that n appears in the array.

Write a function which takes an integer array and returns its `Stanton` measure.

Examples
The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.

The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.

## My Solution

**JavaScript**

```js
const stantonMeasure = (arr) => {
  const numOne = arr.filter((x) => x === 1).length;
  return arr.filter((x) => x === numOne).length;
};
```

**Python**

```py
def stanton_measure(arr):
    return arr.count(arr.count(1))
```
