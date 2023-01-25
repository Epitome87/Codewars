/*
Truncate the given string (first argument) if it is longer than the given maximum length (second argument). Return the truncated string with a "..." ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

Examples
('codewars', 9)  ==>  'codewars'
('codewars', 7)  ==>  'code...'
('codewars', 2)  ==>  'co...'
Taken from FCC
*/

// My solution:
const truncateString = (str, num) =>
  num >= str.length ? str : str.slice(0, num - (num <= 3 ? 0 : 3)) + '...';

// Clever user solution:
const truncateString = (str, num) =>
  str.length > num ? str.slice(0, num - (num > 3) * 3) + `...` : str;
