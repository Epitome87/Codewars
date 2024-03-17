# [Does Array x Contain All Values Within Array y?](https://www.codewars.com/kata/5143cc9694a24abcd2000001)

## Description

We want to extend the array class so that it provides a contains_all? method. This method will always assume that an array is passed in and will return true if all values in the passed in array are present within the current array.

For example:

```js
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
items.containsAll([1, 2, 3]);  =>  true
items.containsAll([1, 5, 13]);  =>  false // because 13 is not in the items array
```

## My Solution

**JavaScript**

```js
Array.prototype.containsAll = function (a) {
  return a.every((x) => this.includes(x));
};
```

```js
Object.defineProperty(Array.prototype, 'containsAll', {
  value: function containsAll(a) {
    return a.every((x) => this.includes(x));
  },
});
```

### User Solution

**JavaScaript**

```js
Object.defineProperty(Array.prototype, 'containsAll', {
  value: function containsAll(a) {
    let combine = new Set(this.concat(a));

    return combine.size == this.length;
  },
});
```
