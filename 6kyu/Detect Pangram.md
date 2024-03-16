# [Detect Pangram](https://www.codewars.com/kata/545cedaa9943f7fe7b000048)

## Description

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

## My Solution

**JavaScript**

```js
const isPangram = (string) => 'abcdefghijklmnopqrstuvwxyz'.split('').every((c) => string.toLowerCase().includes(c));
```

```js
const isPangram = (string) => {
  for (let char of 'abcdefghijklmnopqrstuvwxyz') {
    if (!string.toLowerCase().includes(char)) return false;
  }

  return true;
};
```

```js
const isPangram = (string) =>
  'abcdefghijklmnopqrstuvwxyz'.split('').reduce((acc, cur) => acc && string.toLowerCase().includes(cur), true);
```

**Python**

```py
def is_pangram(s):
    for char in 'abcdefghijklmnopqrstuvwxyz':
        if char not in s.lower():
            return False
    return True
```
