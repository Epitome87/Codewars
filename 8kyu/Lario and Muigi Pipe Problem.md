# [Lario and Muigi Pipe Problem](https://www.codewars.com/kata/56b29582461215098d00000f)

## Description

**Issue**

Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

**Task**

Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

**Example**

```js
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
```

## My Solution

**JavaScript**

```js
const pipeFix = (numbers) =>
  Array.from({ length: Math.max(...numbers) - Math.min(...numbers) + 1 }, (_, i) => Math.min(...numbers) + i);
```

**Python**

```py
pipe_fix = lambda nums: list(range(nums[0], max(nums) + 1))
```

```py
def pipe_fix(nums):
    max_value = max(nums)
    min_value = nums[0]
    return list(range(min_value, max_value + 1))
```
