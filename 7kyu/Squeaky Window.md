# [Squeaky Window](https://www.codewars.com/kata/55f8b5b09ec923860200000f)

## Description

Write

```js
function sliding(nums, k)
```

That given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

For example:

Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

```
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7      3
1 [3  -1  -3] 5  3  6  7       3
1  3 [-1  -3  5] 3  6  7       5
1  3  -1 [-3  5  3] 6  7       5
1  3  -1  -3 [5  3  6] 7       6
1  3  -1  -3  5 [3  6  7]      7
```

thus

```js
sliding([1, 3, -1, -3, 5, 3, 6, 7], 3) === [3, 3, 5, 5, 6, 7];
```

## My Solution

**JavaScript**

```js
const sliding = (nums, k) =>
  nums.length ? Array.from({ length: nums.length - k + 1 }, (_, i) => Math.max(...nums.slice(i, i + k))) : [];
```

```js
const sliding = (nums, k) => {
  const result = [];

  for (let i = 0; i < nums.length - k + 1; i++) result.push(Math.max(...nums.slice(i, i + k)));

  return nums.length ? result : [];
};
```
