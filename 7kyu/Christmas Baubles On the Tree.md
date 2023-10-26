# [Christmas Baubles On the Tree](https://www.codewars.com/kata/5856c5f7f37aeceaa100008e)

## Description

You've come to visit your grandma and she immediately found you a job - her Christmas tree needs decorating!

She first shows you a tree with a given number of branches, and then hands you some baubles (or loads of them!).

You know your grandma is a very particular person and that she'd like the baubles distributed in an orderly manner. You decide the best course of action would be to put the same number of baubles on each of the branches (if possible) or add one more bauble to some of the branches - starting from the beginning of the tree.

In this kata you will return an array of baubles on each of the branches.

For example:

10 baubles, 2 branches: [5,5] 5 baubles, 7 branches: [1,1,1,1,1,0,0] 12 baubles, 5 branches: [3,3,2,2,2]

The numbers of branches and baubles will always be greater or equal to 0. If there are 0 branches return: "Grandma, we will have to buy a Christmas tree first!".

Good luck - I think your granny may have some minced pies for you if you do a good job!

## My Solution

**JavaScript**

```js
const baublesOnTree = (baubles, branches) => {
  if (branches < 1) return 'Grandma, we will have to buy a Christmas tree first!';
  const floor = (baubles / branches) ^ 0;
  const ceil = Math.ceil(baubles / branches);
  return [...Array(branches)].map((el, idx) => (idx < baubles - branches * floor ? ceil : floor));
};
```

```js
const baublesOnTree = (baubles, branches) => {
  if (branches < 1) return 'Grandma, we will have to buy a Christmas tree first!';

  const floor = Math.floor(baubles / branches);
  const ceil = Math.ceil(baubles / branches);
  const result = Array(branches).fill(floor);

  for (let i = 0; i < baubles - branches * floor; i++) result[i] = ceil;

  return result;
};
```

### User Solution

**JavaScript**

```js
const baublesOnTree = (baubles, branches) =>
  branches
    ? [...Array(branches)].map(() => Math.ceil(baubles-- / branches))
    : `Grandma, we will have to buy a Christmas tree first!`;
```
