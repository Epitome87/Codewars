# [Complete The Pattern #6 - Odd Ladder](https://www.codewars.com/kata/5574940eae1cf7d520000076)

## Description

**Task**

You have to write a function pattern which creates the following pattern (see examples) up to the desired number of rows.

If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

If any even number is passed as argument then the pattern should last upto the largest odd number which is smaller than the passed even number.

**Examples**

pattern(9):

```
1
333
55555
7777777
999999999
```

pattern(6):

```
1
333
55555
```

Note: There are no spaces in the pattern

Hint: Use \n in string to jump to next line

## My Solution

**JavaScript**

```js
const pattern = (n) => Array.from({ length: (n + 1) / 2 }, (_, i) => `${i * 2 + 1}`.repeat(i * 2 + 1)).join('\n');
```

```js
const pattern = (n) => {
  const result = [];
  for (let i = 1; i < n + 1 / 2; i += 2) {
    result.push(i.toString().repeat(i));
  }
  return result.join('\n');
};
```

```js
const pattern = (n) => {
  let result = [];
  if (n % 2 === 0) n -= 1;
  while (n >= 1) {
    result.unshift(n.toString().repeat(n));
    n -= 2;
  }
  return result.join('\n');
};
```

### User Solution

**JavaScript**

```js
const pattern = (n) => Array.from({ length: (n + 1) / 2 }, (_, i) => (i = 2 * i + 1).toString().repeat(i)).join`\n`;
```

## Takeaways

1. I could have set i equal to 2 \* i + 1 and then reused it in the repeat function. Always look for ways to make the code more DRY!
