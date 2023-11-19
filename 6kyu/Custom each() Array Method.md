# [Custom each() Array Method](https://www.codewars.com/kata/513e7e1aee7d36073e00000d)

## Description

JavaScript provides an Array.prototype.forEach method that allows you to iterate over array values. For this exercise you will create your own array method called 'each'. It will be similar to the forEach method, except for one difference. If the callback function returns true then the loop will stop and no additional values will be iterated.

The following shows a contrived example of how this new method would be used:

```js
var letters = ['a', 'b', 'c', 'd', 'e'];
var allowedLetters = [];
letters.each(function (letter, index) {
  // break out of the loop if we reached a letter with the value 'd'
  if (letter == 'd') {
    return true;
  }
  allowedLetters.push(letter);
});

// allowedLetters should equal ['a', 'b', 'c']
```

## My Solution

**JavaScript**

```js
Array.prototype.each = function (callbackFunc) {
  for (let i = 0; i < this.length; i++) {
    if (callbackFunc(this[i], i)) break;
  }
};
```

### User Solution

**JavaScript**

```js
Array.prototype.each = function (callback) {
  return this.some(callback);
};
```

```js
Array.prototype.each = Array.prototype.some;
```

```js
Array.prototype.each = [].some;
```
