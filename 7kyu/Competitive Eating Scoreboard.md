# [Competitive Eating Scoreboard](https://www.codewars.com/kata/571d2e9eeed4a150d30011e7)

## Description

You are the judge at a competitive eating competition and you need to choose a winner!

There are three foods at the competition and each type of food is worth a different amount of points. Points are as follows:

- Chickenwings: 5 points
- Hamburgers: 3 points
- Hotdogs: 2 points

Write a function that helps you create a scoreboard. It takes as a parameter a list of objects representing the participants, for example:

```js
[
  { name: 'Habanero Hillary', chickenwings: 5, hamburgers: 17, hotdogs: 11 },
  { name: 'Big Bob', chickenwings: 20, hamburgers: 4, hotdogs: 11 },
];
```

It should return "name" and "score" properties sorted by score; if scores are equals, sort alphabetically by name.

```js
[
  { name: 'Big Bob', score: 134 },
  { name: 'Habanero Hillary', score: 98 },
];
```

## My Solution

**JavaScript**

```js
const scoreboard = (whoAteWhat) => {
  const scores = whoAteWhat.map(({ name, ...foods }) => {
    const score = Object.entries({ chickenwings: 5, hamburgers: 3, hotdogs: 2 }).reduce(
      (acc, [key, val]) => acc + foods[key] * val,
      0
    );
    return { name, score };
  }, []);

  return scores.sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
};
```

```js
const scoreboard = (arr) =>
  arr
    .map((v) => ({ name: v.name, score: v.chickenwings * 5 + v.hamburgers * 3 + v.hotdogs * 2 }))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
```
