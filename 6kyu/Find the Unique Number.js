/*
 */

// My solution:
function findUniq(arr) {
  const sortedArray = [...arr].sort();
  return sortedArray[0] !== sortedArray[1] ? sortedArray[0] : sortedArray.pop();
}

// My favorite user solution:
function findUniq(arr) {
  let [a, b, c] = arr.slice(0, 3);
  if (a != b && a != c) return a;
  for (let x of arr) if (x != a) return x;
}

// Good user solution:
const findUniq = (arr) => +arr.filter((value) => arr.indexOf(value) == arr.lastIndexOf(value));

// Good user solution:
function findUniq(arr) {
  const sortedArray = [...arr].sort();
  return sortedArray[0] !== sortedArray[1] ? sortedArray[0] : sortedArray.pop();
}
