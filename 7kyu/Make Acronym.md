# [Make Acronym](https://www.codewars.com/kata/57a60bad72292d3e93000a5a)

## Description

Write function which takes a string and make an acronym of it.

Rule of making acronym in this kata:

1. split string to words by space char
2. take every first letter from word in given string
3. uppercase it
4. join them toghether

Eg:

```
Code wars -> C, w -> C W -> CW
```

Note: There will be at least two words in the given string!

## My Solution

**JavaScript**

```js
const toAcronym = (str) => str.match(/\b\w/g).join('').toUpperCase();
```

```js
const toAcronym = (str) =>
  str
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('');
```

**Python**

```py
def to_acronym(str):
    return ''.join([word[0].capitalize() for word in str.split()])
```
