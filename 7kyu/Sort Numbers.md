# [Sort Numbers](https://www.codewars.com/kata/5174a4c0f2769dd8b1000003)

## Description

Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

```js
solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
```

## My Solution

**JavaScript**

```js
const solution = (nums) => (nums || []).sort((a, b) => a - b);
```

```js
const solution = (nums) => (nums ? nums.sort((a, b) => a - b) : []);
```

**Python**

```py
def solution(nums):
    return sorted(nums) if nums else []
```
