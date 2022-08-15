/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

// My solution:
const pigIt = (str) =>
  str
    .split(' ')
    .map((word) => ('.!?'.includes(word) ? word : `${word.substring(1)}${word.substring(0, 1)}ay`))
    .join(' ');

// Clever user solution:
function pigIt(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, '$2$1ay$3');
}

/* Takeways:
1) Learn Regex better!
2) Remember, it's .substring(), not subString()
*/
