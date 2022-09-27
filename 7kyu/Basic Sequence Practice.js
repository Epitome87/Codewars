/*
A sequence or a series, in mathematics, is a string of objects, like numbers, that follow a particular pattern. The individual elements in a sequence are called terms. A simple example is 3, 6, 9, 12, 15, 18, 21, ..., where the pattern is: "add 3 to the previous term".

In this kata, we will be using a more complicated sequence: 0, 1, 3, 6, 10, 15, 21, 28, ... This sequence is generated with the pattern: "the nth term is the sum of numbers from 0 to n, inclusive".

[ 0,  1,    3,      6,   ...]
  0  0+1  0+1+2  0+1+2+3
Your Task
Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic series explained above. Whenn < 0 return the sequence with negative terms.

Examples
 5  -->  [0,  1,  3,  6,  10,  15]
-5  -->  [0, -1, -3, -6, -10, -15]
 7  -->  [0,  1,  3,  6,  10,  15,  21,  28]
*/

// My solution:
const sumOfN = (n) => {
  const res = [];
  let sum = 0;

  for (let i = 0; i <= Math.abs(n); i++) {
    if (n < 0) {
      res.push(sum - i);
      sum -= i;
    } else {
      res.push(sum + i);
      sum += i;
    }
  }

  return res;
};

// My better solution (works in a REPL but not Codewars?):
const sumOfN = (n) => {
  const res = [];
  let sum = 0;

  for (let i = 0; i <= Math.abs(n); i++) {
    res.push(sum + (i > 0 ? i : -i));
    sum += i > 0 ? i : -i;
  }

  return res;
};

// Top user solution:
function sumOfN(n) {
  var array = [];
  array[0] = 0;
  for (var i = 1; i < Math.abs(n) + 1; i++) {
    if (n > 0) array[i] = array[i - 1] + i;
    else array[i] = array[i - 1] - i;
  }
  return array;
}

// Another good user solution:
function sumOfN(n) {
  var sum = 0;
  return Array.from({ length: Math.abs(n) + 1 }, (el, i) => {
    sum += i * Math.sign(n);
    return sum;
  });
}

/* Takeaways:
1) Remember to make use of the Math.sign() function!
*/
