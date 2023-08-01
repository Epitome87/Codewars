# [Training JS #4: Basic Data Types - Array](https://www.codewars.com/kata/571effabb625ed9b0600107a)

## Description

I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

```
    1. getLength(arr)    should return length of arr
    2. getFirst(arr)     should return the first element of arr
    3. getLast(arr)      should return the last element of arr
    4. pushElement(arr)  should push an element to arr, and then return arr
    5. popElement(arr)   should pop an element from arr, and then return arr
```

## My Solution

**JavaScript**

```js
const getLength = (arr) => arr.length;
const getFirst = (arr) => arr[0];
const getLast = (arr) => arr[arr.length - 1];
const pushElement = (arr) => {
  arr.push(1);
  return arr;
};
const popElement = (arr) => {
  arr.pop();
  return arr;
};
```
