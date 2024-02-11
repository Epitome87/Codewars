# [Return a Sorted List of Objects](https://www.codewars.com/kata/52705ed65de62b733f000064)

## Description

You'll be passed an array of objects (list) - you must sort them in descending order based on the value of the specified property (sortBy).

Example

When sorted by "a", this:

```js
[
  { a: 1, b: 3 },
  { a: 3, b: 2 },
  { a: 2, b: 40 },
  { a: 4, b: 12 },
];
```

should return:

```js
[
  { a: 4, b: 12 },
  { a: 3, b: 2 },
  { a: 2, b: 40 },
  { a: 1, b: 3 },
];
```

The values will always be numbers, and the properties will always exist.

## My Solution

**JavaScript**

```js
const sortList = (sortBy, list) => [...list].sort((a, b) => b[sortBy] - a[sortBy]);
```

**Python**

```py
def sort_list(sort_by, lst):
    return sorted(lst, reverse=True, key=lambda obj: obj[sort_by])
```
