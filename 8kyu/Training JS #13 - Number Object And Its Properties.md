# [Training JS #13: Number Object and its Properties](https://www.codewars.com/kata/5722fd3ab7162a3a4500031f)

## Description

Coding in function `whatNumberIsIt`. function accept 1 parameter: `n`. it's a number.

To judge the number `n`. If `n` is one of the above five constants, return one of these string:

```
"Input number is Number.MAX_VALUE"
"Input number is Number.MIN_VALUE"
"Input number is Number.NaN"
"Input number is Number.NEGATIVE_INFINITY"
"Input number is Number.POSITIVE_INFINITY"
```

Other values should return `"Input number is xxx"`. xxx means this number.

For example:

```
whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
whatNumberIsIt(100) should return "Input number is 100"
```

What you need to think about is how to judge it correctly and effectively and don't forget isNaN().

## My Solution

**JavaScript**

```js
const whatNumberIsIt = (n) => {
  let res = n;

  if (n === Number.MAX_VALUE) res = 'Number.MAX_VALUE';
  else if (n === Number.MIN_VALUE) res = 'Number.MIN_VALUE';
  else if (Number.isNaN(n)) res = 'Number.NaN';
  else if (n === Number.NEGATIVE_INFINITY) res = 'Number.NEGATIVE_INFINITY';
  else if (n === Number.POSITIVE_INFINITY) res = 'Number.POSITIVE_INFINITY';

  return `Input number is ${res}`;
};
```

### User Solution

**JavaScript**

```js
function whatNumberIsIt(n) {
  const CHOICES = Object.getOwnPropertyNames(Number);
  let choice = CHOICES.filter((a) => n === Number[a]).join('');
  return `Input number is ${choice ? `Number.${choice}` : isNaN(n) ? 'Number.NaN' : n}`;
}
```
