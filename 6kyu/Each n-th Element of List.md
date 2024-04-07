# [Each n-th Element of List](https://www.codewars.com/kata/5a077e8106d5b654b800004f)

## Description

In this task, you need to write a function `each`, that takes an integer number `n` and a ( possibly empty ) list of integers, and returns a list of every nth element of the input list ( which possibly is the empty list ).

If `n < 0`, count by abs n from the end of the list.
If `n == 0`, return an empty list.

**Examples**

```
each 0 [1,2,3,4,5,6] = []
each 1 [1,2,3,4,5,6] = [1,2,3,4,5,6]
each (-1) [1,2,3,4,5,6] = [6,5,4,3,2,1]
each 2 [1,2,3,4,5,6] = [2,4,6]
each (-2) [1,2,3,4,5,6] = [5,3,1]
each 3 [1,2] = []
each (-3) [1,2] = []
each 5 [1,2,3,4,5,6,7] = [5]
each (-5) [1,2,3,4,5,6,7] = [3]
```

## My Solution

**JavaScript**

```js
const each = (n, xs) => {
  const result = [];

  if (n < 0) {
    for (let i = xs.length + n; i >= 0; i += n) result.push(xs[i]);
  } else if (n > 0) {
    for (let i = n - 1; i < xs.length; i += n) result.push(xs[i]);
  }

  return result;
};
```

### User Solution

**JavaScript**

```js
function each(n, xs) {
  return n < 0 && xs.reverse(), xs.filter((_, i) => ++i % n < 1);
}
```

```js
function each(n, xs) {
  if (n === 0) return [];
  if (n === 1) return xs;
  if (n < 0) xs.reverse();
  if (n === -1) return xs;

  return xs.filter((el, i) => {
    return (i + 1) % Math.abs(n) === 0;
  });
}
```
