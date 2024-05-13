# [Implementing Array.prototype.groupBy Method](https://www.codewars.com/kata/53c2c3e78d298dddda000460)

## Description

Add a groupBy method to Array.prototype so that elements in an array could be grouped by the result of evaluating a function on each element.

The method should return an object, in which for each different value returned by the function there is a property whose value is the array of elements that return the same value.

If no function is passed, the element itself should be taken.

Example:

```js
[1,2,3,2,4,1,5,1,6].groupBy()
{
  1: [1, 1, 1],
  2: [2, 2],
  3: [3],
  4: [4],
  5: [5],
  6: [6]
}

[1,2,3,2,4,1,5,1,6].groupBy(function(val) { return val % 3;} )
{
  0: [3, 6],
  1: [1, 4, 1, 1],
  2: [2, 2, 5]
}
```

For more examples have a look at the example test cases

## My Solution

**JavaScript**

```js
Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, cur) => ((v = fn ? fn(cur) : cur), (acc[v] = acc[v] || []).push(cur), acc), {});
};
```

```js
Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, cur) => ((v = fn ? fn(cur) : cur), (acc[v] = acc[v] ? [...acc[v], cur] : [cur]), acc), {});
};
```

```js
Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, cur) => {
    const value = fn ? fn(cur) : cur;
    if (acc[value]) acc[value].push(cur);
    else acc[value] = [cur];
    return acc;
  }, {});
};
```

```js
Array.prototype.groupBy = function (fn) {
  const result = {};

  for (let el of this) {
    const value = fn ? fn(el) : el;
    if (result[value]) result[value].push(el);
    else result[value] = [el];
  }

  return result;
};
```
