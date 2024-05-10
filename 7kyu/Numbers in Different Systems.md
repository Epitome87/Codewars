# [Numbers in Different Systems](https://www.codewars.com/kata/588bb1195eb601f5d400001f)

## Description

Translate number to the selected number system. If the number consists just of digits - return number, else - return string.

```js
SysNums(5, 2); // 101
SysNums(5, 8); // 5
SysNums(250, 2); // 11111010
SysNums(250, 16); // "fa"
```

**Hint:** System can be 2, 8, 10, 16.

## My Solution

**JavaScript**

```js
const sysNums = (n, sys) => ((result = n.toString(sys)), isNaN(result) ? result : +result);
```

```js
const sysNums = (n, sys) => {
  const result = n.toString(sys);
  return isNaN(result) ? result : +result;
};
```
