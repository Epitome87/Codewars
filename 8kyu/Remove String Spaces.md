# [Remove String Spaces](https://www.codewars.com/kata/57eae20f5500ad98e50002c5)

## Description

Simple, remove the spaces from the string, then return the resultant string.

## My Solution

```js
const noSpace = (x) => x.replace(/\s/g, '');
```

```js
const noSpace = (x) => x.split(' ').join('');
```

**Python**

```py
def no_space(x):
    return x.replace(" ", "")
```
