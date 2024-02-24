# [Training JS #21 - Methods of String Object - trim() and String Template]()

## Description

Coding in function `fiveLine`, function accept 1 parameter: `s`. `s` is a string.

Please return a string of 5 lines (newline symbol is `\n`). The first line has one s; Second line have two s; and so on..Fifth line have five s;

Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

Note2: Using a string template can make your job easier.

Example:

```
fiveLine("  a") should return "a\naa\naaa\naaaa\naaaaa"
a
aa
aaa
aaaa
aaaaa       <---The effect when you console.log it

fiveLine("  xy ")
should return "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
xy
xyxy
xyxyxy
xyxyxyxy
xyxyxyxyxy  <---The effect when you console.log it
```

## My Solution

**JavaScript**

```js
const fiveLine = (s) => Array.from({ length: 5 }, (_, i) => s.trim().repeat(i + 1)).join('\n');
```

```js
const fiveLine = (s) => {
  const res = [];
  s = s.trim();
  for (let i = 1; i <= 5; i++) {
    res.push(s.repeat(i));
  }
  return res.join('\n');
};
```

### User Solution

**JavaScript**

```js
function fiveLine(s) {
  return [1, 2, 3, 4, 5].map((n) => s.trim().repeat(n)).join('\n');
}
```

## Takeaways:

1. For small-size arrays, consider just using array literals rather than Array.from (when appropriate).
