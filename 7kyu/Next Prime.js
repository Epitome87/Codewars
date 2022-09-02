/*
Get the next prime number!

You will get a numbern (>= 0) and your task is to find the next prime number.

Make sure to optimize your code: there will numbers tested up to about 10^12.

Examples
5   =>  7
12  =>  13
*/

// My solution:
const nextPrime = (n) => {
  let next = n + 1;
  if (next < 2) return 2;

  const limit = Math.sqrt(next);

  for (let i = 2; i <= limit; i++) {
    if (next % i === 0) return nextPrime(next);
  }

  return next;
};

// Top solution:
const nextPrime = (n) => (isPrime(n + 1) ? n + 1 : nextPrime(n + 1));

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};
