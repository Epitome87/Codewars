# [Global Estimates](https://www.codewars.com/kata/59aa2cccd0a5ffdfa000005b)

## Description

Lately, feature requests have been piling up and you need a way to make global estimates of the time it would take to implement them all. If you estimate feature A to take 4 to 6 hours to implement, and feature B to take 2 to 5 hours, then in the best case it will only take you 6 (4 + 2) hours to implement both features, and in the worst case it will take you 11 (6 + 5). In the average case, it will take you 8.5 hours.

To help you streamline the estimation process, write a function that returns a tuple (JS: array) of the global best case, average case and worst case given a tuple of tuples (JS: array of arrays) representing best case and worst case guesses.

For example,

```
estimates = ((1, 2), (3, 4))
global_estimate(estimates) == (4, 5, 6)
```

For example,

```
estimates = [[1, 2], [3, 4]]
globalEstimate(estimates) == [4, 5, 6]
```

Don't worry about rounding or invalid input.

## My Solution

**JavaScript**

```js
const globalEstimate = (estimates) => {
  const min = estimates.reduce((acc, cur) => acc + cur[0], 0);
  const max = estimates.reduce((acc, cur) => acc + cur[1], 0);
  const avg = (min + max) / 2;
  return [min, avg, max];
};
```

**Python**

```py
def global_estimate(estimates):
    min = sum(x[0] for x in estimates)
    max = sum(x[1] for x in estimates)
    avg = (min + max) / 2
    return (min, avg, max)
```

### User Solution

**Python**

```py
def global_estimate(estimates):
    x,y = map(sum, zip(*estimates))
    return (x, (x+y)/2, y)
```
