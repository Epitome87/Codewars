# [Self-Descriptive Numbers](https://www.codewars.com/kata/56a628758f8d06b59800000f)

## Description

A number is self-descriptive when the n'th digit describes the amount n appears in the number.

Example:

For the number 21200:

- There are two 0's in the number, so the first digit is 2.
- There is one 1 in the number, so the second digit is 1.
- There are two 2's in the number, so the third digit is 2.
- There are no 3's in the number, so the fourth digit is 0.
- There are no 4's in the number, so the fifth digit is 0.

Numbers can be of any length up to 9 digits and are only full integers. For a given number, derive a function selfDescriptive(num) that returns:

- True if the number is self-descriptive
- False if the number is not.

## My Solution

**JavaScript**

```js
const selfDescriptive = (num) =>
  [...`${num}`].every((val, idx) => val == (`${num}`.match(new RegExp(idx, 'g')) || []).length);
```

### User Solution

**JavaScript**

```js
const selfDescriptive = (num) => [...`${num}`].every((val, idx, arr) => arr.filter((v) => v == idx).length == val);
```
