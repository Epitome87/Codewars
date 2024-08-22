# [Harry and the Mathematician's Chicken](https://www.codewars.com/kata/59d12056dcc405ac130000d3)

## Description

Harry's local chicken shop - The Golden Chick - sells chicken pieces in boxes of 3, 6 and 10.

Write a function that takes the total number of chicken pieces Harry can eat `(n)` and returns an array of the possible numbers of chicken pieces he can buy, that are less than or equal to n.

0 chicken pieces is a valid chicken option.

For example:

    chickenOptions(9)

should return `[0,3,6,9]`, as Harry can buy no boxes, a box of 3, a box of 6, or a box of 3 and a box of 6 (9 in total).

For non-numeric input, the function should return `[0]`.

## My Solution

**JavaScript**

```js
const chickenOptions = (n) => {
  if (typeof n !== 'number') return [0];
  const factors = new Set([0, 3, 6, 9, 10, 12, 13, 15, 16]);
  return [...Array(n + 1)].reduce((acc, _, i) => acc.concat(i >= 18 || factors.has(i) ? i : []), []);
};
```

```js
const chickenOptions = (n) => {
  if (typeof n !== 'number') return [0];

  const factors = new Set([0, 3, 6, 9, 10, 12, 13, 15, 16]);
  const result = [];

  for (let i = 0; i <= n; i++) if (i >= 18 || factors.has(i)) result.push(i);

  return result;
};
```
