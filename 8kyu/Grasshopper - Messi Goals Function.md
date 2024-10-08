# [Grasshopper - Messi Goals Function](https://www.codewars.com/kata/55f73be6e12baaa5900000d4)

## Description

[Messi](https://en.wikipedia.org/wiki/Lionel_Messi) is a soccer player with goals in three leagues:

- LaLiga
- Copa del Rey
- Champions

Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

    5, 10, 2  -->  17

## My Solution

**JavaScript**

```js
const goals = (...leagues) => leagues.reduce((acc, cur) => acc + cur);
```

```js
const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) =>
  laLigaGoals + copaDelReyGoals + championsLeagueGoals;
```

**Python**

```py
def goals(*leagues):
    return sum(leagues)
```
