# [Sum a List but Ignore Any Duplicates](https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2)

## Description

Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.

## My Solution

**JavaScript**

```js
const sumNoDuplicates = (nums) =>
  nums.filter((n, _, arr) => arr.indexOf(n) === arr.lastIndexOf(n)).reduce((acc, curr) => acc + curr, 0);
```

**Python**

```py
def sum_no_duplicates(l):
    return sum([x for x in l if l.count(x) == 1])
```
