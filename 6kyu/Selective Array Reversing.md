# [Selective Array Reversing](https://www.codewars.com/kata/58f6000bc0ec6451960000fd)

## Description

Given an array, return the reversed version of the array (a different kind of reverse though), you reverse portions of the array, you'll be given a length argument which represents the length of each portion you are to reverse.

E.g

```
selReverse([1,2,3,4,5,6], 2)
 //=> [2,1, 4,3, 6,5]
```

if after reversing some portions of the array and the length of the remaining portion in the array is not up to the length argument, just reverse them.

```
selReverse([2,4,6,8,10,12,14,16], 3)
 //=> [6,4,2, 12,10,8, 16,14]
```

`selReverse(array, length)`

- array - array to reverse
- length - length of each portion to reverse
- Note: if the length argument exceeds the array length, reverse all of them, if the length argument is zero do not reverse at all.

## My Solution

**JavaScript**

```js
const selReverse = (arr, length) => {
  if (length < 1) return arr;
  const result = [];
  for (let i = 0; i < arr.length; i += length) result.push(...arr.slice(i, i + length).reverse());
  return result;
};
```

```js
const selReverse = (arr, length) => {
  if (length === 0) return arr;
  const res = [];
  for (let i = 0; i < arr.length; i += length) {
    for (let j = length - 1; j >= 0; j--) {
      if (i + j < arr.length) res.push(arr[i + j]);
    }
  }
  return res;
};
```

**Python**

```py
def sel_reverse(arr,l):
    if l < 1: return arr

    result = []

    for i in range(0, len(arr), l):
        for x in reversed(arr[i:i+l]):
            result.append(x)

    return result
```

### User Solution

**JavaScript**

```js
const selReverse = (array, length) =>
  length === 0
    ? array
    : array.length >= 1
    ? array
        .slice(0, length)
        .reverse()
        .concat(selReverse(array.splice(length), length))
    : [];
```
