/*
I have four positive integers, A, B, C and D, where A < B < C < D. The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order. Your task is to return the value of D.
*/

// My solution:
const alphabet = (ns) => {
  const sorted = [...ns].sort((a, b) => a - b);
  return sorted[7] / sorted[sorted[0] * sorted[1] === sorted[2] ? 3 : 2];

  /* Explanation: After we sort, we know A and B must be the first and second elements. We also know CxD is the final element. Using basic mathematic properties, we are left with elements 3 and 4 as being C. Why is C important?
  If we divide the largest number (CxD) by C, we are left with D -- the number we are finding! We can determine which of the two elements is C by seeing if they are the product of A and B. If they are, we haven't found C, but instead we found AxB (the only value in the input that has a possibility to be equal to or less C).
  */
};

// Another good user solution:
function alphabet(ns) {
  ns = ns.sort((a, b) => a - b);

  for (let i = 0; i < ns.length - 1; i++) {
    let result = ns[i] * ns[i + 1];
    let idx = ns.indexOf(result);
    if (idx !== -1) {
      ns.splice(idx, 1);
    }
  }
  return ns[3];
}
