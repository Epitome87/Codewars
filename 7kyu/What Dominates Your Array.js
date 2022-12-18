/*
A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.
*/

// My solution:
const dominator = (arr) => {
  const count = arr.reduce((acc, curr) => {
    acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
    return acc;
  }, {});
  for (let num in count) {
    if (+count[num] > arr.length / 2) return +num;
  }
  return -1;
};

// Top user solution:
function dominator(arr) {
  arr.sort();
  for (var i = 0, v = 0, c = 0; i < arr.length; i++) {
    if (v == arr[i]) c++;
    else {
      v = arr[i];
      c = 1;
    }
    if (c > arr.length / 2) return v;
  }
  return -1;
}

// Good user solution:
function dominator(arr) {
  for (let i = 0, obj = {}; i < arr.length; i++) {
    obj[arr[i]] = obj[arr[i]] + 1 || 1;
    if (obj[arr[i]] > arr.length / 2) return arr[i];
  }
  return -1;
}
