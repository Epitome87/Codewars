# [Two Numbers in an Array Adding up to a Given Number](https://www.codewars.com/kata/58dace86b809ca6c62000ccf)

## Description

Given a sorted array of integer numbers `nums` and another integer number `sum`, write a function that returns true if there are two (distinct) numbers in `nums` that add up to `sum`. Return false otherwise.

**Input**

- `nums`: The array is guaranteed to be sorted and has at least two elements. All elements are integers.
- `sum`: An integer.

**Example**

- `A = [1,2,3,4], sum = 7` returns true, since 3+4=7.
- `A = [-1,2,7,15], sum = 12` returns false, since any combination of two integers in the array doesn't add up to 12.
- `A = [1,3,3], sum = 2` returns false. You cannot use 1 twice.

**Notes**

- Some arrays will have many elements (>100000). Therefore, please optimize your code.

## My Solution

**JavaScript**

```js
const hasPair = (nums, sum) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const localSum = nums[left] + nums[right];
    if (localSum === sum) return true;
    if (localSum < sum) left++;
    else right--;
  }

  return false;
};
```
