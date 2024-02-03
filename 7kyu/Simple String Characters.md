# [Simple String Characters](https://www.codewars.com/kata/5a29a0898f27f2d9c9000058)

## Description

In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

```
Solve("*'&ABCDabcde12345") = [4,5,5,3].
--the order is: uppercase letters, lowercase, numbers and special characters.
```

More examples in the test cases.

## My Solution

**JavaScript**

```js
const solve = (s) => [/[A-Z]/g, /[a-z]/g, /\d/g, /[^a-z\d]/gi].map((x) => (s.match(x) || []).length);
```

```js
const solve = (s) => {
  const up = s.match(/[A-Z]/g);
  const low = s.match(/[a-z]/g);
  const num = s.match(/[0-9]/g);
  const spec = s.match(/[^0-9a-zA-Z]/g);

  return [up && up.length, low && low.length, num && num.length, spec && spec.length];
};
```
