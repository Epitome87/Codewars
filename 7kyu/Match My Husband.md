# [Match My Husband](https://www.codewars.com/kata/5750699bcac40b3ed80001ca)

## Description

It is 2050 and romance has long gone, relationships exist solely for practicality.

MatchMyHusband is a website that matches busy working women with perfect house husbands. You have been employed by MatchMyHusband to write a function that determines who matches!!

The rules are... a match occurs providing the husband's "usefulness" rating is greater than or equal to the woman's "needs".

The husband's "usefulness" is the SUM of his cooking, cleaning and childcare abilities and takes the form of an array .

usefulness example --> [15, 26, 19] (15 + 26 + 19) = 60

Every woman that signs up, begins with a "needs" rating of 100. However, it's realised that the longer women wait for their husbands, the more dissatisfied they become with our service. They also become less picky, therefore their needs are subject to exponential decay of 15% per month. https://en.wikipedia.org/wiki/Exponential_decay

Given the number of months since sign up, write a function that returns "Match!" if the husband is useful enough, or "No match!" if he's not.

## My Solution

**JavaScript**

```js
const match = ([a, b, c], months) => (a + b + c >= 100 * 0.85 ** months ? 'Match!' : 'No match!');
```

```js
const match = (usefulness, months) => {
  const score = usefulness.reduce((acc, cur) => acc + cur, 0);
  let needs = 100;
  for (let i = 0; i < months; i++) {
    needs = needs * 0.85;
  }

  return score >= needs ? 'Match!' : 'No match!';
};
```
