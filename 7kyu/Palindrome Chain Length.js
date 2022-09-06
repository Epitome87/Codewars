/*
2856891% of 1,5524,840 of 12,913mirelon
JavaScript
TRAIN AGAINNEXT KATA
Details
Solutions
Forks (13)
Discourse (95)
Translations
Fork|Collect|
How satisfied are you with this kata?VERYSOMEWHATNONE
Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.

Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

If the input number is already a palindrome, the number of steps is 0.

All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.

Example
For example, start with 87:

  87 +   78 =  165     - step 1, not a palindrome
 165 +  561 =  726     - step 2, not a palindrome
 726 +  627 = 1353     - step 3, not a palindrome
1353 + 3531 = 4884     - step 4, palindrome!
4884 is a palindrome and we needed 4 steps to obtain it, so answer for 87 is 4.

Additional info
Some interesting information on the problem can be found in this Wikipedia article on Lychrel numbers.
*/

// My solution:
const palindromeChainLength = (n) => {
  let count = 0;

  while (String(n) !== String(n).split('').reverse().join('')) {
    n = Number(n) + Number(String(n).split('').reverse().join(''));
    count++;
  }

  return count;
};

// Clever recursive user solution:
var palindromeChainLength = function (n) {
  var x = parseInt(('' + n).split('').reverse().join(''));
  if (n != x) {
    return 1 + palindromeChainLength(n + x);
  }
  return 0;
};

// Another good user solution:
function palindromeChainLength(n) {
  var count = 0,
    rev = 0;
  while (n != (rev = parseInt(n.toString().split('').reverse().join('')))) {
    n += rev;
    count++;
  }
  return count;
}

/* Takeaways:
1) Note how the second user solution assigns a variable while also checking a condition. This prevents him from having to run the logic twice!
*/
