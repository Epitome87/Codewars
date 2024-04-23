# [N-th Power](https://www.codewars.com/kata/57d814e4950d8489720008db)

## Description

You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:

```
array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
```

## My Solution

**JavaScript**

```js
const index = (array, n) => array[n] ** n || -1;
```

```js
const index = (array, n) => (n >= array.length ? -1 : array[n] ** n);
```

**Python**

```py
def index(array, n):
    try:
        return array[n] ** n
    except IndexError:
        return -1
```
