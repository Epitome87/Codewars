# [Twice As Old](https://www.codewars.com/kata/5b853229cfde412a470000d0)

## Description

Your function takes two arguments:

1. current father's age (years)
2. current age of his son (years)

Calculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

## My Solution

**JavaScript**

```js
const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs(sonYearsOld * 2 - dadYearsOld);
```

**Python**

```py
def twice_as_old(dad_years_old, son_years_old):
    return abs(son_years_old * 2 - dad_years_old)
```
