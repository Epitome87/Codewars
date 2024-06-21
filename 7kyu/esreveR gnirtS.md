# [esreveR gnirtS](https://www.codewars.com/kata/52b74e0936d582d9210005ff)

## Description

Create a function called reverse for the String prototype that will allow the following functionality:

```js
'String'.reverse(); // => returns "gnirtS"
'Super awesome string'.reverse(); // => returns "gnirts emosewa repuS"
```

The reverse function should NOT modify the original string.

## My Solution

**JavaScript**

```js
String.prototype.reverse = function () {
  return [...this].reverse().join('');
};
```
