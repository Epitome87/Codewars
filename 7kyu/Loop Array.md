# [Loop Array](https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50)

## Description

Write a function loopArr that loops array in a specified direction by some number of steps.

By "looping array" it means removing elements from start and adding them to end of array one-by-one (if direction is "left") or removing from end and adding them to start one by-one (if direction is "right").

Function should accept three arguments:

- array - non-empty array of elements of any type;
- direction - 'left' or 'right' - tells how to loop array;
- steps - number of steps to loop array (less or equal to array size);

Examples:

1. loopArr([1, 5, 87, 45, 8, 8], 'left', 2);

should produce result: [87, 45, 8, 8, 1, 5]

2. loopArr([1, 5, 87, 45, 8, 8], 'right', 2);

should produce result: [8, 8, 1, 5, 87, 45]

## My Solution

**JavaScript**

```js
const loopArr = (arr, direction, steps) => {
  let result = [...arr];
  for (let i = 0; i < steps; i++)
    result =
      direction === 'left' ? result.slice(1).concat(result.slice(0, 1)) : result.slice(-1).concat(result.slice(0, -1));
  return result;
};
```

```js
const loopArr = (arr, direction, steps) => {
  const result = [...arr];
  for (let i = 0; i < steps; i++) {
    const elementToRemove = direction === 'left' ? result.shift() : result.pop();
    direction === 'left' ? result.push(elementToRemove) : result.unshift(elementToRemove);
  }
  return result;
};
```

```js
const loopArr = (arr, direction, steps) => {
  if (direction === 'left') {
    const result = [...arr];
    for (let i = 0; i < steps; i++) {
      result.push(result.shift());
    }
    return result;
  }
  if (direction === 'right') {
    const result = [...arr];
    for (let i = 0; i < steps; i++) {
      result.unshift(result.pop());
    }
    return result;
  }
};
```

### User Solution

**JavaScript**

```js
function loopArr(arr, direction, steps) {
  const i = direction == 'left' ? steps : -steps;
  return arr.slice(i).concat(arr.slice(0, i));
}
```

```js
function loopArr(arr, direction, steps) {
  if (direction === 'right') {
    return arr.splice(-steps).concat(arr);
  } else {
    return arr.splice(steps).concat(arr);
  }
}
```

## Takeaways

1. I was so focused on the 'loop' aspect that I ignored the fact a loop was not actually necessary! Looking and evaluating each example input/output would have made this more obvious.
