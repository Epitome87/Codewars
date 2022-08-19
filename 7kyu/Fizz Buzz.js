/*
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]
*/

// My eh solution:
const fizzbuzz = (n) => {
  const results = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) results.push('FizzBuzz');
    else if (i % 3 === 0) results.push('Fizz');
    else if (i % 5 === 0) results.push('Buzz');
    else results.push(i);
  }

  return results;
};

// My refactored solution:
const fizzbuzz = (n) => {
  const results = [];

  for (let i = 1; i <= n; i++) {
    results.push((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);
  }

  return results;
};

// My one-line solution:
const fizzbuzz = (n) =>
  Array.from({ length: n }, (_, i) => ((i + 1) % 3 ? '' : 'Fizz') + ((i + 1) % 5 ? '' : 'Buzz') || i + 1);

// My refactored one-line solution:
const fizzbuzz = (n) => Array.from({ length: n }, (_, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i);

// Interesting user solution:
const fizzbuzz = (n) =>
  [...Array(n)].map((val, idx) => (!(++idx % 15) ? `FizzBuzz` : !(idx % 5) ? `Buzz` : !(idx % 3) ? `Fizz` : idx));

/* Takeways:
1) If we don't need the value argument in the .map() call, consider avoiding Array.from({ length: n}) and instead use [...Array(n)] -- slightly shorter.
2) Note that Array(n).map() won't product correct results, as Array(n) will just return an empty array. What we want is an an Array with 10 elements, which [...Array(n)] will provide!
3) Array.from({ length: 10 }) will return an array of 10 undefined elements. However, we can still map over these elements and assign them a starting value (probably based on index).
*/
