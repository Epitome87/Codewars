/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/

// My solution. Could remove the constants, but I believe it is better practice and more readable.
const MS_PER_HOUR = 3600000;
const MS_PER_MINUTE = 60000;
const MS_PER_SECOND = 1000;

const past = (h, m, s) => h * MS_PER_HOUR + m * MS_PER_MINUTE + s * MS_PER_SECOND;
