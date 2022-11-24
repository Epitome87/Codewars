/*
 */

// My solution:
const countWins = (winners, country) =>
  winners.reduce((acc, curr) => (curr.country === country ? acc + 1 : acc), 0);

// Top solution:
const countWins = (w, c) => w.filter((a) => a.country === c).length;
