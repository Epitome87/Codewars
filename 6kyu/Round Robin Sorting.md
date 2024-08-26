# [Round Robin Sorting](https://www.codewars.com/kata/5e03b8e32964c8002d69f94f)

## Description

Santa believes in fairness and wants to give each giftee a present in turn rather than handing all of an individual's presents to them, then all to the next person, and so on.

Santa would much rather give one to Sarah, one to Mo, one to Kai, one to Charlie, and cycle through until he's out of presents. But if Sarah is only given 10 presents and after the 10th cycle Santa has no more for her, Santa will continue the loop of gift-giving but excluding Sarah.

---

Write a function which accepts a `string[]` and returns a `string[]`, re-ordering the random input passed into Santa's defined order.

The output array length will be the same as the input length. The sorted list should be alphabetical by name.

---

    Examples:

    input:        "Sarah", "Charlie", "Mo"
    santa sorted: "Charlie", "Mo", "Sarah"

    input:        "Sarah", "Sarah", "Charlie", "Charlie", "Charlie", "Mo", "Mo"
    santa sorted: "Charlie", "Mo", "Sarah", "Charlie", "Mo", "Sarah", "Charlie"

## My Solution

**JavaScript**

```js
const santaSort = (unsortedNames) => {
  const map = {};
  let totalGifts = unsortedNames.length;
  const result = [];

  for (let name of unsortedNames) {
    map[name] = (map[name] || 0) + 1;
  }

  const alphabetical = Object.keys(map).sort();

  let currentNameIdx = 0;

  while (totalGifts > 0) {
    const currentName = alphabetical[currentNameIdx % alphabetical.length];
    if (map[currentName]) {
      result.push(currentName);
      map[currentName]--;
      totalGifts--;
    }
    currentNameIdx++;
  }

  return result;
};
```

### User Solution

**JavaScript**

```js
const santaSort = (unsortedNames) => {
  const bagWithGifts = unsortedNames.reduce((acc, child) => ({ ...acc, [child]: ~~acc[child] + 1 }), {});
  const queue = Object.keys(bagWithGifts).sort();
  const result = [];

  while (queue.length)
    for (let i = 0; i < queue.length; i++) {
      result.push(queue[i]);
      bagWithGifts[queue[i]]--;
      if (bagWithGifts[queue[i]] === 0) queue.splice(i--, 1);
    }

  return result;
};
```
