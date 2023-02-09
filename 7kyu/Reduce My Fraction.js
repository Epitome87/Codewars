/*
Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

input:   [numerator, denominator]
output:  [reduced numerator, reduced denominator]
example: [45, 120] --> [3, 8]
All numerators and denominators will be positive integers.

Note: This is an introductory Kata for a series... coming soon!
*/

// My solution:
const reduce = (fraction) => {
  const [numerator, denominator] = fraction;
  for (let i = Math.min(numerator, denominator); i > 0; i--) {
    if (!(numerator % i) && !(denominator % i))
      return [numerator / i, denominator / i];
  }
};

// Top user solution:
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const reduce = ([a, b]) => {
  let d = gcd(a, b);
  return [a / d, b / d];
};
