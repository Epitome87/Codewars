# [Largest Pair Sum in Array](https://www.codewars.com/kata/556196a6091a7e7f58000018)

## Description

Given a sequence of numbers, find the largest pair sum in the sequence.

For example

```
[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
```

Input sequence contains minimum two elements and every element is an integer.

## My Solution

**JavaScript**

```js
const largestPairSum = (numbers) =>
  [...numbers]
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((acc, curr) => acc + curr);
```

```js
function largestPairSum(numbers) {
  const [a, b] = numbers.sort((a, b) => b - a);
  return a + b;
}
```

**Python**

```py
def largest_pair_sum(numbers):
    return sum(sorted(numbers)[-2:])
```
