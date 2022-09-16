/*
Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)

"Yes" --> "Yes?" 
"No?" --> "No?"
*/

// My solution:
const ensureQuestion = (str) => (str.slice(-1) === '?' ? str : str.concat('?'));

// Top user solution:
const ensureQuestion = (s) => (s.endsWith('?') ? s : s + '?');

/* Takeaways:
1) Remember the String.prototype.endsWith(str) method!
*/
