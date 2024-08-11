# [Remove Exclamation Marks](https://www.codewars.com/kata/57a0885cbb9944e24c00008e)

## Description

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

## My Solution

**JavaScript**

```js
const removeExclamationMarks = (s) => s.replace(/!/gi, '');
```

```js
const removeExclamationMarks = (s) => s.replaceAll('!', '');
```

```js
const removeExclamationMarks = (s) => s.split('!').join('');
```

```js
const removeExclamationMarks = (s) =>
  s
    .split('')
    .map((c) => (c === '!' ? '' : c))
    .join('');
```

**Python**

```py
def remove_exclamation_marks(s):
    return s.replace('!', '')
```

```py
def remove_exclamation_marks(s):
    return ''.join(c for c in s if c != '!')
```
