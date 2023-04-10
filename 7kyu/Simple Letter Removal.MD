# Simple Letter Removal

## Description

In this Kata, you will be given a lower case string and your task will be to remove k characters from that string using the following rule:

- first remove all letter 'a', followed by letter 'b', then 'c', etc...
- remove the leftmost character first.
  For example:
  solve('abracadabra', 1) = 'bracadabra' # remove the leftmost 'a'.
  solve('abracadabra', 2) = 'brcadabra' # remove 2 'a' from the left.
  solve('abracadabra', 6) = 'rcdbr' # remove 5 'a', remove 1 'b'
  solve('abracadabra', 8) = 'rdr'
  solve('abracadabra',50) = ''

## My solution

```js
const solve = (str, k) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let currentIndex = 0;

  for (let i = 0; i < k; i++) {
    while (!str.includes(alphabet[currentIndex]) && currentIndex < 26) currentIndex++;
    str = str.replace(alphabet[currentIndex], '');
  }

  return str;
};
```

### Clever User Solution

```js
const solve = (s, k) =>
  [...s]
    .sort()
    .slice(0, k)
    .reduce((pre, val) => pre.replace(val, ``), s);
```
