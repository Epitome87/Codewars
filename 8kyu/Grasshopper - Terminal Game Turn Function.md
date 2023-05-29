# [Grasshopper - Terminal Game Turn Function](https://www.codewars.com/kata/56019d3b2c39ccde76000086)

## Description

You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.

You are using a library (Game.Logic in C#) that already has the functions below. Create a function named doTurn/DoTurn/do_turn that calls the functions in the proper order as described in the paragraph above.

```
- combat
- buyHealth
- getCoins
- printStatus
- rollDice
- move
```

## My Solution

**JavaScript**

```js
const doTurn = () => {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
};
```
