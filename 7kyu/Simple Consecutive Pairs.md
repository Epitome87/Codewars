# [Simple Consecutive Pairs](https://www.codewars.com/kata/5a3e1319b6486ac96f000049)

## Description

In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

```
pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3.
--the last digit has no pair, so we ignore.
```

## My Solution

**JavaScript**

```js
const pairs = (arr) => arr.reduce((acc, cur, idx) => acc + (idx % 2 === 0 && Math.abs(cur - arr[idx + 1]) === 1), 0);
```

```js
const pairs = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i += 2) {
    if (Math.abs(arr[i] - arr[i + 1]) === 1) count++;
  }

  return count;
};
```

**Python**

```py
def pairs(arr):
    return len([i for i in range(1, len(arr), 2) if abs(arr[i] - arr[i - 1]) == 1])
```

```py
def pairs(arr):
    result = 0

    for i in range(1, len(arr), 2):
        if abs(arr[i] - arr[i - 1]) == 1:
            result += 1

    return result
```

### User Solution

**Python**

```py
def pairs(arr):
    return sum(abs(a - b) == 1 for a, b in zip(arr[::2], arr[1::2]))
```
