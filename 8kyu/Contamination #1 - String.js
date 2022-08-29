/*
An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

Example
text before = "abc"
character   = "z"
text after  = "zzz"
*/

// My solution:
const contamination = (text, char) =>
  text
    .split('')
    .map((c) => char)
    .join('');

// Top user solutions:
function contamination(text, char) {
  return text.split('').fill(char).join('');
}

function contamination(text, char) {
  return char.repeat(text.length);
}

function contamination(text, char) {
  return text.replace(/./g, char);
}

/* Takeaways:
1) Don't forget about the repeat and replace methods for similar challenges!
2) Try to use the Array.fill method more!
Array.prototype.fill()
The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
*/
