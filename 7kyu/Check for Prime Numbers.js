/*
In this kata you will create a function to check a non-negative input to see if it is a prime number.

The function will take in a number and will return True if it is a prime number and False if it is not.

A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Examples(input --> output)
0 --> false
1 --> false
2 --> true
11 --> true
12 --> false
*/

// My solution:
const isPrime = (n) => {
  if (n === 2) return true;
  if (n <= 1 || n % 2 === 0) return false;

  const limit = Math.sqrt(n);

  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
};

// "Clever" solution:
function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return n > 1;
}

// Can also do:
function isPrime(n) {
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return n > 1;
}

// Best answer (using Wilson's Theorem):
function isPrime(num) {
  if (num == 2 || num == 3) return true;
  if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i == 0 || num % (i + 2) == 0) return false;
  }
  return true;
}

/* Takeaways:
1) Some thoughts: Although my solution has more conditionals, it prevents the pointless check of any even number (which will never be prime after n = 2). My solution also takes even numbers into consideration in its for-loop, where it iterates by 2 instead of 1, thus preventing checks of even divisors. By far the biggest performance consideration, though, is to only iterate up until i * i <= n, or up until i <= Math.sqrt(n)!
2) We can improve upon my solution using some of Wilson's Theorem. Firstly, if the number is divisible by 3, it can't be a prime. Wilson's also observes that primes > 3 are of the form 6k += 1, meaning they are one value away from being a multiple of 6.
TODO: Understand why Wilson's check becomes: if (n % i === 0 || n % (i + 2) === 0) return false
*/
