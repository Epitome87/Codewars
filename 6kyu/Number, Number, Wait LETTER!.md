# [Number, Number...Wait LETTER!](https://www.codewars.com/kata/5782dd86202c0e43410001f6)

## Description

Your task is to write a function that receives as its single argument a string that contains numbers delimited by single spaces. Each number has a single alphabet letter somewhere within it.

```
Example : "24z6 1x23 y369 89a 900b"
As shown above, this alphabet letter can appear anywhere within the number. You have to extract the letters and sort the numbers according to their corresponding letters.
```

```
Example : "24z6 1x23 y369 89a 900b" will become 89 900 123 369 246 (ordered according to the alphabet letter)
```

Here comes the difficult part, now you have to do a series of computations on the numbers you have extracted.

- The sequence of computations are + - \* /. Basic math rules do NOT apply, you have to do each computation in exactly this order.
- This has to work for any size of numbers sent in (after division, go back to addition, etc).
- In the case of duplicate alphabet letters, you have to arrange them according to the number that appeared first in the input string.
- Remember to also round the final answer to the nearest integer.

```
Examples:
"24z6 1x23 y369 89a 900b" = 89 + 900 - 123 * 369 / 246 = 1299
"24z6 1z23 y369 89z 900b" = 900 + 369 - 246 * 123 / 89 = 1414
"10a 90x 14b 78u 45a 7b 34y" = 10 + 45 - 14 * 7 / 78 + 90 - 34 = 60
```

## My Solution

**JavaScript**

```js
const doMath = (str) => (
  (ops = (x, y, i) => [x + y, x - y, x * y, x / y][i]),
  Math.round(
    str
      .split(' ')
      .sort((a, b) => a.match(/[a-z]/)[0].localeCompare(b.match(/[a-z]/)[0]))
      .map((el) => +el.replace(/[a-z]/, ''))
      .reduce((acc, cur, idx) => (idx === 0 ? cur : ops(acc, cur, --idx % 4)), 0)
  )
);
```

```js
const doMath = (str) => {
  const sorted = str.split(' ').sort((a, b) => a.match(/[a-z]/)[0].localeCompare(b.match(/[a-z]/gi)[0]));
  const onlyNums = sorted.map((el) => +el.replace(/[a-z]/, ''));
  return Math.round(
    onlyNums.slice(1).reduce((acc, cur, idx, arr) => {
      if (idx % 4 === 0) return acc + cur;
      if (idx % 4 === 1) return acc - cur;
      if (idx % 4 === 2) return acc * cur;
      if (idx % 4 === 3) return acc / cur;
    }, onlyNums[0])
  );
};
```

### User Solution

**JavaScript**

```js

```
