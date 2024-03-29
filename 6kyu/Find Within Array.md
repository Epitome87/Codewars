# [Find Within Array](https://www.codewars.com/kata/51f082ba7297b8f07f000001)

## Description

We'll create a function that takes in two parameters:

- a sequence (length and types of items are irrelevant)
- a function (value, index) that will be called on members of the sequence and their index. The function will return either true or false.

Your function will iterate through the members of the sequence in order until the provided function returns true; at which point your function will return that item's index.

If the function given returns false for all members of the sequence, your function should return -1.

```js
var trueIfEven = function (value, index) {
  return value % 2 === 0;
};
findInArray([1, 3, 5, 6, 7], trueIfEven); // should === 3
```

## My Solution

**JavaScript**

```js
const findInArray = (array, iterator) => {
  for (let i = 0; i < array.length; i++) if (iterator(array[i], i)) return i;
  return -1;
};
```

```js
const findInArray = (array, iterator) => array.findIndex(iterator);
```

**Python**

```py
def find_in_array(seq, predicate):
    for idx, val in enumerate(seq):
        if predicate(val, idx):
            return idx
    return -1
```

### User Solution

**Python**

```py
def find_in_array(seq, predicate):
    return next((i for i,v in enumerate(seq) if predicate(v,i)), -1)
```
