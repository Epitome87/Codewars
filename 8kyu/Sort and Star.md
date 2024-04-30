# [Sort and Star](https://www.codewars.com/kata/57cfdf34902f6ba3d300001e)

## Description

You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have `"***"` between each of its letters.

You should not remove or add elements from/to the array.

## My Solution

**JavaScript**

```js
const twoSort = (s) => [...s.sort()[0]].join('***');
```

```js
const twoSort = (s) =>
  s
    .sort()[0]
    .split('')
    .map((char, index, arr) => (index === arr.length - 1 ? char : `${char}***`))
    .join('');
```

**Python**

```py
def two_sort(array):
    return '***'.join(sorted(array)[0])
```

### User Solution

**Python**

```py
def two_sort(lst):
    return '***'.join(min(lst))
```
