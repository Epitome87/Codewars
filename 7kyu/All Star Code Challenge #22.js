/*
This Kata is intended as a small challenge for my students

All Star Code Challenge #22

Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

Any remaining seconds left over are ignored.

Note:
The string output needs to be in the specific form - "X hour(s) and X minute(s)"

For example:

3600 --> "1 hour(s) and 0 minute(s)"
3601 --> "1 hour(s) and 0 minute(s)"
3500 --> "0 hour(s) and 58 minute(s)"
323500 --> "89 hour(s) and 51 minute(s)"
*/

// My solution:
const toTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);

  return `${hours} hour(s) and ${mins} minute(s)`;
};

// Unique user solution:
const toTime = (seconds) => `${(seconds / 3600) ^ 0} hour(s) and ${((seconds % 3600) / 60) ^ 0} minute(s)`;

/* Takeaways:
1) IT appears as if the bitwise XOR (^) operator can be used for truncating a decimal! 
We can use num ^ 0 to truncate the number (round down), or num ^ 1 to round it up!
*/
