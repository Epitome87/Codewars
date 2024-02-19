# [Is Every Value in the Array an Array?](https://www.codewars.com/kata/582c81d982a0a65424000201)

## Description

Is every value in the array an array?

This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

Examples:

```
[[1],[2]] => true
['1','2'] => false
[{1:1},{2:2}] => false
```

## My Solution

**JavaScript**

```js
const arrCheck = (value) => value.every(Array.isArray);
```

**Python**

```py
def arr_check(arr):
    return all(isinstance(x, list) for x in arr)
```
