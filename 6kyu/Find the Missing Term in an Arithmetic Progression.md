# [Find the Missing Term in an Arithmetic Progression](https://www.codewars.com/kata/52de553ebb55d1fca3000371)

## Description

An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

**Example**

```js
findMissing([1, 3, 5, 9, 11]) == 7;
```

## My Solution

**JavaScript**

```js
const findMissing = (list) =>
  ((list.length + 1) / 2) * (list[0] + list[list.length - 1]) - list.reduce((acc, cur) => acc + cur, 0);
```

```js
const findMissing = (list) => {
  const delta = (list[list.length - 1] - list[0]) / list.length;
  return list.find((el, idx) => el !== idx * delta + list[0]) - delta;
};
```

```js
const findMissing = (list) => {
  const delta = (list[list.length - 1] - list[0]) / list.length;

  for (let i = 0; i < list.length; i++) {
    if (list[i + 1] - list[i] !== delta) return list[i] + delta;
  }
};
```

**Python**

```py
def find_missing(sequence):
    delta = (sequence[-1] - sequence[0]) / len(sequence)
    for i in range(len(sequence)):
        expected = sequence[i] + delta
        if sequence[i + 1] != expected:
            return expected
```

```py
def find_missing(sequence):
    return (sequence[0] + sequence[-1]) * (len(sequence) + 1) / 2 - sum(sequence)
```
