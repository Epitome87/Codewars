# [Lost Number in Number Sequence](https://www.codewars.com/kata/595aa94353e43a8746000120)

An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

- The starting array sequence is [1,2,3,4,5,6,7,8,9]
- The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
- Your function should return the int 5.

If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).

## My Solution

**JavaScript**

```js
const findDeletedNumber = (arr, mixArr) => arr.find((n) => !mixArr.includes(n)) || 0;
```

```js
const findDeletedNumber = (arr, mixArr) => {
  const missing = arr.filter((n) => !mixArr.includes(n));
  return missing.length > 0 ? missing[0] : 0;
};
```
