# [Offspring Traits](https://www.codewars.com/kata/5b011461de4c7f8d78000052)

## Description

A population of bears consists of black bears, brown bears, and white bears.

The input is an array of two elements.

Determine whether the offspring of the two bears will return 'black', 'brown', 'white', 'dark brown', 'grey', 'light brown', or 'unknown'.

Elements in the the array will always be a string.

Examples:

```
bear_fur(['black', 'black'])  returns 'black'

bear_fur(['brown', 'brown'])  returns 'brown'

bear_fur(['white', 'white'])  returns 'white'

bear_fur(['black', 'brown'])  returns 'dark brown'

bear_fur(['black', 'white'])  returns 'grey'

bear_fur(['brown', 'white'])  returns 'light brown'

bear_fur(['yellow', 'magenta'])  returns 'unknown'
```

## My Solution

**JavaScript**

```js
const bearFur = (bears) => {
  if (bears[0] === bears[1]) return bears[0];
  if (bears.includes('black') && bears.includes('brown')) return 'dark brown';
  if (bears.includes('black') && bears.includes('white')) return 'grey';
  if (bears.includes('brown') && bears.includes('white')) return 'light brown';
  return 'unknown';
};
```
