# [Moving Zeros to the End](https://www.codewars.com/kata/52597aa56021e91c93000cb0)

## Description

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

```js
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']); // returns[false,1,1,2,1,3,"a",0,0]
```

## User Solution

**JavaScript**

```js
const moveZeros = (arr) => [...arr.filter((x) => x !== 0), ...arr.filter((x) => x === 0)];
```

```js
const moveZeros = (arr) => {
  const noZeros = arr.filter((n) => n !== 0);
  const numZeros = arr.length - noZeros.length;
  const result = [...noZeros];

  for (let i = 0; i < numZeros; i++) result.push(0);

  return result;
};
```

**Python**

```py
def move_zeros(lst):
    return [x for x in lst if x != 0] + [x for x in lst if x == 0]
```
