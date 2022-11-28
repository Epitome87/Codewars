/*
Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.
*/

// My solution:
const logs = (x, a, b) => Math.log(a * b) / Math.log(x);

// Alternate user solution (not as clever!):
const logs = (x, a, b) => (Math.log(a) + Math.log(b)) / Math.log(x);
