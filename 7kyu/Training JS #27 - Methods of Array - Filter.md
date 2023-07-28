# [Training JS #27: Methods of Array - Filter](https://www.codewars.com/kata/573023c81add650b84000429)

## Description

Coding in function countGrade. function accept 1 parameters scores, it's a number array. Your task is to count the grade distribution of the scores, to return an object like this:

```
{S:888, A:888, B:888, C:888, D:888, X:888}
```

Grading rules:

```
Grade S: Full marks(score=100)
Grade A: score<100 and score>=90
Grade B: score<90 and score>=80
Grade C: score<80 and score>=60
Grade D: score<60 and score>=0
Grade X: score=-1(The cheating guy gets a score like that)
```

**Example**

```
countGrade([50,60,70,80,90,100]) should return {S:1, A:1, B:1, C:2, D:1, X:0}
countGrade([65,75,,85,85,95,100,100]) should return {S:2, A:1, B:2, C:2, D:0, X:0}
countGrade([-1,-1,-1,-1,-1,-1]) should return {S:0, A:0, B:0, C:0, D:0, X:6}
```

## My Solution

**JavaScript**

```js
const countGrade = (scores) => {
  const S = scores.filter((score) => score === 100).length;
  const A = scores.filter((score) => score < 100 && score >= 90).length;
  const B = scores.filter((score) => score < 90 && score >= 80).length;
  const C = scores.filter((score) => score < 80 && score >= 60).length;
  const D = scores.filter((score) => score < 60 && score >= 0).length;
  const X = scores.filter((score) => score < 0).length;

  return { S, A, B, C, D, X };
};
```

### User Solution

**JavaScript**

```js
function countGrade(scores) {
  var count = (f) => scores.filter((v) => f(v)).length;
  return {
    S: count((v) => v == 100),
    A: count((v) => v < 100 && v >= 90),
    B: count((v) => v < 90 && v >= 80),
    C: count((v) => v < 80 && v >= 60),
    D: count((v) => v < 60 && v >= 0),
    X: count((v) => v == -1),
  };
}
```
