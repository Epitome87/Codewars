# [Format With](https://www.codewars.com/kata/5892c13cd9f2a384d6000100)

## Description

Write

```js
String.prototype.formatWith = function () {};
```

that takes in a list of arguments and formats the string based off these arguments and indices.

For example:

```js
'Hello {0}'.formatWith('Codewars') === 'Hello Codewars';
'{0} + {0} = {1}'.formatWith('1', '2') === '1 + 1 = 2';
'Testing {1}'.formatWith('kata') === 'Testing {1}'; // there is no arguments at position 1
```

## My Solution

**JavaScript**

```js
String.prototype.formatWith = function (...arr) {
  return this.replace(/{\d}/g, (v) => arr[[...v][1]] || v);
};
```

### User Solution

**JavaScript**

```js
String.prototype.formatWith = function (...args) {
  return this.replace(/\{(\d+)\}/g, (s, n) => (n < args.length ? args[n] : s));
};
```
