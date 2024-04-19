# [WeIrD StRiNg CaSe](https://www.codewars.com/kata/52b757663a95b11b3d00062d)

## Description

Write a function `toWeirdCase` (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

**Examples:**

```
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
```

## Description

**JavaScript**

```js
const toWeirdCase = (str) =>
  str.replace(/\w{1,2}/g, (match) => `${match[0].toUpperCase()}${match.slice(1).toLowerCase()}`);
```

```js
const toWeirdCase = (string) =>
  string
    .split(' ')
    .map((w, i) =>
      w
        .split('')
        .map((c, i) => (i % 2 ? c.toLowerCase() : c.toUpperCase()))
        .join('')
    )
    .join(' ');
```

**Python**

```py
from re import sub

def to_weird_case(words):
    return sub(r"\w{1,2}", lambda match: match[0][0].upper() + match[0][1:].lower(), words)
```
