/*
Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
Example
is_prime(1)   false
is_prime(2)   true 
is_prime(-1)  false
*/

// My solution:
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;

  const maxDivisor = Math.sqrt(num);

  for (let i = 2; i <= maxDivisor; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

// My later-refactored version:
const isPrime = (num) => {
  // Negative numbers, 0, and 1 are not prime.
  if (num < 2) return false;

  // 2 is considered prime.
  if (num === 2) return true;

  // Eliminate half our loop immediately.
  if (num % 2 === 0) return false;

  // Only need to check up to square root of num.
  const limit = Math.sqrt(num);

  //  Only check odd numbers: eliminates half our checks.
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};

// Top user solution:
function isPrime(num) {
  if (num < 2) return false;

  const limit = Math.sqrt(num);

  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// If run-time were not a factor, we could also use Wilson's Theorem:
const isPrime = (num) => {
  return (factorial(num - 1) + 1) % num === 0;
};

const factorial = (n) => {
  if (n <= 1) return 1;

  return n * factorial(n - 1);
};

/* Takeways:
1) This is an important algorithm: Memorize these optimizations!
2) We can limit our check to the square root of n because square root of n multiplied by itself is n.
*/
