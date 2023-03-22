/*
Given an array containing only zeros and ones, find the index of the zero that, if converted to one, will make the longest sequence of ones.

For instance, given the array:

[1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1]
replacing the zero at index 10 (counting from 0) forms a sequence of 9 ones:

[1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1]
                  '------------^------------'
Your task is to complete the function that determines where to replace a zero with a one to make the maximum length subsequence.

Notes:

If there are multiple results, return the last one:
[1, 1, 0, 1, 1, 0, 1, 1] ==> 5

The array will always contain only zeros and ones.
Can you do this in one pass?
*/

// My (bad) solution:
const replaceZero = (arr) => {
  const strArr = arr.join('').split('0');
  let max = 0,
    index = 0,
    result = 0;
  for (let i = 0; i < strArr.length - 1; i++) {
    let sum = strArr[i] + strArr[i + 1];
    index += strArr[i].length + 1;
    if (sum >= max) {
      max = sum;
      result = index - 1;
    }
  }
  return result;
};

// Clever user solution:
function replaceZero(a) {
  a = a.join``.split`0`.map((x) => x.length);
  let b = a.map((x, i, a) => x + a[i + 1]).slice(0, -1);
  return a
    .slice(0, b.lastIndexOf(Math.max(...b)) + 1)
    .reduce((a, b) => a + b + 1, -1);
}
