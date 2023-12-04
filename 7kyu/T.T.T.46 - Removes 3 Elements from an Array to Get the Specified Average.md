# [T.T.T.46: Removes 3 Elements from an Array to Get the Specified Average](https://www.codewars.com/kata/57bd659c9d9dcf01460002a0)

## Description

You are given an array arr(length>=3) that contains some positive integers, try to remove 3 elements let the average of array equals to a specified value average.

**Task**

Complete function remove3Elements() that accepts two arguments arr and average. return an array that contains three elements which should be removed. The order of the three elements is arranged according to the sequence of the original array, you should not sort them. If there are more than one combinations meet the conditions, select the element that the index is smaller in the original array. If you can't find the 3 elements that match the condition, return an empty array [].

**Example**

```
remove3Elements([1,2,3,4],1) should return [2,3,4]

remove3Elements([1,2,3,4,5,6],4) should return [1,2,6]

remove3Elements([6,5,4,3,2,1],4) should return [6,2,1]

remove3Elements([6,5,4,3,2,1],5) should return [3,2,1]

remove3Elements([6,5,4,3,2,1],7) should return []

remove3Elements([1,2,3],0) should return [1,2,3]

remove3Elements([1,2,3],1) should return []

remove3Elements([1,2,3,4,5,7,8,9,5,1,3,5,4,52,0],0) should return []
```

## My Solution

**JavaScript**

```js
const remove3Elements = (arr, average) => {
  if (arr.length === 3 && average) return [];

  const target = arr.reduce((acc, cur) => acc + cur, 0) - average * (arr.length - 3);

  for (let i = 0; i < arr.length - 2; i++)
    for (let j = i + 1; j < arr.length - 1; j++)
      for (let k = j + 1; k < arr.length; k++) if (arr[i] + arr[j] + arr[k] === target) return [arr[i], arr[j], arr[k]];

  return [];
};
```
