/*
A perfect number is a number in which the sum of its divisors (excluding itself) are equal to itself.

Write a function that can verify if the given integer n is a perfect number, and return True if it is, or return False if not.

Examples
n = 28 has the following divisors: 1, 2, 4, 7, 14, 28

1 + 2 + 4 + 7 + 14 = 28 therefore 28 is a perfect number, so you should return True

Another example:

n = 25 has the following divisors: 1, 5, 25

1 + 5 = 6 therefore 25 is not a perfect number, so you should return False
*/

// My solution:
const isPerfect = (n) => {
  if (n <= 1) return false;
  const divisors = [1];
  for (let i = 2; i <= n ** 0.5; i++) {
    if (n % i === 0) divisors.push(i, n / i);
  }
  return divisors.reduce((sum, curr) => sum + curr, 0) === n;
};

// Clever user solution:
function isPerfect(n) {
  const perfectInts = [
    6, 28, 496, 8128, 33550336, 8589869056, 137438691328, 2305843008139952128,
    2658455991569831744654692615953842176,
    191561942608236107294793378084303638130997321548169216,
  ];
  return !!~perfectInts.indexOf(n);
}

// Another good user solution:
function isPerfect(n) {
  let sum = 1;
  let sqrt = Math.sqrt(n);

  for (let i = 2; i < sqrt; i++) if (n % i === 0) sum += i + n / i;

  if (sqrt % 1 === 0) sum += sqrt;

  return sum === n;
}
