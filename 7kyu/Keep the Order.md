# [Keep the Order](https://www.codewars.com/kata/582aafca2d44a4a4560000e7)

## Description

Task:

Your job here is to write a function (keepOrder in JS/CoffeeScript, keep_order in Ruby/Crystal/Python, keeporder in Julia), which takes a sorted array ary and a value val, and returns the lowest index where you could insert val to maintain the sorted-ness of the array. The input array will always be sorted in ascending order. It may contain duplicates.

Do not modify the input.

Some examples:

```
keepOrder([1, 2, 3, 4, 7], 5) //=> 4
                      ^(index 4)
keepOrder([1, 2, 3, 4, 7], 0) //=> 0
          ^(index 0)
keepOrder([1, 1, 2, 2, 2], 2) //=> 2
                ^(index 2)
```

## My Solution

**JavaScript**

```js
const keepOrder = (arr, val) => arr.filter((v) => v < val).length;
```

```js
const keepOrder = (arr, val) => {
  let idx = arr.findIndex((v) => val <= v);
  return idx < 0 ? arr.length : idx;
};
```

```js
const keepOrder = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (val <= arr[i]) return i;
  }
  return arr.length;
};
```

**Python**

```py
def keep_order(arr, val):
    return len(list(filter(lambda v: v < val, arr)))
```

```py
def keep_order(arr, val):
    return len(list(v for v in arr if v < val))
```
