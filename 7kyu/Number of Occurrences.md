# [Number of Occurrences](https://www.codewars.com/kata/52829c5fe08baf7edc00122b)

## Description

Write a function that returns the number of occurrences of an element in an array.

This function will be defined as a property of Array with the help of the method Object.defineProperty, which allows to define a new method directly on the object (more info about that you can find on MDN).

**Examples**

```js
var arr = [0, 1, 2, 2, 3];
arr.numberOfOccurrences(0) === 1;
arr.numberOfOccurrences(4) === 0;
arr.numberOfOccurrences(2) === 2;
arr.numberOfOccurrences('a') === 0;
```

## My Solution

**JavaScript**

```js
Array.prototype.numberOfOccurrences = function (num) {
  return this.reduce((acc, cur) => acc + (cur === num), 0);
};
```

```js
Array.prototype.numberOfOccurrences = function (f) {
  return this.filter((i) => i === f).length;
};
```

```js
Array.prototype.numberOfOccurrences = function (num) {
  let occurrences = 0;
  for (let n of this) if (n === num) occurrences++;
  return occurrences;
};
```

**Python**

```py
def number_of_occurrences(element, sample):
    return sample.count(element)
```
