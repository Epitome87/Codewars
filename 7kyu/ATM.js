/*
An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

Return that number, or -1 if it is impossible.

Good Luck!!!
*/

// My eh solution:
const solve = (n) => {
  if (n % 10 !== 0) return -1;

  const num500 = Math.floor(n / 500);
  n -= num500 * 500;

  const num200 = Math.floor(n / 200);
  n -= num200 * 200;

  const num100 = Math.floor(n / 100);
  n -= num100 * 100;

  const num50 = Math.floor(n / 50);
  n -= num50 * 50;

  const num20 = Math.floor(n / 20);
  n -= num20 * 20;

  const num10 = Math.floor(n / 10);
  n -= num10 * 10;

  return num500 + num200 + num100 + num50 + num20 + num10;
};

// Top user solution:
function solve(n) {
  if (n % 10 !== 0) return -1;
  let count = 0;
  while (n >= 500) {
    n -= 500;
    count += 1;
  }
  while (n >= 200) {
    n -= 200;
    count += 1;
  }
  while (n >= 100) {
    n -= 100;
    count += 1;
  }
  while (n >= 50) {
    n -= 50;
    count += 1;
  }
  while (n >= 20) {
    n -= 20;
    count += 1;
  }
  while (n >= 10) {
    n -= 10;
    count += 1;
  }
  return count;
}

// Clever user solution:
function solve(n) {
  if (n % 10) return -1;
  return [500, 200, 100, 50, 20, 10].reduce((s, v) => {
    let ans = (n / v) | 0;
    n %= v;
    return s + ans;
  }, 0);
}
