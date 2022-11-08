/*
Create a function which accepts one arbitrary string as an argument, and return a string of length 26.

The objective is to set each of the 26 characters of the output string to either '1' or '0' based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).

So if an 'a' or an 'A' appears anywhere in the input string (any number of times), set the first character of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, set the second character to '1', and so on for the rest of the alphabet.

For instance:

"a   **&  cZ"  =>  "10100000000000000000000001"
*/

// My solution:
const change = (str) =>
  Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97))
    .map((c) => (str.toLowerCase().includes(c) ? 1 : 0))
    .join('');

// My other solution:
const change = (str) =>
  'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .map((c) => (str.toLowerCase().includes(c) ? 1 : 0))
    .join('');

// Helpful user solution:
const change = (string) =>
  [...Array(26)].map((_, idx) => +new RegExp(String.fromCharCode(65 + idx), `i`).test(string)).join(``);

/* Takeaways:
1) In the helpful user solution above, he makes use of new RegExp. This is exactly what I was looking for! I realized in order to use the .test method on a Regex expression, I would somehow need a dynamic Regex expression, which is not achievable using the [].test() syntax (that I know of). 
2) I could have also skipped the rather lengthy Array.from() syntax and simply used: [...Array(26)], since its behavior of creating an array full of undefined values is not an issue if we are not concerned with its starting values.
*/
