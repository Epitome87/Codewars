/*
Definition
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not .
*/

// My solution:
const tidyNumber = (n) => {
  const numArr = n.toString().split('');

  for (let i = 0; i < numArr.length - 1; i++) {
    if (numArr[i] > numArr[i + 1]) return false;
  }

  return true;
};

// My one-line solution:
const tidyNumber = (n) =>
  !n
    .toString()
    .split('')
    .some((num, idx, arr) => arr[idx] > arr[idx + 1]);

// Top user solution:
function tidyNumber(n) {
  return [...(n += '')].sort().join`` == n;
}
