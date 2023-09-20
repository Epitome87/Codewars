# [PatternCraft - State](https://www.codewars.com/kata/5682e72eb7354b2f39000021)

## Description

The State Design Pattern can be used, for example, to manage the state of a tank in the StarCraft game.

The pattern consists in isolating the state logic in different classes rather than having multiple ifs to determine what should happen.

**Your Task**

Complete the code so that when a Tank goes into SiegeMode it cannot move and its damage goes to 20. When it goes to TankMode it should be able to move and the damage should be set to 5.

You have 3 classes:

- Tank: has a state, canMove and damage properties
- SiegeState and TankState: has canMove and damage properties
- Note: The tank initial state should be TankState.

## My Solution

**JavaScript**

```js
class SiegeState {
  constructor() {
    this.canMove = false;
    this.damage = 20;
  }
}

class TankState {
  constructor() {
    this.canMove = true;
    this.damage = 5;
  }
}

class Tank {
  constructor() {
    this.state = new TankState();
  }

  get canMove() {
    return this.state.canMove;
  }

  get damage() {
    return this.state.damage;
  }
}
```
