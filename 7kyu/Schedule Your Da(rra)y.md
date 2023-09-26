# [Schedule Your Da(rra)y](https://www.codewars.com/kata/581de9a5b7bad5d369000150)

## Description

The best way to have a productive day is to plan out your work schedule. Given the following three inputs, please create an array of time alloted to work, broken up with time alloted with breaks:

Input 1: Hours - Number of hours available to you to get your work done!
Input 2: Tasks - How many tasks you have to do througout the day
Input 3: Duration (minutes)- How long each of your tasks will take to complete

Criteria to bear in mind:

- Your schedule should start with work and end with work.
- It should also be in minutes, rounded to the nearest whole minute.
- If your work is going to take more time than you have, return "You're not sleeping tonight!"

Example:

```js
dayPlan(8, 5, 30) == [30, 83, 30, 83, 30, 83, 30, 83, 30];
dayPlan(3, 5, 60) == "You're not sleeping tonight!";
```

## My Solution

**JavaScript**

```js
const dayPlan = (hours, tasks, duration) => {
  const taskMins = tasks * duration;
  if (taskMins > hours * 60) return "You're not sleeping tonight!";
  const breakMins = Math.round((hours * 60 - taskMins) / (tasks - 1));
  return Array.from({ length: tasks + tasks - 1 }, (_, i) => (!(i % 2) ? duration : breakMins));
};
```

### User Solution

**JavaScript**

```js
const dayPlan = (hours, tasks, duration) =>
  duration * tasks > hours * 60
    ? `You're not sleeping tonight!`
    : [...Array(2 * tasks - 1)].map((_, idx) =>
        idx & 1 ? Math.round((hours * 60 - duration * tasks) / (tasks - 1)) : duration
      );
```
