# [Alternate Capitalization](https://www.codewars.com/kata/59cfc000aeb2844d16000075)

## Description

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index `0` will be considered even.

For example, `capitalize("abcdef") = ['AbCdEf', 'aBcDeF']`. See test cases for more examples.

The input will be a lowercase string with no spaces.

## My Solution

**JavaScript**

```js
const capitalize = (s) =>
  [...s].reduce(
    (acc, cur, idx) =>
      (idx + 1) % 2 ? [acc[0] + cur.toUpperCase(), acc[1] + cur] : [acc[0] + cur, acc[1] + cur.toUpperCase()],
    ['', '']
  );
```

**Python**

```py
def capitalize(s):
    even = ''.join(char if i % 2 else char.upper() for i, char in enumerate(s))
    odd = ''.join(char.upper() if i % 2 else char for i, char in enumerate(s))
    return [even, odd]
```

### User Solution

**JavaScript**

```js
function capitalize(s) {
  return [0, 1].map((r) => [...s].map((c, i) => (i % 2 === r ? c.toUpperCase() : c)).join(''));
}
```

**Python**

```py
def capitalize(s):
    s = ''.join(c if i%2 else c.upper() for i,c in enumerate(s))
    return [s, s.swapcase()]
```
