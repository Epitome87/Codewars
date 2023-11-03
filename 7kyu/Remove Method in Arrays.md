# [Remove Method in Arrays](https://www.codewars.com/kata/565d76490397dcf0e700001e)

## Description

Some people really wonder why JavaScript arrays don't have a `remove` function to remove an element.

Go ahead and make one.

```js
var someArray = [1, 2, 3];
someArray.remove(1);
```

This should remove the element on index 1 making someArray = [1, 3]

You also need to handle invalid inputs: If index is not a number or out of bounds, return the array unchanged.

## My Solution

**JavaScript**

```js
Array.prototype.remove = function (index) {
  if (typeof index !== 'number' || index < 0 || index >= this.length) return this;
  this.splice(index, 1);
  return this;
};
```

### User Solution

**JavaScript**

```js
Array.prototype.remove = function (index) {
  if (typeof index == 'number' && index > 0) this.splice(index, 1);
  return this;
};
```
