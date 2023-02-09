/*
Timothy (age: 16) really likes to smoke. Unfortunately, he is too young to buy his own cigarettes and that's why he has to be extremely efficient in smoking.

It's now your task to create a function that calculates how many cigarettes Timothy can smoke out of the given amounts of bars and boxes:

a bar has 10 boxes of cigarettes,
a box has 18 cigarettes,
out of 5 stubs (cigarettes ends) Timothy is able to roll a new one,
of course the self made cigarettes also have an end which can be used to create a new one...
Please note that Timothy never starts smoking cigarettes that aren't "full size" so the amount of smoked cigarettes is always an integer.
*/

// My solution:
const startSmoking = (bars, boxes) =>
  Math.trunc(22.5 * (10 * bars + boxes) - 0.5);

// Top user solution:
function startSmoking(bars, boxes) {
  return (22.5 * (10 * bars + boxes) - 0.5) | 0;
}

// Good brute-force user solution:
function startSmoking(bars, boxes) {
  var total = bars * 180 + boxes * 18;
  var rerolls = Math.floor(total / 5);
  var remainder = Math.floor(total % 5);

  while (rerolls + remainder >= 5) {
    total += rerolls;
    newTotal = rerolls + remainder;
    rerolls = Math.floor((rerolls + remainder) / 5);
    remainder = newTotal - rerolls * 5;
  }
  return total + rerolls;
}

/* Takeaways:
1) Using | 0 after a number is equivalent to using Math.trunc().
One of the above methods was required over Math.floor to account for negative numbers,
which would have rounded to the nearest MORE negative rather than the nearest LESS negative.
*/
