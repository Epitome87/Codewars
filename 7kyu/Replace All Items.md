# [Replace All Items](https://www.codewars.com/kata/57ae18c6e298a7a6d5000c7a)

## Description

Write function replaceAll (Python: replace_all) that will replace all occurrences of an item with another.

Python / JavaScript: The function has to work for strings and lists.

Example: replaceAll [1,2,2] 1 2 -> in list [1,2,2] we replace 1 with 2 to get new list [2,2,2]

```
replaceAll(replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]
```

## My Solution

**JavaScript**

```js
const replaceAll = (seq, find, replace) =>
  Array.isArray(seq) ? seq.map((item) => (item === find ? replace : item)) : seq.split(find).join(replace);
```

```js
const replaceAll = (seq, find, replace) => {
  const res = [...seq].map((el) => (el === find ? replace : el));
  return typeof seq === 'string' ? res.join('') : res;
};
```

**Python**

```py
def replace_all(obj, find, replace):
    result = [replace if item == find else item for item in obj]
    return result if isinstance(obj, list) else ''.join(result)
```

## Takeaways

1. Consider doing `String.split(find).join(replace)` rather than `String.replace(new RegEx(find, 'g'), replace)`.
