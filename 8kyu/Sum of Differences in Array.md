# [Sum of Differences in Array](https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e)

## Description

Your task is to sum the differences between consecutive pairs in the array in descending order.

**Example**

```
[2, 1, 10] --> 9
```

In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

## My Solution

**JavaScript**

```js
// My second-attempt solution:
const sumOfDifferences = (arr) => {
  if (!arr || arr.length < 2) return 0;
  const sorted = [...arr].sort((a, b) => b - a);
  return sorted[0] - sorted[sorted.length - 1];
};
```

```js
// My first-solution:
const sumOfDifferences = (arr) => {
  if (arr.length <= 1) return 0;

  const sorted = [...arr].sort((a, b) => b - a);
  const differences = sorted.map((n, i, arr) => n - arr[i + 1], 0).slice(0, -1);
  const sum = differences.reduce((acc, curr) => acc + curr, 0);

  return sum;
};
```

**TypeScript**

```ts
export const sumOfDifferences = (arr: number[]): number => {
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted.length ? sorted[sorted.length - 1] - sorted[0] : 0;
};
```

### User Solution

**JavaScript**

```js
// Very clever user solution:
function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
```

```js
// Good user solution, similar to mine:
const sumOfDifferences = (arr) =>
  arr
    .sort((a, b) => b - a)
    .map((a, i) => a - arr[i + 1] || 0)
    .reduce((a, b) => a + b, 0);
```

**TypeScript**

```ts
export function sumOfDifferences(xs: number[]): number {
  return (Math.max(...xs) - Math.min(...xs)) | 0;
}
```

## Takeaways

1. Always look for mathematical solutions!
   If you have the array [a,b,c] (already sorted in descending order), then the solution would be (a-b)+(b-c) = a-c+b-b = a-c.
   All elements other than the maximum and minimum get canceled out.

2. Taking the Math.max of an empty array produces -Infinity, while taking the Math.min of an empty array produces Infinity. The Bitwise OR operator used against -Infinity - Infinity (-Infinity) results in 0, thus we can avoid an if-else statement or the ternary operator.
