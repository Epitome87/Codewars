/*
 */

// My solution:
const distinct = (arr) => arr.filter((n, idx) => idx === arr.indexOf(n));

// Top user solutions:
function distinct(a) {
  return [...new Set(a)];
}

function distinct(a) {
  return Array.from(new Set(a));
}

/* Takeaways:
1) Don't get tripped up by the wording of challenges! This was just a plain remove duplicate problem, yet I somehow overlooked the power of using a Set!
*/
