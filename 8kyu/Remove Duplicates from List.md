# [Remove Duplicates from List](https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118)

## Description

Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

Examples:

```
Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]
```

## My Solution

**JavaScript**

```js
const distinct = (a) => [...new Set(a)];
```

```js
const distinct = (arr) => arr.filter((n, idx) => idx === arr.indexOf(n));
```

**Python**

```py
def distinct(seq):
    result = []
    for item in seq:
        if item not in result:
            result.append(item)
    return result
```

### User Solution

**JavaScript**

```js
function distinct(a) {
  return Array.from(new Set(a));
}
```

**Python**

```py
def distinct(seq):
    return list(dict.fromkeys(seq))
```

```py
def distinct(seq):
    return sorted(set(seq), key = seq.index)
```
