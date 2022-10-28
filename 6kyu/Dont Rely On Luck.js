/*
The test fixture I use for this kata is pre-populated.

It will compare your guess to a random number generated using:

Math.floor(Math.random() * 100 + 1)
You can pass by relying on luck or skill but try not to rely on luck.

"The power to define the situation is the ultimate power." - Jerry Rubin

Good luck!
*/

// My solution:
const guess = 101;
Math.random = () => 1;

// Good user solution:
var guess = 10;

Math.random = function () {
  return (guess - 1) / 100;
};

/* Takeaways:
1) Not sure what to make of this Kata! I simply kept typing solutions in until it worked. The main takeaway seems to be that we can override the return value of Math.random.
*/
