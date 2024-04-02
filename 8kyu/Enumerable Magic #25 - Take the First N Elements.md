# [Enumerable Magic #25 - Take the First N Elements](https://www.codewars.com/kata/545afd0761aa4c3055001386/)

## Description

Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

If you need help, here's a reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

## My Solution

**JavaScript**

```js
const take = (arr, n) => arr.slice(0, n);
```

**Python**

```py
def take(arr, n):
    return arr[:n]
```
