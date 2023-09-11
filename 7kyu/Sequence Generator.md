# [Sequence Generator](https://www.codewars.com/kata/)

## Description

Implement function sequence, which returns new n-size Array filled according to pattern.

pattern may be:

- a function that takes two: (element, index), one: (element) or any arguments (similar to map function), then filled running this function, in other words: function describes sequence,
- number, string or any other object, then filled by copying, this object n-times.
  Examples:

```js
sequence(3, 4); // [4, 4, 4]
sequence(5, []); // [[], [], [], [], []]
sequence(2, 's'); // ["s", "s"]
sequence(5, (x, idx) => idx % 2); // [0, 1, 0, 1, 0];
sequence(10, (x, idx) => idx + 1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

Note: Sequences are great to work with functional methods like map, reduce, forEach, every or any. For example:

```js
// sum of numbers 1-10
let sum = sequence(10, (x, idx) => idx + 1).reduce((sum, num) => sum + num);
```

Be careful with long sequences. They are just arrays, every element is created when function is called.

For [lazy sequences](https://en.wikipedia.org/wiki/Lazy_evaluation) (elements created when needed) use Iterator.

## My Solution

**JavaScript**

```js
const sequence = (n, pattern) =>
  typeof pattern === 'function' ? Array.from({ length: n }, (v, i) => pattern(v, i)) : Array(n).fill(pattern);
```

```js
const sequence = (n, pattern) => {
  if (typeof pattern === 'function') {
    return Array.from({ length: n }, (v, i) => pattern(v, i));
  } else return Array(n).fill(pattern);
};
```

### User Solution

**JavaScript**

```js
function sequence(n, pattern) {
  return Array.from({ length: n }, typeof pattern === 'function' ? pattern : () => pattern);
}
```
