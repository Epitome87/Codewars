# [Find Multiples of a Number](https://www.codewars.com/kata/58ca658cc0d6401f2700045f)

## Description

In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.

## My Solution

**JavaScript**

```js
const findMultiples = (integer, limit) =>
  Array.from({ length: Math.floor(limit / integer) }, (_, i) => integer * (i + 1));
```

**Python**

```py
def find_multiples(integer, limit):
    return [v for v in range(integer, limit + 1, integer)]
```

### User Solution

**Python**

```py
def find_multiples(integer, limit):
    return list(range(integer, limit + 1, integer))
```

```py
# Only valid before Python 3.0
def find_multiples(integer, limit):
    return range(integer,limit + 1,integer)
```
