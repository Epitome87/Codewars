# [Flick Switch](https://www.codewars.com/kata/64fbfe2618692c2018ebbddb)

## Description

Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

Examples

```
['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
```

Notes

- "flick" will always be given in lowercase.
- A list may contain multiple flicks.
- Switch the boolean value on the same element as the flick itself.

## My Solution

**JavaScript**

```js
const flickSwitch = (arr) => ((flick = true), arr.map((v) => (v === 'flick' ? (flick = !flick) : flick)));
```

```js
const flickSwitch = (arr) => {
  let flick = true;

  return arr.reduce((acc, cur) => {
    if (cur === 'flick') flick = !flick;
    return [...acc, flick];
  }, []);
};
```
