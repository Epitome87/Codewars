# [Complete The Pattern #5 - Even Ladder](https://www.codewars.com/kata/55749101ae1cf7673800003e)

## Description

**Task:**

You have to write a function pattern which creates the following pattern up to n/2 number of lines.

If n <= 1 then it should return "" (i.e. empty string).
If any odd number is passed as argument then the pattern should last up to the largest even number which is smaller than the passed odd number.

**Examples:**

pattern(8):

```
22
4444
666666
88888888
```

pattern(5):

```
22
4444
```

Note: There are no spaces in the pattern

Hint: Use \n in string to jump to next line

## My Solution

**JavaScript**

```js
const pattern = (n) => Array.from({ length: n / 2 }, (_, i) => `${2 + 2 * i}`.repeat(2 + 2 * i)).join('\n');
```
