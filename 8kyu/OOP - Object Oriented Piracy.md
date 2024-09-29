# [OOP: Object Oriented Piracy](https://www.codewars.com/kata/54fe05c4762e2e3047000add)

## Description

Ahoy matey!

You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with heavy booty on board!

Unfortunately for you, people weigh a lot these days, so how do you know if a ship is full of gold and not people?

You begin with writing a generic Ship class / struct:

```js
class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }
}
```

Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

- draft - an estimate of the ship's weight based on how low it is in the water
- crew - the count of crew on board

```js
const titanic = new Ship(15, 10);
```

**Task**

You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.

Each crew member adds `1.5` units to the ship draft. If after removing the weight of the crew, the draft is still more than `20`, then the ship is worth looting. Any ship weighing that much must have a lot of booty!

Add the method

```js
isWorthIt;
```

to decide if the ship is worthy to loot. For example:

```js
titanic.isWorthIt(); // return false
```

Good luck and may you find GOOOLD!

## My Solution

**JavaScript**

```js
// Using Class syntax:
class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }

  isWorthIt() {
    return this.draft - 1.5 * this.crew > 20;
  }
}
```

```js
// Using function constructor syntax
function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
}

Ship.prototype.isWorthIt = function () {
  return this.draft - 1.5 * this.crew > 20;
};
```

**Python**

```py
class Ship:
    def __init__(self, draft, crew):
        self.draft = draft
        self.crew = crew

    def is_worth_it(self):
        return self.draft - 1.5 * self.crew > 20
```

## Takeaways

1. Remember, we add methods to functional objects via `objName.prototype.methodName = function`.
