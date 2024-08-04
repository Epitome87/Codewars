# [Training JS #6: Basic Data Types - Boolean](https://www.codewars.com/kata/571f832f07363d295d001ba8)

## Description

Coding in function `trueOrFalse`, function accept 1 parameters: `val`, try to use the conditional statement if...else, if `val` value is false (val == false or it can convert to false), should return a string "false", if not, return a string "true".

## My Solution

**JavaScript**

```js
const trueOrFalse = (val) => (val ? 'true' : 'false');
```

```js
const trueOrFalse = (val) => Boolean(val).toString();
```
