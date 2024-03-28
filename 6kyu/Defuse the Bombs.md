# [Defuse the Bombs!](https://www.codewars.com/kata/54d558c72a5e542c0600060f)

## Description

There are a series of 10 bombs about to go off! Defuse them all! Simple, right?

Note: This is not an ordinary Kata, but more of a series of puzzles. The point is to figure out what you are supposed to do, then how to do it. Instructions are intentionally left vague.

## My Solution

**JavaScript**

```js
// Bomb #1
Bomb.diffuse(Bomb.key);

// Bomb #2
while (Bomb.hint === 'just keep trying') Bomb.diffuse(Bomb.key);

// Bomb #3: "Check globals" (code !== key) && (failed = true)
Bomb.diffuse(BombKey);

// Bomb #4: Change diffuseTheBomb to return true
const diffuseTheBomb = () => true;
Bomb.diffuse();

// Bomb #5: Convert VGhlIGtleSBpcyAiMy4xNDE1OSI= from base64 to text
global.atob('VGhlIGtleSBpcyAiMy4xNDE1OSI='); // Results in: The key is "3.14159"
Bomb.diffuse(3.14159);

// Bomb #6: Date 4 years ago
const date = new Date();
date.setYear(date.getFullYear() - 4);
Bomb.diffuse(date);

// Bomb #7: "Is it freezing in here?" - Prevent diffuse argument's key property from being changed
Bomb.diffuse(Object.freeze({ key: 43 }));

// Bomb #8: Diffuse returns true if obj < 10 and obj > 10
Bomb.diffuse({
  wasCalled: false,
  valueOf: function () {
    const val = this.wasCalled ? 69 : -420;
    this.wasCalled = true;
    return val;
  },
});

// Bomb #9: Diffuse returns (code === 42) && (Math.random() * Math.random() * Math.random() === 0.5)
Math.random = function () {
  return {
    valueOf: () => {
      let val = this.wasCalled ? 1 : 0.5;
      this.wasCalled = true;
      return val;
    },
  };
};
Bomb.diffuse(42);

// Bomb #10: check(Buffer.from( code, 'base64' ).toString( 'ascii' ), [ 1, 2, 3 ] + [ 3 ] + [ 3, 4, 5, 6, 7, 8 ] == 42);
Array.prototype.valueOf = function () {
  return this.reduce((acc, cur) => acc + cur, 0);
};

console.log(Buffer.from('yes', 'ascii').toString('base64')); // "eWVz"
Bomb.diffuse('eWVz');
```
