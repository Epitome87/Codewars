/*
Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5) // should return "Value is 00005"
*/

// My solution:
const solution = (value) => `Value is ${value.toString().padStart(5, '0')}`;

/* Takeaways:
1) Remember the padStart(length, str) method! It works on strings.
*/
