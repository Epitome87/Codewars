# [Sum of a Sequence](https://www.codewars.com/kata/586f6741c66d18c22800010a)

## Description

Your task is to make function, which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

If begin value is greater than the end, function should returns 0

**Examples**

```
2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
```

## My Solution

**JavaScript**

```js
const sequenceSum = (begin, end, step) => {
  let sum = 0;

  for (let i = begin; i <= end; i += step) {
    sum += i;
  }

  return sum;
};
```

**Python**

```py
def sequence_sum(begin_number, end_number, step):
    return sum(range(begin_number, end_number + 1, step))
```

### User Solution

**JavaScript**

```js
sequenceSum = (b, e, s) => (b > e ? 0 : b + sequenceSum(b + s, e, s));
```

```js
const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }
  return begin + sequenceSum(begin + step, end, step);
};
```
