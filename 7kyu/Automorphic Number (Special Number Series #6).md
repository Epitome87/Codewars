# [Automorphic Number (Special Numbers Series #6)](https://www.codewars.com/kata/5a58d889880385c2f40000aa)

## Description

**Definition**

A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

**Task**

Given a number determine if it Automorphic or not .

## My Solution

**JavaScript**

```js
const automorphic = (n) => (`${n ** 2}`.endsWith(n) ? 'Automorphic' : 'Not!!');
```

```js
const automorphic = (n) =>
  String(Math.pow(n, 2)).slice(-1 * String(n).length) === String(n) ? 'Automorphic' : 'Not!!';
```
