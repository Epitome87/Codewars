/*
Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
Expect large Inputs!
*/

// My mediocre solution:
const oddCount = (n) => {
  const odds = [];

  for (let i = 1; i < n; i++) {
    if (i % 2) odds.push(i);
  }

  return odds.length;
};

// My refactored solution when I relied on basic math! (And the fact the test failed when using large for-loops gave a good hint):
const oddCount = (n) => Math.floor(n / 2);
