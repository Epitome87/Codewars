/*
My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

"100 180 90 56 65 74 68 86 99"
When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

Notes
it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
For C: The result is freed.
*/

// My (struggled) solution:
const orderWeight = (str) => {
  const sum = (s) => s.split('').reduce((sum, curr) => sum + Number(curr), 0);

  const compare = (a, b) => {
    const sumA = sum(a);
    const sumB = sum(b);
    return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
  };

  return str.split(' ').sort(compare).join(' ');
};

// Good user solution:
function orderWeight(strng) {
  return strng
    .split(' ')
    .map(function (v) {
      return {
        val: v,
        key: v.split('').reduce(function (prev, curr) {
          return parseInt(prev) + parseInt(curr);
        }, 0),
      };
    })
    .sort(function (a, b) {
      return a.key == b.key ? a.val.localeCompare(b.val) : a.key - b.key;
    })
    .map(function (v) {
      return v.val;
    })
    .join(' ');
}

// Another good user solution:
function orderWeight(str) {
  return str
    .split(' ')
    .sort((a, b) => {
      let sumA = a.split('').reduce((acc, cur) => acc + Number(cur), 0);
      let sumB = b.split('').reduce((acc, cur) => acc + Number(cur), 0);
      if (sumA < sumB) return -1;
      if (sumA > sumB) return 1;
      if (a < b) return -1;
      return 1;
    })
    .join(' ');
}
