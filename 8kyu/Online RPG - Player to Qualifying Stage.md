# [Online RPG: Player to Qualifying Stage?](https://www.codewars.com/kata/55849d76acd73f6cc4000087)

## Description

Let's imagine we have a popular online RPG. A player begins with a score of 0 in class E5. A1 is the highest level a player can achieve.

Now let's say the players wants to rank up to class E4. To do so the player needs to achieve at least 100 points to enter the qualifying stage.

Write a script that will check to see if the player has achieved at least 100 points in his class. If so, he enters the qualifying stage.

In that case, we return, `"Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."`.

Otherwise return, `False/false` (according to the language in use).

**Note**

Remember, in **C#** you have to cast your output value to **Object** type!

## My Solution

**JavaScript**

```js
const playerRankUp = (points) =>
  points >= 100 && 'Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.';
```

```js
const playerRankUp = (points) =>
  points >= 100
    ? 'Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.'
    : false;
```

**Python**

```py
def playerRankUp(pts):
     return 'Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.' if pts >= 100 else False
```
