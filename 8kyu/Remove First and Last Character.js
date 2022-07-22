/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

// My solution:
const removeChar = (str) => str.substring(1, str.length - 1);

// Best user solution, and what I attempted using substring (not realizing it doesn't handle negative values the same way slice does):
// const removeChar = (str) => str.slice(1, -1);
