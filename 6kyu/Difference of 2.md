# [Difference of 2](https://www.codewars.com/kata/5340298112fa30e786000688)

## Description

The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

The result array should be sorted in ascending order of values.

Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.

**Examples**

```
[1, 2, 3, 4]  should return [[1, 3], [2, 4]]

[4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

[1, 23, 3, 4, 7] should return [[1, 3]]

[4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]
```

## My Solution

**JavaScript**

```js
const twosDifference = (input) => {
  const sorted = [...input].sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = i + 1; j < sorted.length; j++) {
      const difference = sorted[j] - sorted[i];
      if (difference > 2) break;
      if (difference === 2) result.push([sorted[i], sorted[j]]);
    }
  }

  return result;
};
```


### User Solution

**JavaScript**

```js
function twosDifference(input){
  return input
   .sort(function(a, b){
     return a - b
   })
   .filter(function(a){
     return input.indexOf(a+2) != -1
   })
   .map(function(a){
     return [a, a+2]
   })
}
```