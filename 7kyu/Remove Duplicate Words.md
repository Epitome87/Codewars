# [Remove Duplicate Words](https://www.codewars.com/kata/5b39e3772ae7545f650000fc)

Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'

## My Solution

**JavaScript**

```js
const removeDuplicateWords = (s) => [...new Set(s.split(' '))].join(' ');
```

```js
const removeDuplicateWords = (s) =>
  s
    .split(' ')
    .filter((v, i, arr) => arr.indexOf(v) === i)
    .join(' ');
```

**Python**

```py
def remove_duplicate_words(s):
    return ' '.join(list(dict.fromkeys(s.split(' '))))
```

### User Solution

**JavaScript**

```js
const removeDuplicateWords = (str) => str.replace(/\s(\w+)\b(?<=\b\1\b.*\1)/g, '');
```
