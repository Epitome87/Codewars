# [Right in the Centre](https://www.codewars.com/kata/5f5da7a415fbdc0001ae3c69)

## Description

This is inspired by one of Nick Parlante's exercises on the CodingBat online code practice tool.

Given a sequence of characters, does "abc" appear in the CENTER of the sequence?

The sequence of characters could contain more than one "abc".

To define CENTER, the number of characters in the sequence to the left and right of the "abc" (which is in the middle) must differ by at most one.

If it is in the CENTER, return True. Otherwise, return False.

Write a function as the solution for this problem. This kata looks simple, but it might not be easy.

**Example**

```
is_in_middle("AAabcBB")  ->  True
is_in_middle("AabcBB")   ->  True
is_in_middle("AabcBBB")  ->  False
```

## My Solution

**JavaScript**

```js
// Note: substr() is deprecated; would not use in production code.
const isInMiddle = (seq) =>
  seq.substr(Math.ceil((seq.length - 3) / 2), 3) === 'abc' || seq.substr(Math.floor((seq.length - 3) / 2), 3) === 'abc';

// Or:
const isInMiddle = (seq) => (
  (n = (seq.length - 3) / 2), seq.substr(Math.ceil(n), 3) === 'abc' || seq.substr(Math.floor(n), 3) === 'abc'
);
```

```js
const isInMiddle = (seq) => {
  const n = (seq.length - 3) / 2;
  if (seq.length % 2) {
    return seq.substr(n, 3) === 'abc';
  } else if (seq.length % 2 === 0) {
    return seq.substr(Math.ceil(n), 3) === 'abc' || seq.substr(Math.floor(n), 3) === 'abc';
  }
  return false;
};
```

### User Solution

**JavaScript**

```js
// 'Clever', but inefficient
const isInMiddle = (str) => (str.length <= 4 ? str.includes('abc') : isInMiddle(str.slice(1, -1)));
```

## Takeaways:

1. When using the comma-separated return syntax, I did not need to declare `n` using `const` or `let`. In fact doing so resulted in an error.
