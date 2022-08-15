/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/

// My solution (with Googling Regex stuff):
const noBoringZeros = (n) => Number(n.toString().replace(/0+$/, ''));

// Can also use + instead of Number(), and template literals instead of .toString();
const noBoringZeros = (n) => +`${n}`.replace(/0+$/, '');

/* Takeways:
1) Learn Regex!
*/

// Clever user solution, more universal for all programming languages:
function noBoringZeros(n) {
  // While n ends is 0, and not equal to 0
  while (n % 10 == 0 && n != 0) {
    // Divide by 10, thus removing the zero
    n /= 10;
  }
  return n;
}
