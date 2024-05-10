# [Spanish Pirates off the Treasure Coast](https://www.codewars.com/kata/58b6d8ba1697a5655d00009b)

## Description

The Spanish King wants to bring gold back to the empire. The first step is finding pirates and the gold in the new world.

## My Solution

**JavaScript**

```js
const secretMap = (map) => {
  const [pirate, gold] = map.reduce(
    (acc, [cur]) => (cur === 'pirate' ? [++acc[0], acc[1]] : cur === 'pile_of_gold' ? [acc[0], ++acc[1]] : acc),
    [0, 0]
  );
  return `count of pirates: ${pirate} and the count of gold piles: ${gold}`;
};
```

```js
const secretMap = (map) => {
  let numGold = 0;
  let numPirate = 0;

  for (let el of map) {
    if (el[0] === 'pile_of_gold') numGold++;
    else if (el[0] === 'pirate') numPirate++;
  }

  return `count of pirates: ${numPirate} and the count of gold piles: ${numGold}`;
};
```

### User Solution

**JavaScript**

```js
const secretMap = (sp) => {
  const { pirate, pile_of_gold } = sp.reduce((acc, [str]) => (acc[str]++, acc), { pirate: 0, pile_of_gold: 0 });

  return `count of pirates: ${pirate} and the count of gold piles: ${pile_of_gold}`;
};
```
