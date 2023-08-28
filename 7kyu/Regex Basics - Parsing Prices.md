# [Regex Basics - Parsing Prices](https://www.codewars.com/kata/56833b76371e86f8b6000015)

## Description

Implement String#to_cents, which should parse prices expressed as $1.23 and return number of cents, or in case of bad format return nil.

## My Solution

**JavaScript**

```js
String.prototype.toCents = function () {
  if (!/^\$[0-9]+(\.[0-9]{2})$/.test(this)) return null;
  return +this.replace(/[^0-9]/g, '');
};
```

### User Solution

**JavaScript**

```js
String.prototype.toCents = function () {
  return /^\$\d+\.\d\d$/.test(this) ? +this.replace(/[$.]/g, '') : null;
};
```
