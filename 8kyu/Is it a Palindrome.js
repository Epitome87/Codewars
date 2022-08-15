/*
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

// My solution:
const isPalindrome = (x) => x.toLowerCase() === x.toLowerCase().split('').reverse().join('');

// Good user solution:
function isPalindrome(x, str = x.toLowerCase()) {
  return str === [...str].reverse().join('');
}

/* Takeways:
1) Perhaps not best practice, but remember we can use default params to create new variables, to avoid having to lower-case twice!
*/
