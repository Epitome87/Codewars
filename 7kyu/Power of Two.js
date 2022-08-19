/*
Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.

Examples
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.
*/

// My solution (with outside Googling):
const isPowerOfTwo = (n) => Number.isInteger(Math.log2(n));

// Clever user alternative, useful for non-JS languages:
function isPowerOfTwo(n) {
  if (n == 1) return true;
  if (n < 1) return false;

  return isPowerOfTwo(n / 2);
}

/* Takeways:
1) Remember, Number.isInteger as an alternative to seeing if n % 1 === 0.
2) The Math.log method has a Math.log2 form, to return the base 2 log of a number.
3) To test if a number is a power of 2, we can also just keep dividing it by 2, and if it never equals 1, it's not a power of 2.
*/
