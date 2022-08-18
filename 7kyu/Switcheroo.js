/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

// My solution:
const switcheroo = (x) =>
  x
    .split('')
    .map((el) => (el === 'a' ? 'b' : el === 'b' ? 'a' : 'c'))
    .join('');

// Top user solution, using Regex:
const switcheroo = (x) => x.replace(/[ab]/g, (x) => (x == 'a' ? 'b' : 'a'));
