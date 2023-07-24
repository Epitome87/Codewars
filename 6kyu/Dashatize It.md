# [Dashatize It](https://www.codewars.com/kata/58223370aef9fc03fd000071)

## Description

Given a variable n,

If n is an integer, Return a string with dash `'-'` marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string `"NaN"`.

Ex:

```
dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
```

## My Solution

**JavaScript**

```js
const dashatize = (num) =>
  [...`${Math.abs(num)}`].map((n, i, arr) => (i > 0 ? (+n % 2 || +arr[i - 1] % 2 ? `-${n}` : `${n}`) : n)).join('');
```

### User Solution

**JavaScript**

```js
function dashatize(num) {
  return isNaN(num)
    ? 'NaN'
    : num
        .toString()
        .match(/([13579]|[02468]+)/g)
        .join('-');
}
```
