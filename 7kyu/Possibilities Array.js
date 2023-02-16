/*
A non-empty array a of length n is called an array of all possibilities if it contains all numbers between [0,a.length-1].Write a method named isAllPossibilities that accepts an integer array and returns true if the array is an array of all possibilities, else false.

Example:

a=[1,2,0,3]
a.length-1=3 
a includes [0,3] ,hence the function should return true
*/

// My solution:
const isAllPossibilities = (x) => {
  if (x.length === 0) return false;
  const sorted = [...x].sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== i) return false;
  }
  return true;
};

// My slower original solution:
const isAllPossibilities = (x) => {
  if (x.length === 0) return false;
  const set = new Set(x);
  for (let i = 0; i < x.length; i++) {
    if (!set.has(i)) return false;
  }
  return true;
};

// Top user solution:
function isAllPossibilities(x) {
  return x.length > 0 ? x.every((a, i) => x.includes(i)) : false;
}
