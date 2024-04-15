# [Sum it Continuously](https://www.codewars.com/kata/59b44d00bf10a439dd00006f)

## Description

Make a function "add" that will be able to sum elements of list continuously and return a new list of sums.

For example:

```
add [1,2,3,4,5] == [1, 3, 6, 10, 15], because it's calculated like
this : [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4, 1 + 2 + 3 + 4 + 5]
```

If you want to learn more see https://en.wikipedia.org/wiki/Prefix_sum

## My Solution

**JavaScript**

```js
const add = (arr) => arr.reduce((acc, cur) => [...acc, (acc.at(-1) || 0) + cur], []);
```

**Python**

```py
def add(lst):
    sum = 0
    return [(sum := sum + x) for x in lst]
```

```py
def add(lst):
    sum = 0
    result = []
    for i in range(len(lst)):
        sum += lst[i]
        result.append(sum)
    return result
```

### User Solution

**JavaScript**

```js
const add = (arr, temp = 0) => arr.map((x) => (temp += x));
```
