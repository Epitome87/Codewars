# [Regexp Basics - Is it All Whitespace?](https://www.codewars.com/kata/567de8823fa5eee02100002a)

## Description

Implement String#whitespace?(str) (Ruby), String.prototype.whitespace(str) (JavaScript), String::whitespace(str) (CoffeeScript), or whitespace(str) (Python), which should return true/True if given object consists exclusively of zero or more whitespace characters, false/False otherwise.

## My Solution

**JavaScript**

```js
String.prototype.whitespace = function () {
  return /^\s*$/.test(this);
};
```

```js
// Cheesy, non-RegExp way
String.prototype.whitespace = function () {
  return !this.trim();
};
```

### User Solution

**JavaScript**

```js
String.prototype.whitespace = function () {
  return !/\S/.test(this);
};
```
