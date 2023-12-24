# [Do I Get a Bonus?](https://www.codewars.com/kata/56f6ad906b88de513f000d96)

## Description

It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

## My Solution

**JavaScript**

```js
const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;
```

```js
const bonusTime = (salary, bonus) => `£${bonus ? salary * 10 : salary}`;
```

**Python**

```py
bonus_time = lambda salary, bonus: f"${salary * (10 if bonus else 1)}"
```

```py
def bonus_time(salary, bonus):
    return f"${salary + (salary * 9 * bonus)}"
```
