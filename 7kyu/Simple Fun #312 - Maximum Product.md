# [Simple Fun #312: Maximum Product](https://www.codewars.com/kata/592e2446dc403b132d0000be)

## Description

**Task**

Given an integer array arr. Your task is to remove one element, maximize the product of elements.

The result is the element which should be removed. If more than one valid results exist, return the smallest one.

**Input/Output**

[input] integer array arr

non-empty unsorted integer array. It contains positive integer, negative integer or zero.

3 ≤ arr.length ≤ 15

-10 ≤ arr[i] ≤ 10

[output] an integer

The element that should be removed.

**Example**

For arr = [1, 2, 3], the output should be 1.  
For arr = [-1, 2, -3], the output should be 2.  
For arr = [-1, -2, -3], the output should be -1.  
For arr = [-1, -2, -3, -4], the output should be -4.

## My Solution

**JavaScript**

```js
const maximumProduct = (arr) => {
  let greatestProduct = -Infinity;
  let removedValue = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const product = arr.filter((_, idx) => idx !== i).reduce((acc, cur) => acc * cur, 1);
    if (product === greatestProduct && removedValue > arr[i]) removedValue = arr[i];
    if (product > greatestProduct) {
      removedValue = arr[i];
      greatestProduct = product;
    }
  }

  return removedValue;
};
```

### User Solution

**JavaScript**

```js
const maximumProduct = (a) =>
  a
    .map((x, i, a) => ({ val: x, prod: a.filter((el, idx) => idx !== i).reduce((a, b) => a * b) }))
    .sort((a, b) => b.prod - a.prod || a.val - b.val)
    .at().val;
```
