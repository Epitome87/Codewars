/*
Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3]

More examples can be found in the test cases.
*/

// My solution:
const solve = (arr) => {
  const res = [...arr];

  for (let i = 0; i < res.length; i++) {
    if (res.indexOf(arr[i]) !== res.lastIndexOf(arr[i])) {
      res[i] = 'x';
    }
  }

  return res.filter((el) => el !== 'x');
};

// Top user solution:
function solve(arr) {
  return arr.filter((val, i) => arr.lastIndexOf(val) == i);
}

// Second-rated user solution (and what my first try was attempting!):
const solve = (arr) => [...new Set(arr.reverse())].reverse();

/* Takeaways:
1) To keep only the last occurence of a duplicate, we can see if arr.lastIndexOf(el) is equal to i, i being an iteration count over the array.
*/
