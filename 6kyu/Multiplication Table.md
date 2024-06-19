# [Multiplication Table](https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08)

## Description

Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given `size` is 3:

```
1 2 3
2 4 6
3 6 9
```

for given example, the return value should be:

```
[[1,2,3],[2,4,6],[3,6,9]]
```

## My Solution

**JavaScript**

```js
const multiplicationTable = (size) => [...Array(size)].map((_, i) => [...Array(size)].map((_, j) => (i + 1) * (j + 1)));
```

```js
const multiplicationTable = (size) => {
  const table = [];

  for (let r = 1; r <= size; r++) {
    const row = [];

    for (let c = 1; c <= size; c++) {
      row.push(r * c);
    }

    table.push(row);
  }

  return table;
};
```

**Python**

```py
def multiplication_table(size):
    return [[r * c for c in range(1, size + 1)] for r in range(1, size + 1)]
```

```py
def multiplication_table(size):
    table = []

    for r in range(1, size + 1):
        table.append([r * c for c in range(1, size + 1)])

    return table
```

## Takeaways

1. Sometimes creating an array from nothing (using Array.from() or Array(size).fill(value) can be difficult. Since Array(size) by itself creates a SPARSE ARRAY, and not one we can actually use .map on, we can spread that result in an array:
   [...Array(size).map()] -- very useful!
