# [Excel Sheet Column Numbers](https://www.codewars.com/kata/55ee3ebff71e82a30000006a)

## Description

Write a function

titleToNumber(title) or title_to_number(title) or titleToNb title ...

(depending on the language)

that given a column title as it appears in an Excel sheet, returns its corresponding column number. All column titles will be uppercase.

**Examples:**

```
titleTonumber('A') === 1
titleTonumber('Z') === 26
titleTonumber('AA') === 27
```

```
Note for Clojure:
Don't use Java Math/pow (even with bigint) because there is a loss of precision
when the length of "title" is growing.
Write your own function "exp [x n]".
```

## My Solution

**JavaScript**

```js
const titleToNumber = (title) =>
  [...title].reduce((acc, curr) => acc * 26 + ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(curr), 0);
```

### User Solution

**JavaScript**

```js
const titleToNumber = (title) =>
  title
    .split('')
    .map((x) => x.charCodeAt(0) - 64)
    .reduce((acc, curr) => acc * 26 + curr, 0);
```
