# [No Loops 1 - Small Enough?](https://www.codewars.com/kata/57cc4853fa9fc57a6a0002c2)

## Description

**No Loops Allowed**

You will be given an array (a) and a limit value (limit). You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.

Do not use loops. Do not modify input array.

Looking for more, loop-restrained fun? Check out the other kata in the series:

https://www.codewars.com/kata/no-loops-2-you-only-need-one

https://www.codewars.com/kata/no-loops-3-copy-within

## My Solution

**JavaScript**

```js
const smallEnough = (arr, limit) => arr.every((n) => n <= limit);
```

**Python**

```py
def small_enough(a, limit):
    return len(list(filter(lambda x: x <= limit, a))) == len(a)
```

### User Solution

**Python**

```py
def small_enough(a, limit):
    return max(a) <= limit
```

```py
def small_enough(a, limit):
    return all(map(lambda x: x <= limit, a))
```
