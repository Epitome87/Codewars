/*
Description:
Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

Rules:
Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
Strings will consist of uppercase letters only
Only two groups to a fight.
Group whose total power (A + B + C + ...) is bigger wins.
If the powers are equal, it's a tie.
Examples:
  battle("ONE", "TWO"); // => "TWO"`
  battle("ONE", "NEO"); // => "Tie!"
Related kata:
Battle of the characters (Medium)
*/

// My solution:
const battle = (x, y) => {
  const alpha = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const power = (x) =>
    [...x].reduce((acc, curr) => acc + alpha.indexOf(curr), 0);
  const xPow = power(x);
  const yPow = power(y);
  return xPow > yPow ? x : yPow > xPow ? y : 'Tie!';
};

// Good user solution:
const score = (s) => [...s].reduce((n, c) => n + c.charCodeAt(0) - 64, 0);
function battle(x, y) {
  const a = score(x);
  const b = score(y);
  return a > b ? x : a < b ? y : 'Tie!';
}
