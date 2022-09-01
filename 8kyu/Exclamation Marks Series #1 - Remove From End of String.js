/*
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"
*/

// My solution:
const remove = (string) =>
  string.endsWith('!') ? string.slice(0, -1) : string;

// Top user solution:
const remove = (s) => s.replace(/!$/, '');

/* Takeaways:
1) Remember the String.prototype.endsWith method!
2) Also remember how to check, in Regex, for the last character.
*/
