/*
 */

// My solution (struggled):
const solve = (arr) => {
  let dominants = [arr[arr.length - 1]];
  let pointer = arr.length - 1;

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > arr[pointer]) {
      answer.unshift(arr[i]);
      pointer = i;
    }
  }

  return dominants;
};

// Top user solution:
function solve(arr) {
  return arr.filter((e, i) => arr.slice(i + 1).every((x) => x < e));
}

// Another good user solution:
function solve(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > Math.max(...arr.slice(i + 1, arr.length))) result.push(arr[i]);
  }
  return result;
}

// Another clever user solution:
function solve(arr) {
  return arr.filter((n, i) => n > Math.max(...arr.slice(i + 1)));
}
