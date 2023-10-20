# [Array of Twins](https://www.codewars.com/kata/58fdc60ed94f25a863000092)

## Description

You are given an array of numbers. Check if the array contains of pairs, i.e every number occurs exactly two times. If true, return true, otherwise false. Your solution should not modify the input array.

## My Solution

**JavaScript**

```js
const twins = (arr) =>
  Object.values(arr.reduce((acc, cur) => ({ ...acc, [cur]: acc[cur] + 1 || 1 }), {})).every((val) => val === 2);
```

```js
const twins = (arr) => {
  const count = arr.reduce((acc, cur) => ({ ...acc, [cur]: acc[cur] + 1 || 1 }), {});
  return Object.values(count).every((val) => val === 2);
};
```

### User Solution

**JavaScript**

```js
function twins(myArray) {
  return myArray.every((x) => myArray.filter((y) => x == y).length == 2);
}
```
