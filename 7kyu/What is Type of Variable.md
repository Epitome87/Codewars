# [What is Type of Variable?](https://www.codewars.com/kata/57293671c98f77e84b000065)

## Description

Create a function to return true type of variable, i.e.

```js
type([]) == 'array';
type({}) == 'object';
type('') == 'string';
type(NaN) == 'number';
```

## My Solution

**JavaScript**

```js
const type = (value) => {
  if (Array.isArray(value)) return 'array';
  if (value instanceof Date) return 'date';
  if (value === null) return 'null';
  return typeof value;
};
```

### User Solution

**JavaScript**

```js
const type = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
```
