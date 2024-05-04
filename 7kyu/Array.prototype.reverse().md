# [Array.prototype.reverse()](https://www.codewars.com/kata/53b2ff49b82af296ce001139)

## Description

The Array's `reverse()` method has gone missing! Re-write it, quick-sharp!

When this method is called, it reverses the order of the items in the original array. Then then it returns that same, original array. No new arrays should need to be created to pass this kata.

Here's an example:

```js
var input = [1, 2, 3, 4];
input.reverse(); // == [4, 3, 2, 1] // returned by .reverse()
input; // == [4, 3, 2, 1] // items reordered in the original array
```

## My Solution

**JavaScript**

```js
Array.prototype.reverse = function () {
  for (let i = 0, j = this.length - i - 1; i < j; i++, j--) [this[i], this[j]] = [this[j], this[i]];
  return this;
};
```

```js
Array.prototype.reverse = function () {
  const length = this.length;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    const temp = this[i];
    this[i] = this[length - i - 1];
    this[length - i - 1] = temp;
  }

  return this;
};
```

### User Solution

**JavaScript**

```js
Array.prototype.reverse = function () {
  var arr = this.splice(0);

  while (arr.length) {
    this.push(arr.pop());
  }

  return this;
};
```
