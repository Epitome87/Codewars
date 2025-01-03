# [Running Out of Space](https://www.codewars.com/kata/56576f82ab83ee8268000059)

## Description

Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.  
For example, running this function on the array `['i', 'have','no','space']` would produce `['i','ihave','ihaveno','ihavenospace']`

## My Solution

**JavaScript**

```js
const spacey = (arr) => arr.map((_, idx) => arr.slice(0, idx + 1).join(''));
```

```js
const spacey = (array) => {
  let string = '';
  return array.map((e) => (string += e));
};
```

**Python**

```py
def spacey(array):
    return [''.join(array[0:i+1]) for i in range(len(array))]
```
