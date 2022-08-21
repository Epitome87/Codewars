/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

// My eh solution:
const toCamelCase = (str) =>
  str
    .split(/[-_]/)
    .map((word, index) => (index > 0 ? word[0].toUpperCase() + word.slice(1) : word))
    .join('');

// Clever user solution:
function toCamelCase(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}

// Clever user solution:
function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

/* Takeways:
1) Learn Regex! In this case, the Regex is saying find either - or _, and then "(.)" is setting a capture group that will match any character (so the character following a - or _) which we then capitalize.
*/
