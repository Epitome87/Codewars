# [Finding Remainder Without Using '%' Operator](https://www.codewars.com/kata/564f458b4d75e24fc9000041)

## Description

**Task**

Write a method remainder which takes two integer arguments, dividend and divisor, and returns the remainder when dividend is divided by divisor. Do NOT use the modulus operator (%) to calculate the remainder!

**Assumption**

Dividend will always be greater than or equal to divisor.

**Notes**

Make sure that the implemented remainder function works exactly the same as the Modulus operator (%).

## My Solution

**JavaScript**

```js
const remainder = (dividend, divisor) => dividend - Math.floor(dividend / divisor) * divisor;
```

```js
const remainder = (dividend, divisor) => {
  const quotient = dividend / divisor;
  return dividend - divisor * Math.floor(quotient);
};
```

### User Solution

**JavaScript**

```js
function remainder(D, d) {
  while (D >= d) {
    D -= d;
  }
  return D;
}
```
