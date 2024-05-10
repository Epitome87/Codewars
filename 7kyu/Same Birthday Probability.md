# [Same Birthday Probability](https://www.codewars.com/kata/5419cf8939c5ef0d50000ef2)

## Description

Given n number of people in a room, calculate the probability that any two people in that room have the same birthday (assume 365 days every year = ignore leap year). Answers should be two decimals unless whole (0 or 1) eg 0.05

## My Solution

**JavaScript**

```js
const calculateProbability = (n) =>
  (1 - Array.from({ length: n }, (_, i) => 365 - i).reduce((acc, cur) => acc * (cur / 365), 1)).toFixed(2);
```

```js
const calculateProbability = (n) => {
  let odds = 1;
  for (let i = 364; i > 365 - n; i--) {
    odds *= i / 365;
  }

  return (1 - odds).toFixed(2);
};
```

**Python**

```py
from math import prod

def calculate_probability(n):
    return round(1 - prod((365 - i) / 365 for i in range(n)), 2)
```
