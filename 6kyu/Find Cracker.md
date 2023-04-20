# [Find Cracker.](https://www.codewars.com/kata/59f70440bee845599c000085)

## Description

Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score.

**Example:**

```js
var array = [
  ['name1', 445, ['B', 'A', 'A', 'C', 'A', 'A']],
  ['name2', 110, ['B', 'A', 'A', 'A']],
  ['name3', 200, ['B', 'A', 'A', 'C']],
  ['name4', 200, ['A', 'A', 'A', 'A', 'A', 'A', 'A']],
];
```

The scores for each grade is:

- A: 30 points
- B: 20 points
- C: 10 points
- D: 5 points
- Everything else: 0 points
  If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

Returns the name of the hacked name as an array when scoring with this rule.

```js
var array = [
  ['name1', 445, ['B', 'A', 'A', 'C', 'A', 'A']], // name1 total point is over 200 => hacked
  ['name2', 110, ['B', 'A', 'A', 'A']], // name2 point is right
  ['name3', 200, ['B', 'A', 'A', 'C']], // name3 point is 200 but real point is 90 => hacked
  ,
  ['name4', 200, ['A', 'A', 'A', 'A', 'A', 'A', 'A']], // name4 point is right
];

return ['name1', 'name3'];
```

## My Solution

**JavaScript**

```js
const findHack = (arr) => {
  const grades = {
    A: 30,
    B: 20,
    C: 10,
    D: 5,
  };
  const correctScores = arr.map((student) => {
    const score = student[2].reduce((acc, curr) => {
      return acc + (grades[curr] || 0);
    }, 0);
    const bonus = (student[2].length >= 5 && student[2].every((el) => el === 'A' || el === 'B')) * 20;
    return Math.min(score + bonus, 200);
  });

  const hacked = arr.filter((student, idx) => student[1] !== correctScores[idx]).map((student) => student[0]);
  return hacked;
};
```

### User Solution

**JavaScript**

```js
function findHack(arr) {
  const scores = { A: 30, B: 20, C: 10, D: 5 };

  return arr
    .filter(([name, points, grades]) => {
      const bonus = grades.every((e) => 'AB'.includes(e)) && grades.length > 4 ? 20 : 0;
      const score = grades.reduce((a, c) => a + (scores[c] || 0), 0) + bonus;

      return points > 200 || score !== points;
    })
    .map(([name]) => name);
}
```
