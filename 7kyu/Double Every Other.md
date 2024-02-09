# [Double Every Other](https://www.codewars.com/kata/5809c661f15835266900010a)

## Description

Write a function that doubles every second integer in a list, starting from the left.

Example:

For input array/list:

```
[1,2,3,4]
```

the function should return:

```
[1,4,3,8]
```

## My Solution

**JavaScript**

```js
const doubleEveryOther = (a) => a.map((n, idx) => (idx % 2 ? 2 * n : n));
```

**Python**

```py
def double_every_other(lst):
    return [lst[i] * 2 if i % 2 else lst[i] for i in range(len(lst))]
```

### User Solution

**Python**

```py
def double_every_other(l):
    return [x * 2 if i % 2 else x for i, x in enumerate(l)]
```
