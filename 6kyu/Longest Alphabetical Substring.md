# [Longest Alphabetical Substring](https://www.codewars.com/kata/5a7f58c00025e917f30000f1)

## Description

Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.

## My Solution

**JavaScript**

```js
const longest = (str) => {
  let left = 0;
  let right = 1;
  let longestStr = str[0];

  while (right < str.length) {
    if (str[right] < str[right - 1]) left = right;
    else if (str.slice(left, right + 1).length > longestStr.length) longestStr = str.slice(left, right + 1);
    right++;
  }

  return longestStr;
};
```

```js
const longest = (str) => {
  let maxSize = 0;
  let maxStr = str[0];

  for (let i = 0; i < str.length; i++) {
    let size = 0;
    for (let j = i + 1; j < str.length; j++) {
      if (str[j] < str[j - 1]) {
        break;
      } else {
        size++;
        if (size > maxSize) {
          maxStr = str.slice(i, j + 1);
          maxSize = size;
        }
      }
    }
  }

  return maxStr;
};
```

### User Solution

**JavaScript**

```js
longest = (s) =>
  s.match(/a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*/g).reduce((a, b) => (a.length >= b.length ? a : b));
```

```js
const longest = (str) =>
  str
    .replace(/./g, (val, idx) => (val <= str[++idx] ? val : `${val} `))
    .split(` `)
    .reduce((pre, val) => (val.length > pre.length ? val : pre));
```

```js
function longest(str, max = '') {
  const current = [...str].reduce(
    (acc, char) => (char >= acc.slice(-1) ? acc + char : ((max = acc.length > max.length ? acc : max), char)),
    ''
  );
  return current.length > max.length ? current : max;
}
```
