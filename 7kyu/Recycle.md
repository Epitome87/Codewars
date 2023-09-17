# [Recycle!](https://www.codewars.com/kata/59fb783bab11f89202001083)

## Description

You are having a BBQ, after the BBQ you are left with the rubbish. You have 3 recycling boxes:

Red: Plastics, Green: Glass, Blue: Card.

You will need to sort the rubbish according to the material and return the number of items in each box in the form of an array i.e [2,3,4] where 2 is the number of plastic items, 3 is the number of glass items and 4 is the number of card items. assume:

Plastics > 0, Glass < 0, Card = 0

## My Solution

**JavaScript**

```js
const recycleMe = (recycle) => recycle.reduce((acc, cur) => (acc[[1, 2, 0][Math.sign(cur) + 1]]++, acc), [0, 0, 0]);
```

```js
const recycleMe = (recycle) =>
  recycle.reduce(
    (acc, cur) => {
      if (cur > 0) acc[0]++;
      if (cur < 0) acc[1]++;
      if (!cur) acc[2]++;
      return acc;
    },
    [0, 0, 0]
  );
```

```js
const recycleMe = (recycle) => {
  const plastics = recycle.filter((el) => el > 0);
  const glass = recycle.filter((el) => el < 0);
  const cards = recycle.filter((el) => !el);

  return [plastics.length, glass.length, cards.length];
};
```