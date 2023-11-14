# [Sorting Arrays...Wait, What?!](https://www.codewars.com/kata/56bac4c34537cf1e270005a1)

## Description

Sorting an array of positive integers

**Background**

You are a(n) novice/average/senior/professional/world-class (choose one) Computer Scientist and Web Developer who specialises in Javascript (choose the language of your choice). One day, while you were away, your naughty little brother fiddles with your computer and somehow manages to disable the sort() method for arrays!

**Task**

Being the developer that you are, you decide to fix the sort() method so that it works for any array consisting of only positive integers. You may use any algorithm you wish.

**Extension**

If you wish, you could also fix the sort() method for arrays such that it also works on String arrays (sorting them into alphabetical order) but please note that it is not required and will not be tested.

## My Solution

**JavaScript**

```js
Array.prototype.sort = function () {
  for (let i = 0; i < this.length; i++)
    for (let j = 1; j < this.length; j++) if (this[j] < this[j - 1]) [this[j], this[j - 1]] = [this[j - 1], this[j]];
  return this;
};
```

### User Solution

**JavaScript**

```js
Array.prototype.sort = function () {
  const min = Math.min(...this);
  this.splice(this.indexOf(min), 1);
  return this.length === 0 ? [min] : [min, ...this.sort()];
};
```

```js
Array.prototype.sort = function () {
  var _sort = (arr) =>
    arr.length <= 1
      ? arr
      : [].concat(
          _sort(arr.filter((a) => a < arr[0])),
          arr.filter((a) => a === arr[0]),
          _sort(arr.filter((a) => a > arr[0]))
        );
  return _sort(this);
};
```
