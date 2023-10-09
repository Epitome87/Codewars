# [Complete the Pattern #7 - Cyclical Permutation](https://www.codewars.com/kata/557592fcdfc2220bed000042)

## Description

You have to write a function pattern which creates the following pattern (See Examples) upto desired number of rows.

If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

Examples:
pattern(9):

```
123456789
234567891
345678912
456789123
567891234
678912345
789123456
891234567
912345678
```

pattern(5):

```
12345
23451
34512
45123
51234
```

Note: There are no spaces in the pattern

Hint: Use \n in string to jump to next line

## My Solution

**JavaScript**

```js
const pattern = (n) =>
  Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => ((i + j) % n) + 1).join('')).join('\n');
```

```js
const pattern = (n) =>
  n > 0 ? [...Array(n)].map((_, i) => [...Array(n)].map((_, j) => ((i + j) % n) + 1).join('')).join('\n') : '';
```
