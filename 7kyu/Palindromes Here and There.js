/*
An array is given with palindromic and non-palindromic numbers. A palindromic number is a number that is the same from a reversed order. For example 122 is not a palindromic number, but 202 is one.

Your task is to write a function that returns an array with only 1s and 0s, where all palindromic numbers are replaced with a 1 and all non-palindromic numbers are replaced with a 0.

For example:

[101, 2, 85, 33, 14014]  ==>  [1, 1, 0, 1, 0]
[45, 21, 303, 56]        ==>  [0, 0, 1, 0]
*/

// My one-line solution:
const convertPalindromes = (numbers) =>
  numbers.map(
    (num) => +(num.toString() === [...num.toString()].reverse().join(''))
  );

// My solution:
const convertPalindromes = (numbers) => {
  const isPalindrome = (num) =>
    num.toString() === [...num.toString()].reverse().join('');
  return numbers.map((num) => +isPalindrome(num));
};

// More-performant user solution:
function convertPalindromes(numbers) {
  return (
    numbers &&
    numbers.map(function (elem) {
      var str = elem.toString().replace(/\W/g, '').toLowerCase();

      for (var left = 0, right = str.length - 1; left < right; ) {
        if (str[left++] !== str[right--]) {
          return 0;
        }
      }

      return 1;
    })
  );
}
