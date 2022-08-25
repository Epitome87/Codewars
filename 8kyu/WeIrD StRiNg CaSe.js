/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
*/

// My solution:
const toWeirdCase = (string) =>
  string
    .split(' ')
    .map((w, i) =>
      w
        .split('')
        .map((c, i) => (i % 2 ? c.toLowerCase() : c.toUpperCase()))
        .join('')
    )
    .join(' ');

// My favorite user solution, due to readability:
function toWeirdCaseCharacter(chr, index) {
  return index % 2 ? chr.toLowerCase() : chr.toUpperCase();
}

function toWeirdCaseWord(word) {
  return word.split('').map(toWeirdCaseCharacter).join('');
}

function toWeirdCase(string) {
  return string.split(' ').map(toWeirdCaseWord).join(' ');
}

// Clever user solution using Regex:
function toWeirdCase(string) {
  return string.replace(/(\w{1,2})/g, (m) => m[0].toUpperCase() + m.slice(1));
}

/* Takeways:
1) Mapping through a word, and then inner mapping through each character seems to be a common pattern -- learn it!
*/
