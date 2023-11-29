# [Simple Fun #147: Find the Missing Tree](https://www.codewars.com/kata/58aa8698ae929e1c830001c7)

## Description

After a long night (work, play, study) you find yourself sleeping on a bench in a park. As you wake up and try to figure out what happened you start counting trees.

You notice there are different tree sizes but there's always one size which is unbalanced. For example there are 2 size 2, 2 size 1 and 1 size 3. (then the size 3 is unbalanced)

Given an array representing different tree sizes. Which one is the unbalanced size.

Notes:

````
There can be any number of sizes but one is always unbalanced
The unbalanced size is always one less than the other sizes
The array is not ordered (nor the trees)```

# Examples

 For `trees = [1,1,2,2,3]`, the result should be `3`.

 For `trees = [2,2,2,56,56,56,8,8]`, the result should be `8`.

 For `trees = [34,76,12,99,64,99,76,12,34]`, the result should be `64`.

# Input/Output


 - `[input]` integer array `trees`

  Array representing different tree sizes


 - `[output]` an integer

  The size of the missing tree.
````

## My Solution

**JavaScript**

```js
const findTheMissingTree = (trees) =>
  trees.reduce(
    (acc, cur) => ((count = trees.filter((v) => v === cur).length), count < acc[1] ? [cur, count] : acc),
    [0, Infinity]
  )[0];
```

```js
const findTheMissingTree = (trees) => {
  const count = trees.reduce((acc, cur) => ({ ...acc, [cur]: acc[cur] + 1 || 1 }), {});
  const minCount = Math.min(...Object.values(count));
  return +Object.keys(count).find((key) => count[key] === minCount);
};
```

```js
const findTheMissingTree = (trees) => {
  const counts = trees.map((a) => trees.filter((b) => a === b).length);
  return trees[counts.findIndex((v) => v === Math.min(...counts))];
};
```

### User Solution

**JavaScript**

```js
const findTheMissingTree = (trees) =>
  trees.map((n) => ({ n, c: trees.filter((x) => x === n).length })).sort((a, b) => a.c - b.c)[0].n;
```
