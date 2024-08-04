# [Training JS #9: Loop Statement - while and do...while](https://www.codewars.com/kata/57216d4bcdd71175d6000560)

## Description

Complete function `padIt`, which accepts 2 parameters:

1. `str`: a string representing the string to pad. We will pad it with "`*`" symbols on its left side and on its right side.
2. `n`: a number indicating how many times to pad the string.

**Behaviour**

You need to write a loop statement within the function that loops `n` times. Each time through the loop it will add one `*` to `str`, alternating on which side it is padded: the first time will add a `*` to the left side of str, the second time will add a `*` to the right side, and so on.

Finally, return the padded string.

```js
const padIt = (str, n) => {
  let padding = 0;

  while (++padding <= n) {
    if (padding % 2) str = '*' + str;
    else str = str + '*';
  }

  return str;
};
```

### User Solution

```js
function padIt(str, n) {
  while (n > 0) {
    str = n-- % 2 ? '*' + str : str + '*';
  }
  return str;
}
```

```js
// "Clever" user solution (though the point of this Kata is to use loops!):
function padIt(str, n) {
  //while
  return '*'.repeat(Math.ceil(n / 2)) + str + '*'.repeat(Math.floor(n / 2));
}
```
