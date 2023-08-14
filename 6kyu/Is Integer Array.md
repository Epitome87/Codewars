# [Is Integer Array?](https://www.codewars.com/kata/52a112d9488f506ae7000b95)

## Description

Write a function with the signature shown below:

```js
function isIntArray(arr) {
  return true;
}
```

- returns true / True if every element in an array is an integer or a float with no decimals.
- returns true / True if array is empty.
- returns false / False for every other input.

## My Solution

**JavaScript**

```js
const isIntArray = (arr) => (arr ? arr.every((el) => Number.isInteger(el)) : false);
```

```js
const isIntArray = (arr) => (arr || [null]).every((el) => Number.isInteger(el));
```

### User Solution

**JavaScript**

```js
let isIntArray = (arr) => !!arr && arr.every(Number.isInteger);
```
