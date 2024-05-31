# [Nice Array](https://www.codewars.com/kata/59b844528bcb7735560000a0)

## Description

A `Nice array` is defined to be an array where for every value `n` in the array, there is also an element `n - 1` or `n + 1` in the array.

examples:

```
[2, 10, 9, 3] is a nice array because

 2 =  3 - 1
10 =  9 + 1
 3 =  2 + 1
 9 = 10 - 1

[4, 2, 3] is a nice array because

4 = 3 + 1
2 = 3 - 1
3 = 2 + 1 (or 3 = 4 - 1)

[4, 2, 1] is a not a nice array because

for n = 4, there is neither n - 1 = 3 nor n + 1 = 5
```

Write a function named `isNice` / `IsNice` that returns `true` if its array argument is a Nice array, else `false`. An empty array is not considered nice.

## My Solution

**JavaScript**

```js
const isNice = (arr) => arr.length > 0 && arr.every((v) => arr.includes(v - 1) || arr.includes(v + 1));
```

```js
const isNice = (arr) => {
  const set = new Set(arr);
  for (let num of set) if (!set.has(num - 1) && !set.has(num + 1)) return false;
  return set.size > 0;
};
```

```js
const isNice = (arr) => {
  if (arr.length === 0) return false;
  const map = {};
  for (let val of arr) {
    map[val] = true;
  }
  return arr.every((n) => map[n + 1] || map[n - 1]);
};
```

**Python**

```py
def is_nice(arr):
    nums = set(arr)
    return len(nums) > 0 and all(map(lambda x: x - 1 in nums or x + 1 in nums, nums))
```

```py
def is_nice(arr):
    nums = set(arr)

    for num in nums:
        if not num - 1 in nums and not num + 1 in nums:
            return False

    return len(nums) > 0
```
