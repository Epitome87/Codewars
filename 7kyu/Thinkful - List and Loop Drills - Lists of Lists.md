# [Thinkful - List and Loop Drills: Lists of Lists](https://www.codewars.com/kata/586e1d458cb711f0a800033b)

## Description

You have a two-dimensional list in the following format:

```
data = [[2, 5], [3, 4], [8, 7]]
```

Each sub-list contains two items, and each item in the sub-lists is an integer.

Write a function process_data()/processData() that processes each sub-list like so:

- [2, 5] --> 2 - 5 --> -3
- [3, 4] --> 3 - 4 --> -1
- [8, 7] --> 8 - 7 --> 1

and then returns the product of all the processed sub-lists: `-3 * -1 * 1` --> `3`.

For input, you can trust that neither the main list nor the sublists will be empty.

## My Solution

**JavaScript**

```js
const processData = (data) => data.reduce((acc, [x, y]) => acc * (x - y), 1);
```

```js
const processData = (data) => data.map((x) => x[0] - x[1]).reduce((acc, curr) => acc * curr, 1);
```

**Python**

```py
from math import prod

def process_data(data):
    return prod([x[0] - x[1] for x in data])
```
