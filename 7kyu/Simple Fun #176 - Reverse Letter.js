/*
Task
Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string
*/

// My solution:
const reverseLetter = (str) => [...str.replace(/[^a-z]/gi, '')].reverse().join('');

// Clever user solution:
const reverseLetter = (str) => str.match(/[a-z]/g).reverse().join('');

/* Takeways:
1) Keep the String.prototype.match() property in mind. It returns an array that matches the Regex.
*/
