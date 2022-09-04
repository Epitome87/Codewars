/*
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples
 123 ->  321
-456 -> -654
1000 ->    1
*/

// My eh solution:
const reverseNumber = (n) => {
  // Remove 0's from end
  while (n >= 10 && n % 10 === 0) {
    n = n / 10;
  }

  const reversed = String(n)
    .split('')
    .reverse((a, b) => a - b)
    .join('');
  if (reversed.includes('-')) return +`-${reversed.replace('-', '')}`;
  return +reversed;
};

// Top user solution:
function reverseNumber(n) {
  let isNegative = n < 0;
  let reverseAsString = Math.abs(n).toString().split('').reverse().join('');
  let result = Number(reverseAsString);

  return isNegative ? -result : result;
}

// Clever user solution (basically a refactored version of the above user's solution):
reverseNumber = (n) =>
  (n > 0 ? 1 : -1) * Math.abs(n).toString().split('').reverse().join('');

/* Takeaways:
1) You don't need to remove ending 0's if you're just going to conver the String to a Number anyway, duh!
*/
