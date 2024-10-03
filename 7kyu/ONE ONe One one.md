# [ONE ONe One one](https://www.codewars.com/kata/588ac50727eb94c87700001f)

## Description

Write

```js
function consecutiveOnes(nums) {}
```

that takes in array `nums` and returns the maximum consecutive `1's`

For example

```js
consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]) === 3;
consecutiveOnes([1, 1, 0, 0, 1]) === 2;
consecutiveOnes([0, 0, 0, 0, 0]) === 0;
```

**PLEASE NOTE THAT THIS KATA HAS HEAVY PERFORMANCE TESTS AND YOU NEED OPTIMIZED CODE TO PASS IT**

## My Solution

**JavaScript**

```js
const consecutiveOnes = (nums) => {
  let max = 0;
  let count = 0;

  for (let num of nums) {
    if (num === 1) count++;
    else {
      max = Math.max(max, count);
      count = 0;
    }
  }

  return Math.max(max, count);
};
```

```js
// Note: Too slow to pass tests!:
const consecutiveOnes = (a) =>
  Math.max(
    ...a
      .join('')
      .split('0')
      .map((s) => s.length)
  );
```

### User Solution

**JavaScript**

```js
const consecutiveOnes = (nums, n = 0) => nums.reduce((acc, i) => (acc < (n = (n + 1) * i) ? n : acc), (n = 0));
```
