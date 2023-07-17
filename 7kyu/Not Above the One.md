# [Not Above the One!](https://www.codewars.com/kata/5b5097324a317afc740000fe)

## Description

**Task**

Implement a function which finds the numbers less than 2, and the indices of numbers greater than 1 in the given sequence, and returns them as a pair of sequences.

Return a nested array or a tuple depending on the language:

The first sequence being only the 1s and 0s from the original sequence.
The second sequence being the indexes of the elements greater than 1 in the original sequence.

**Examples**

```
[ 0, 1, 2, 1, 5, 6, 2, 1, 1, 0 ] => [ [ 0, 1, 1, 1, 1, 0 ], [ 2, 4, 5, 6 ] ]
```

## My Solution

**JavaScript**

```js
const binaryCleaner = (arr) =>
  arr.reduce(([a, b], curr, i) => (curr < 2 ? [[...a, curr], b] : [a, [...b, i]]), [[], []]);
```

```js
const binaryCleaner = (arr) =>
  arr.reduce(
    (acc, curr, idx) => {
      if (curr < 2) acc[0].push(curr);
      else acc[1].push(idx);
      return acc;
    },
    [[], []]
  );
```

```js
const binaryCleaner = (arr) => {
  const first = arr.filter((el) => el < 2);
  const second = arr.reduce((acc, curr, idx) => (curr > 1 ? [...acc, idx] : acc), []);
  return [first, second];
};
```

### User Solution

**JavaScript**

```js
function binaryCleaner(a) {
  let r = [[], []];
  a.map((x, i) => (x < 2 ? r[0].push(x) : r[1].push(i)));
  return r;
}
```
