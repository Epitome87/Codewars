# Description

**Task:**

You have to write a function pattern which creates the following pattern upto n number of rows. If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

**Examples:**

pattern(4):

```
1234
234
34
4
```

pattern(6):

```
123456
23456
3456
456
56
6
```

> Note: There are no blank spaces

> Hint: Use \n in string to jump to next line

## My Solution

**Original**

```js
const pattern = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(
      [...Array(n)]
        .map((el, idx) => idx + 1)
        .slice(i, n)
        .join('')
    );
  }
  return result.join('\n');
};
```

**One-Liner**

```js
const pattern = (n) =>
  Array.from({ length: n }, (_, i) =>
    [...Array(n)]
      .map((_, idx) => idx + 1)
      .slice(i, n)
      .join('')
  ).join('\n');
```

**Another One-Liner**

```js
const pattern = (n) =>
  Array.from({ length: n }, (_, i) => Array.from({ length: n - i }, (_, idx) => i + idx + 1).join('')).join('\n');
```

### Clever User Solution

```js
const pattern = (n, str = ``) =>
  [...Array(Math.max(0, n))]
    .map(() => (str = n-- + str))
    .reverse()
    .join(`\n`);
```
