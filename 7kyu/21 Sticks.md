# [21 Sticks](https://www.codewars.com/kata/5866a58b9cbc02c4f8000cac)

## Description


**The game**

In this game, there are 21 sticks lying in a pile. Players take turns taking 1, 2, or 3 sticks. The last person to take a stick wins. For example:

21 sticks in the pile

```
Bob takes 2  -->  19 sticks left
Jim takes 3  -->  16 sticks
Bob takes 3  -->  13 sticks
Jim takes 1  -->  12 sticks
Bob takes 2  -->  10 sticks
Jim takes 2  -->   8 sticks
Bob takes 3  -->   5 sticks
Jim takes 3  -->   2 sticks
Bob takes 2  -->  Bob wins!
```

**Your task**

Create a robot that will always win the game. Your robot will always go first. The function should take an integer and returns 1, 2, or 3.

Note: The input will always be valid (a positive integer)

Hint: https://youtu.be/9KABcmczPdg


## My Solution

**JavaScript**

```js
const makeMove = (sticks) => sticks % 4;
```

### Takeaways:

1. We always want to leave the amount of remaining sticks as a multiple of 4.
This is because a multiple of 4 ensures the player can never win. If there are 4 sticks left after our turn, none of the player's options of 1, 2, or 3 sticks leads to a win. However,
on the next turn, regardless of what the player picked, we can pick the remaining sticks and win!
