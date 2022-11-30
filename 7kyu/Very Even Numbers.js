/*
Task
Write a function that returns true if the number is a "Very Even" number.

If a number is a single digit, then it is simply "Very Even" if it itself is even.

If it has 2 or more digits, it is "Very Even" if the sum of its digits is "Very Even".

Examples
number = 88 => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd 

number = 222 => returns true -> 2 + 2 + 2 = 6 => 6 is even

number = 5 => returns false

number = 841 => returns true -> 8 + 4 + 1 = 13 -> 1 + 3 => 4 is even
Note: The numbers will always be 0 or positive integers!
*/

// My solution:
const isVeryEvenNumber = (n) =>
  n < 10
    ? n % 2 === 0
    : isVeryEvenNumber(
        String(n)
          .split('')
          .reduce((acc, curr) => acc + +curr, 0)
      );

// Clever user solution:
function isVeryEvenNumber(n) {
  return !n-- || (n % 9) % 2 === 1;
}

/* Takeaways:
1) Reducing a number in this way until its sum of digits reaches one digit is called a Digital Sum.
2) For simplicity, we can rewrite the expression like this: !n || (n - 1) % 9 % 2 === 1

!n checks whether the input is zero. Otherwise:

(n - 1) decrements the input
(n - 1) % 9 calculates the recursive digit sum minus one (the correct formula is (n - 1) % 9 + 1 but the + 1 part can be ignored here)
(n - 1) % 9 % 2 converts the recursive-digit-sum-minus-one into either 0 or 1 (as we didn't add + 1 on the previous step, the parity is flipped, so if the real recursive-digit-sum is even, we will get 1 instead of 0)
(n - 1) % 9 % 2 === 1 checks whether the resulting number is odd (as explained above)
*/
