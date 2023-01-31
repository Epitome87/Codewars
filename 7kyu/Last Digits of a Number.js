/*
Your job is to implement a function which returns the last D digits of an integer N as a list.

Special cases:
If D > (the number of digits of N), return all the digits.
If D <= 0, return an empty list.
Examples:
N = 1
D = 1
result = [1]

N = 1234
D = 2
result = [3, 4]

N = 637547
D = 6
result = [6, 3, 7, 5, 4, 7]
*/

// My other revised solution:
const lastDigit = (n, d) => (d <= 0 ? [] : [...String(n)].slice(-d).map(Number));

// My revised solution:
const lastDigit = (n, d) => (d <= 0 ? [] : [...n.toString()].slice(-d).map(Number));

// My original solution:
const lastDigit = (n, d) => (d <= 0 ? [] : [...n.toString()].slice(d > n ? 0 : -d).map(Number));

// Clever user solution:
function lastDigit(n, d) {
  return (n + '').split('').splice(-d, d).map(Number);
}

/* Takeaways:
1) There was no need for my ternary operation in the slice method! Simple brain-fart.
2) To avoid the check of d <= 0, we can splice from -d to d? Why does this work?
For a negative d, we splice starting at d, and delete d amount of values. This leaves an empty array -- the desired outcome for negative d input!
*/
