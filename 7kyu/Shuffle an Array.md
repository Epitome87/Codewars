# [Shuffle an Array](https://www.codewars.com/kata/566b51166f88d7560c00001a)

## Description

Write a function to shuffle an array.

Ex.:

```
Input: [1,2,3,4]
Output: [3,1,4,2]
```

Assume input is array.

Hint: Math.random()

http://devdocs.io/javascript/global_objects/math/random

## My Solution

**JavaScript**

```js
const shuffle = (arr) => {
  const usedIndices = {};
  const result = [];
  let randomIndex = null;

  for (let i = 0; i < arr.length; i++) {
    do randomIndex = Math.floor(Math.random() * arr.length);
    while (usedIndices[randomIndex]);
    result.push(arr[randomIndex]);
    usedIndices[randomIndex] = true;
  }

  return result;
};
```

### User Solution

**JavaScript**

```js
// This is called Fisher-Yates, and is the most ideal way to shuffle
function shuffle(array) {
  let m = array.length,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    [array[m], array[i]] = [array[i], array[m]];
  }
}
```

```js
// This is truly more random than the below solution
function shuffle(array) {
  var random = array.map(Math.random);
  array.sort(function (a, b) {
    return random[a] - random[b];
  });
}
```

```js
// Note: Apparently this is NOT GOOD! It is diagramed here: https://bost.ocks.org/mike/shuffle/compare.html and explained here: http://www.robweir.com/blog/2010/02/microsoft-random-browser-ballot.html
const shuffle = (arr) => arr.sort(() => 0.5 - Math.random());
```
