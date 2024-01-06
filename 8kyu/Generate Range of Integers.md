# [Generate Range of Integers](https://www.codewars.com/kata/55eca815d0d20962e1000106)

## Description

Implement a function named `generateRange(min, max, step)`, which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

**Examples**

```js
generateRange(2, 10, 2); // should return array of [2,4,6,8,10]
generateRange(1, 10, 3); // should return array of [1,4,7,10]
```

**Note**

- min < max
- step > 0

the range does not HAVE to include max (depending on the step)

## My Solution

**JavaScript**

```js
const generateRange = (min, max, step) =>
  Array.from({ length: Math.floor((max - min) / step) + 1 }, (_, i) => min + i * step);
```

```js
const generateRange = (min, max, step) => {
  const res = [];

  for (let i = min; i <= max; i += step) {
    res.push(i);
  }

  return res;
};
```

**Python**

```py
def generate_range(start, stop, step):
    return list(range(start, stop + 1, step))
```

### User Solution

**JavaScript**

```js
function generateRange(min, max, step) {
  return min > max ? [] : [min, ...generateRange(min + step, max, step)];
}
```

```js
// "Clever" user solution (though I don't like modifying the variable "min", as then it no longer has an appropriate name):
function generateRange(min, max, step) {
  for (var res = []; min <= max; min += step) res.push(min);
  return res;
}
```
