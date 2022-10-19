/*
The Collatz Conjecture states that for any natural number n, if n is even, divide it by 2. If n is odd, multiply it by 3 and add 1. If you repeat the process continuously for n, n will eventually reach 1.

For example, if n = 20, the resulting sequence will be:

[ 20, 10, 5, 16, 8, 4, 2, 1 ]
Write a program that will output the length of the Collatz Conjecture for any given n.
In the example above, the output would be 8.

For more reading see: http://en.wikipedia.org/wiki/Collatz_conjecture
*/

// My solution:
const collatz = (n) => {
  let count = 1;

  while (n !== 1) {
    n = n % 2 ? n * 3 + 1 : n / 2;
    count++;
  }

  return count;
};

// Clever user solution using recursion:
function collatz(n) {
  if (n === 1) return 1;
  else if (n % 2 === 0) return 1 + collatz(n / 2);
  else return 1 + collatz(3 * n + 1);
}

// Another clever user solution using recursion:
const collatz = (n) => (n > 1 ? 1 + collatz(n % 2 ? n * 3 + 1 : n / 2) : 1);
