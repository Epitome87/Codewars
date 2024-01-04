# [Grasshopper - Grade Book](https://www.codewars.com/kata/55cbd4ba903825f7970000f5)

## Description

Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

```
Numerical Score Letter Grade
90 <= score <= 100 'A'
80 <= score < 90 'B'
70 <= score < 80 'C'
60 <= score < 70 'D'
0 <= score < 60 'F'
```

Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

## My Solution

**JavaScript**

```js
// (Refactored params to accept any number of scores):
const getGrade = (...scores) => {
  const average = scores.reduce((acc, cur) => acc + cur, 0) / scores.length;

  return average >= 90 ? 'A' : average >= 80 ? 'B' : average >= 70 ? 'C' : average >= 60 ? 'D' : 'F';
};
```

**Python**

```py
def get_grade(s1, s2, s3):
    avg = (s1 + s2 + s3) / 3
    return 'F' if avg <= 60 else 'D' if avg < 70 else 'C' if avg < 80 else 'B' if avg < 90 else 'A'
```