/*
Definition
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

Task
Given a number determine if it Automorphic or not .
*/

// My solution:
const automorphic = (n) =>
  String(Math.pow(n, 2)).slice(-1 * String(n).length) === String(n)
    ? 'Automorphic'
    : 'Not!!';

// Top user solution:
const automorphic = (n) =>
  String(n * n).endsWith(String(n)) ? 'Automorphic' : 'Not!!';

/* Takeaways:
1) D'oh! Don't forget about the .endsWith(str) method for Strings!
*/
