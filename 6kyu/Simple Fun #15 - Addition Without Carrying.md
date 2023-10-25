# [Simple Fun #15: Addition Without Carrying](https://www.codewars.com/kata/588468f3b3d02cf67b0005cd)

## Description

**Task**

A little boy is studying arithmetics. He has just learned how to add two integers, written one below another, column by column. But he always forgets about the important part - carrying.

Given two integers, find the result which the little boy will get.

**Example**

For param1 = 456 and param2 = 1734, the output should be 1180

```
    456
   1734
+ ____
   1180
```

The little boy goes from right to left:

6 + 4 = 10 but the little boy forgets about 1 and just writes down 0 in the last column

5 + 3 = 8

4 + 7 = 11 but the little boy forgets about the leading 1 and just writes down 1 under 4 and 7.

There is no digit in the first number corresponding to the leading digit of the second one, so the little boy imagines that 0 is written before 456. Thus, he gets 0 + 1 = 1.

**Input/Output**

- [input] integer a

A non-negative integer.

Constraints: 0 ≤ a ≤ 99999.

- [input] integer b

A non-negative integer.

Constraints: 0 ≤ b ≤ 59999.

- [output] an integer

The result that the little boy will get.

## My Solution

**JavaScript**

```js
const additionWithoutCarrying = (a, b) => {
  const maxLength = Math.max(`${a}`.length, `${b}`.length);

  return +[...Array(maxLength)].reduce((acc, _, i) => {
    const c = ~~(a / 10 ** i) - ~~(a / 10 ** (i + 1)) * 10;
    const d = ~~(b / 10 ** i) - ~~(b / 10 ** (i + 1)) * 10;
    return `${(c + d) % 10}` + acc;
  }, '');
};
```

```js
const additionWithoutCarrying = (a, b) => {
  const maxLength = Math.max(`${a}`.length, `${b}`.length);
  const strA = `${a}`.padStart(maxLength, '0');
  const strB = `${b}`.padStart(maxLength, '0');

  return +[...Array(maxLength)].map((_, i) => `${(+strA[i] + +strB[i]) % 10}`).join('');
};
```

```js
const additionWithoutCarrying = (a, b) => {
  const maxLength = Math.max(`${a}`.length, `${b}`.length);
  const strA = `${a}`.padStart(maxLength, '0');
  const strB = `${b}`.padStart(maxLength, '0');
  let result = '';

  for (let i = 0; i < maxLength; i++) {
    result += `${(+strA[i] + +strB[i]) % 10}`;
  }

  return +result;
};
```

### User Solution

**JavaScript**

```js
function additionWithoutCarrying(a, b) {
  let res = '';

  while (a > 0 || b > 0) {
    res = (((a % 10) + (b % 10)) % 10) + res;

    a = Math.floor(a / 10);
    b = Math.floor(b / 10);
  }

  return +res;
}
```

```js
const additionWithoutCarrying = (a, b) =>
  +[...`${a}`.padStart(5)].map((val, idx) => (+val + +`${b}`.padStart(5)[idx]) % 10).join(``);
```

## Takeaways

1. Always read the constraints and other details carefully! If I had understood that the largest number given was 59,999, I could have saved calculating `maxLength`; rather, I could have hard-coded `5`.
