# [Swap the Head and Tail](https://www.codewars.com/kata/5a34f087c5e28462d9000082)

## Description

You need to swap the head and the tail of the specified array:

the head (the first half) of array moves to the end, the tail (the second half) moves to the start. The middle element (if it exists) leaves on the same position.

Return new array.

For example:

```
   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
    \----/   \----/
     head     tail

   [ -1, 2 ]  => [ 2, -1 ]
   [ 1, 2, -3, 4, 5, 6, -7, 8 ]   =>  [ 5, 6, -7, 8, 1, 2, -3, 4 ]
```

## My Solution

**JavaScript**

```js
const swapHeadAndTail = (arr) => (
  (mid = arr.length / 2), [...arr.slice(-mid), ...arr.slice(mid, -mid), ...arr.slice(0, mid)]
);
```

```js
const swapHeadAndTail = (arr) => {
  const head = arr.slice(0, (arr.length / 2) ^ 0);
  const middle = arr.slice((arr.length / 2) ^ 0, Math.ceil(arr.length / 2));
  const tail = arr.slice(Math.ceil(arr.length / 2));
  return [...tail, ...middle, ...head];
};
```
