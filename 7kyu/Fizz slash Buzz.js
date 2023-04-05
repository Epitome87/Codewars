/*
Write a function that takes an integer and returns an array [A, B, C], where A is the number of multiples of 3 (but not 5) below the given integer, B is the number of multiples of 5 (but not 3) below the given integer and C is the number of multiples of 3 and 5 below the given integer.

For example, solution(20) should return [5, 2, 1]
*/

// My solution:
const solution = (num) => {
  const arr = Array.from({ length: num - 3 }, (_, i) => i + 3);
  return arr.reduce(
    (acc, curr) => {
      return (acc[curr % 15 === 0 ? 2 : curr % 5 === 0 ? 1 : curr % 3 === 0 ? 0 : -1] += 1), acc;
    },
    [0, 0, 0]
  );
};

// Clever math-based user solution:
function solution(n) {
  n--;
  const mul3 = Math.floor(n / 3);
  const mul5 = Math.floor(n / 5);
  return [mul3 - Math.floor(mul3 / 5), mul5 - Math.floor(mul5 / 3), Math.floor(n / 15)];
}

// Alternate version of above user solution:
function solution(number) {
  number -= 1;
  let arr2 = Math.floor(number / 15);
  let arr1 = Math.floor(number / 5) - arr2;
  let arr0 = Math.floor(number / 3) - arr2;
  return [arr0, arr1, arr2];
}
