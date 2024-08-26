# [Grasshopper - Terminal Game Combat Function](https://www.codewars.com/kata/586c1cf4b98de0399300001d)

## Description

Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.

## My Solution

**JavaScript**

```js
const combat = (health, damage) => Math.max(0, health - damage);
```

**Python**

```py
def combat(health, damage):
    return max(0, health - damage)
```
