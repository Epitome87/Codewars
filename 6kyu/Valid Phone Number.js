/*
Write a function that accepts a string, and returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses)

Examples:

"(123) 456-7890"  => true
"(1111)555 2345"  => false
"(098) 123 4567"  => false
*/

// My eh solution:
const validPhoneNumber = (num) => {
  if (num[0] !== '(' || num[4] !== ')' || num[5] !== ' ' || num[9] !== '-') return false;
  return /^[0-9]+$/.test(num.replace(/[() -]/g, ''));
};

// Top user solution:
function validPhoneNumber(phoneNumber) {
  return /^\(\d{3}\) \d{3}\-\d{4}$/.test(phoneNumber);
}

/* Takeaways:
1) Stop stalling -- master Regex!
*/
