# [Complete Series](https://www.codewars.com/kata/580a4001d6df740d61000301)

## Description

You are given an array of non-negative integers, your task is to complete the series from 0 to the highest number in the array.

If the numbers in the sequence provided are not in order you should order them, but if a value repeats, then you must return a sequence with only one item, and the value of that item must be 0. like this:

```
inputs        outputs
[2,1]     ->  [0,1,2]
[1,4,4,6] ->  [0]
```

Notes: all numbers are positive integers.

This is set of example outputs based on the input sequence.

```
inputs        outputs
[0,1]   ->    [0,1]
[1,4,6] ->    [0,1,2,3,4,5,6]
[3,4,5] ->    [0,1,2,3,4,5]
[0,1,0] ->    [0]
```

## My Solution

**JavaScript**

```js
const completeSeries = (arr) => [...Array(1 + (new Set(arr).size === arr.length ? Math.max(...arr) : 0)).keys()];
```

```js
const completeSeries = (arr) =>
  Array.from({ length: 1 + (new Set(arr).size === arr.length ? Math.max(...arr) : 0) }, (_, i) => i);
```

### User Solution

**JavaScript**

```js
function completeSeries(arr) {
  return new Set(arr).size === arr.length ? [...Array(Math.max(...arr) + 1).keys()] : [0];
}
```

## Takeaways

1. Remember to make use of `Array.keys()` more, especially when we are creating a new array with values that are simply 0 to its length.
2. Also remember that `keys()` is not a property on any array! It only works with `Array(length)`. Something like `[0, 1, 2].keys()` would not work!
