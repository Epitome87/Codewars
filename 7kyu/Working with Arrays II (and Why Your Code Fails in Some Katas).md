# [Working with Arrays II (and Why Your Code Fails in Some Katas)](https://www.codewars.com/kata/5a7b3d08fd5777bf6a000121)

## Description

In this kata the function returns an array/list like the one passed to it but with its nth element removed (with 0 <= n <= array/list.length - 1). The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.

Starting Kata code:

```js
function removeNthElement(arr, n) {
  // Fix it
  var arrCopy = arr;
  arrCopy.splice(n, 1); // removes the nth element
  return arrCopy;
}
```

## My Solution

**JavaScript**

```js
const removeNthElement = (arr, n) => {
  const arrCopy = [...arr];
  arrCopy.splice(n, 1);
  return arrCopy;
};
```
