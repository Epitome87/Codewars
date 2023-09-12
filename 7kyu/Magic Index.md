# [Magic Index](https://www.codewars.com/kata/57d5fed61a6282bf6f002a5f)

## Description

A magic index in an array A[1...n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.

```js
findMagic([-20, -10, 2, 10, 20]); // Returns 2
```

## My Solution

**JavaScript**

```js
const findMagic = (arr) => arr.find((el, idx) => idx === el) || -1;
```

### User Solution

**JavaScript**

```js
const findMagic = (arr) => arr.findIndex((i) => arr[i] === i);
```
