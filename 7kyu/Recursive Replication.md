# [Recursive Replication](https://www.codewars.com/kata/57547f9182655569ab0008c4)

## Description

You need to design a `recursive` function called replicate which will receive arguments `times` and `number`.

The function should return an array containing repetitions of the `number` argument. For instance, `replicate(3, 5)` should return `[5,5,5]`. If the `times` argument is negative, return an empty array.

As tempting as it may seem, do not use loops to solve this problem.

## My Solution

**JavaScript**

```js
const replicate = (times, number) => (times < 1 ? [] : [number].concat(replicate(times - 1, number)));
```

```js
const replicate = (times, number) => (times < 0 ? [] : Array(times).fill(number));
```

**Python**

```py
def replicate(times, number):
    return [] if times < 1 else [number] + replicate(times - 1, number)
```

### User Solution

**JavaScript**

```js
function replicate(times, number) {
  return times > 0 ? [number, ...replicate(times - 1, number)] : [];
}
```
