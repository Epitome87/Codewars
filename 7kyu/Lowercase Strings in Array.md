# [Lowercase Strings in Array](https://www.codewars.com/kata/5729fa716c7d26dc84000040)

## Description

Create a function to lowercase all strings in an array. Non-string items should remain unchanged.

Example

```js
arrayLowerCase(['Red', 'Green']) == ['red', 'green'];
arrayLowerCase([1, 'Green']) == [1, 'green'];
```

## My Solution

**JavaScript**

```js
const arrayLowerCase = (arr) => arr.map((el) => (typeof el === 'string' ? el.toLowerCase() : el));
```

### User Solution

**JavaScript**

```js
const arrayLowerCase = (arr) => arr.map((val) => (val.toLowerCase ? val.toLowerCase() : val));
```
