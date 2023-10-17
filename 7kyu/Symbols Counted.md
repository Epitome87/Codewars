# [Symbols Counted](https://www.codewars.com/kata/59ddeeb2fc3c49186f00009c)

## Description

In this kata you will have to transform each string so that it contains count for every symbol it contains, starting from 2. The order of symbols should be preserved.

Example: abbreviation => a2b2revi2ton

## My Solution

**JavaScript**

```js
const transform = (s) => {
  const count = [...s].reduce((acc, cur) => ({ ...acc, [cur]: acc[cur] + 1 || 1 }), {});
  return Object.entries(count).reduce((acc, [k, v]) => acc + k + (v < 2 ? '' : v), '');
};
```

```js
const transform = (s) => {
  const count = [...s].reduce((acc, cur) => ({ ...acc, [cur]: acc[cur] + 1 || 1 }), {});

  let result = '';

  for (let [key, val] of Object.entries(count)) {
    result += key + (val < 2 ? '' : val);
  }

  return result;
};
```
