# [Elimination Tournament](https://www.codewars.com/kata/5f631ed489e0e101a70c70a0)

## Description

In this Kata you will be given an array (or another language-appropriate collection) representing contestant ranks. You must eliminate contestant in series of rounds comparing consecutive pairs of ranks and store all initial and intermediate results in an array.

During one round, the lowest rank of a pair is eliminated while the highest proceeds to the next round. This goes on until one contestant only is left. If the number of contestants is odd, the last one of the current array becomes the first of the next round.

At the end of the competition, return the results of all the rounds in the form of array of arrays.

**Example:**

```js
input = [9, 5, 4, 7, 6, 3, 8, 2];

output = [
  [9, 5, 4, 7, 6, 3, 8, 2], // first round is initial input
  [9, 7, 6, 8], // results of 9 vs 5, 4 vs 7, 6 vs 3, and 8 vs 2
  [9, 8], // results of 9 vs 7 and 6 vs 8
  [9], // results of 9 vs 8
];
```

Notes:

- Array length will alway be >= 2 and <= 100
- Elements of the array will always be >=1 and <= 100
- Input must not be altered.

## My Solution

**JavaScript**

```js
const tourney = array => {
  return [...Array(Math.ceil(Math.log2(array.length)))]..reduce((acc, cur, i) => {
    const roundWinners = [];
    for (let i = 0; i < acc.at(-1).length; i += 2) {
      const matchup = acc.at(-1).slice(i, i + 2);
      if (matchup.length === 1) roundWinners.unshift(matchup[0]);
      else roundWinners.push(Math.max(...matchup));
    }
    return [...acc, roundWinners];
  }, [array]);
}
```

```js
const tourney = (array) => {
  const results = [array];

  while (results[results.length - 1].length > 1) {
    const roundWinners = [];

    for (let i = 0; i < results.at(-1).length; i += 2) {
      const match = results.at(-1).slice(i, i + 2);
      if (match.length === 1) roundWinners.unshift(match[0]);
      else roundWinners.push(Math.max(...match));
    }

    results.push(roundWinners);
  }

  return results;
};
```

```js
const tourney = (array) => {
  let remaining = [...array];
  const results = [array];

  while (remaining.length > 1) {
    const roundWinners = [];

    for (let i = 0; i < remaining.length; i += 2) {
      const match = remaining.slice(i, i + 2);
      if (match.length === 1) {
        roundWinners.unshift(match[0]);
      } else {
        const winner = Math.max(...match);
        roundWinners.push(winner);
      }
    }

    results.push(roundWinners);
    remaining = [...roundWinners];
  }

  return results;
};
```

### User Solution

**JavaScript**

```js
const tourney = (arr) => {
  if (arr.length === 1) return [arr];

  let next = arr.length % 2 ? arr.slice(-1) : [];

  for (let i = 0; i < arr.length - 1; i += 2) next.push(Math.max(arr[i], arr[i + 1]));

  return [arr].concat(tourney(next));
};
```

```js
const tourney = (array) => {
  const tour = (arr) =>
    arr.reduce(
      (a, v, i) => (i % 2 ? [...a, Math.max(arr[i], arr[i - 1])] : a),
      arr.length % 2 ? [arr[arr.length - 1]] : []
    );

  const res = [[...array]];

  for (let i = 0; res[i].length > 1; i++) res.push(tour(res[i]));

  return res;
};
```
