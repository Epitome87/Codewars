# [Simple Fun #264: Compare Two Integers](https://www.codewars.com/kata/59127598c0f53a738f0000e0)

## Description

**Task**

Compare two integers given as strings. 'less' if integer a < integer b, 'equal' if integer a = integer b, and 'greater' if integer a > integer b, where integer x is equal to integer represented by the string x.

**Input/Output**

[input] string a

A string representing a positive integer without leading zeroes.

1 ≤ a.length ≤ 50

[input] string b

A string representing a positive integer without leading zeroes.

1 ≤ b.length ≤ 50

[output] a string

'less' if integer a < integer b, 'equal' if integer a = integer b, and 'greater' if integer a > integer b, where integer x is equal to integer represented by the string x.

**Example**

For a = "12" and b = "13", the output should be "less";
For a = "875" and b = "799", the output should be "greater";
For a = "1000" and b = "1000", the output should be "equal".

## My Solution

**JavaScript**

```js
const compareIntegers = (a, b) => {
  if (a.length < b.length) return 'less';
  if (a.length > b.length) return 'greater';

  for (let i = 0; i < a.length; i++) {
    if (a[i] < b[i]) return 'less';
    if (b[i] < a[i]) return 'greater';
  }

  return 'equal';
};
```

### User Solution

**JavaScript**

```js
function compareIntegers(a, b) {
  return a.length > b.length ? 'greater' : a.length < b.length ? 'less' : a < b ? 'less' : a > b ? 'greater' : 'equal';
}
```
