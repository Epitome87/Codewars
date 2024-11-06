# [Don't Rely on Luck](https://www.codewars.com/kata/5268af3872b786f006000228)

## Description

The test fixture I use for this kata is pre-populated.

It will compare your guess to a random number generated using:

    Math.floor(Math.random() * 100 + 1)

You can pass by relying on luck or skill but try not to rely on luck.

"The power to define the situation is the ultimate power." - Jerry Rubin

Good luck!

## My Solution

**JavaScript**

```js
// Change the return value of Math.random.
// Now we have: Math.floor(0 * 100 + 1), which is 1.
// So we set our guess to 1.
Math.random = () => 0;
const guess = 1;
```

**Python**

```py
import random
random.randint = lambda a, b: 0
guess = 0
```
