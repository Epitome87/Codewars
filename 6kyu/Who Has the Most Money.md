# [Who Has the Most Money?](https://www.codewars.com/kata/528d36d7cc451cd7e4000339)

## Description

You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

```js
class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}
```

As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".

Notes:

- Each student will have a unique name
- There will always be a clear winner: either one person has the most, or everyone has the same amount
- If there is only one student, then that student has the most money

## My Solution

**JavaScript**

```js
const mostMoney = (students) => {
  if (students.length < 2) return students[0].name;
  const totals = students.map((student) =>
    Object.entries({ fives: 5, tens: 10, twenties: 20 }).reduce((acc, [key, val], idx) => acc + student[key] * val, 0)
  );
  const mostMoney = Math.max(...totals);
  return totals.every((total) => total === mostMoney)
    ? 'all'
    : students[totals.findIndex((total) => total === mostMoney)].name;
};
```

### User Solution

**JavaScript**

```js
function mostMoney(s) {
  s.sort((x, y) => sum(y) - sum(x));
  if (s.length > 1 && sum(s[0]) == sum(s[1])) return 'all';
  return s[0].name;
}

const sum = (s) => s.fives * 5 + s.tens * 10 + s.twenties * 20;
```

```js
function mostMoney(students) {
  const richStudent = students.reduce(
    (total, current) => {
      const { name, fives, tens, twenties } = current;
      const studentTotal = fives * 5 + tens * 10 + twenties * 20;

      return studentTotal > total.money
        ? { name, money: studentTotal }
        : studentTotal === total.money
        ? { name: 'all', money: studentTotal }
        : total;
    },
    { name: null, money: 0 }
  );

  return richStudent.name;
}
```
