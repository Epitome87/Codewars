# [Sometimes](https://www.codewars.com/kata/555a77eb65dd419534000016)

## Description

**A function that works sometimes**

This kata is heavily influenced by the Once kata. It just adds a few extra steps to test fundamentals.

Implement a function `sometimes` that takes another function as an argument and returns a new version of that function that will behave as the following:

```js
// Example function that will be passed as an argument to sometimes
function add(a, b) {
  return a + b;
}

var s = sometimes(add);

// The first 3 times we call s it returns add's expected output
s(4, 6); // returns 10
s(3, 6); // returns 9
s(2, 6); // returns 8

// But the 4th time it returns a default message 'hmm, I don't know!'
s(1, 6); // returns 'hmm, I don't know!'

// Each consecutive odd call returns add's expected output
s(1, 5); // returns 6

// Each consecutive even call doesn't work and returns 'hmm, I don't know!'
s(1, 4); // returns 'hmm, I don't know!'
```

## My Solution

**JavaScript**

```js
const sometimes =
  (fn, callCount = 0) =>
  (...args) =>
    ++callCount < 3 || callCount % 2 ? fn(...args) : "hmm, I don't know!";
```

```js
const sometimes = (fn) => {
  let callCount = 0;

  return (...args) => {
    callCount++;
    if (callCount < 3 || callCount % 2) return fn(...args);
    return "hmm, I don't know!";
  };
};
```
