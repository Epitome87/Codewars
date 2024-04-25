# [Easy Mathematical Callback]()

## Description

Write the processArray function, which takes an array and a callback function as parameters. The callback function can be, for example, a mathematical function that will be applied on each element of this array. Optionally, also write tests similar to the examples below.

**Examples**

1. Array `[4, 8, 2, 7, 5]` after processing with function

```
function(a): return a*2;
```

will be `[ 8, 16, 4, 14, 10 ]`.

2. Array `[7, 8, 9, 1, 2]` after processing with function

```
function(a): return a+5;
```

will be `[ 12, 13, 14, 6, 7 ]`.

## My Solution

**JavaScript**

```js
const processArray = (arr, callback) => arr.map(callback);
```

```js
const processArray = (arr, callback) => {
  const res = [];
  for (let item of arr) {
    res.push(callback(item));
  }
  return res;
};
```

**Python**

```py
def process_array(arr, callback):
    return [callback(x) for x in arr]
```
