/*
You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
The value of d will always be 0 - 9.
The value of x will always be greater than 0.

You have to return as an array

the count of these numbers,
their sum
and their product.

For example:
x = 11
d = 1
->
Numbers: 1, 10, 11
Return: [3, 22, 110]

If there are no numbers, which include the digit, return [0,0,0].

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/

// My refactored solution:
const numbersWithDigitInside = (x, d) => {
  const res = Array.from({ length: x }, (v, i) => i + 1).filter((n) => n.toString().includes(d));
  const count = res.length;
  const sum = res.reduce((acc, curr) => acc + curr, 0);
  const product = res.reduce((acc, curr) => acc * curr, res.length > 0 ? 1 : 0);
  return [count, sum, product];
};

// My original solution:
const numbersWithDigitInside = (x, d) => {
  const res = [];
  for (let i = 1; i <= x; i++) {
    if (i.toString().includes(d)) res.push(i);
  }
  const count = res.length;
  const sum = res.reduce((acc, curr) => acc + curr, 0);
  const product = res.reduce((acc, curr) => acc * curr, res.length > 0 ? 1 : 0);
  return [count, sum, product];
};

// Clever user solution:
const numbersWithDigitInside = (x, d) =>
  [...Array(x)].reduce(
    (pre, _, idx) => (new RegExp(d).test(++idx) ? [++pre[0], pre[1] + idx, (pre[2] || 1) * idx] : pre),
    [0, 0, 0]
  );
