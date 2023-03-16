/*
Sort an array according to the indices in another array. It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

initialArray = ['x', 'y', 'z'] sortingArray = [ 1, 2, 0]

sort(initialArray, sortingArray) => ['z', 'x', 'y']

sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']
*/

// My solution:
const sort = (initialArr, sortingArr) => {
  const arr = sortingArr.map((n, i) => [n, initialArr[i]]);
  return arr.sort((a, b) => a[0] - b[0]).map((n) => n[1]);
};

// Clever user solution:
const sort = (initialArray, sortingArray) =>
  initialArray.map((_, idx) => initialArray[sortingArray.indexOf(idx)]);

// Another clever user solution:
const sort = (initArr, sortArr) =>
  sortArr.reduce((arr, el, i) => ((arr[el] = initArr[i]), arr), []);
