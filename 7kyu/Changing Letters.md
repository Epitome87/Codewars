# [Changing Letters](https://www.codewars.com/kata/5831c204a31721e2ae000294)

## Description

When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"
Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.

## My Solution

**JavaScript**

```js
const vowels = ['a', 'e', 'i', 'o', 'u'];
const swap = (s) =>
  s
    .split('')
    .map((x) => (vowels.includes(x) ? x.toUpperCase() : x))
    .join('');
```

```js
const swap = (string) => string.replace(/[aeiou]/gi, (v) => v.toUpperCase());
```

**Python**

```py
def swap(st):
    return ''.join([c.upper() if c in 'aeiou' else c for c in st])
```

### User Solution

**Python**

```py
def swap(st):
  tr = str.maketrans('aeiou', 'AEIOU')
  return st.translate(tr);
```
