# [Invert Values](https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad)

## Description

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

```
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
```

You can assume that all values are integers. Do not mutate the input array/list.

## My Solution

**JavaScript**

```js
const invert = (array) => array.map((num) => -num);
```

```js
const invert = (array) => array.map((num) => (num *= -1));
```

**Python**

```py
def invert(lst):
    return [-x for x in lst]
```

### User Solution

**Python**

```py
def invert(lst):
    return list(map(lambda x: -x, lst));
```
