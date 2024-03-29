/*
Create a function that takes a string as a parameter and does the following, in this order:

Replaces every letter with the letter following it in the alphabet (see note below)
Makes any vowels capital
Makes any consonants lower case
Note:

the alphabet should wrap around, so Z becomes A
in this kata, y isn't considered as a vowel.
So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)
*/

// My solution:
function changer(str) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  str = str.toLowerCase();
  const nextLetter = [...str].map((letter) =>
    alpha.includes(letter) ? alpha[(alpha.indexOf(letter) + 1) % 26] : letter
  );
  const capVowels = nextLetter.map((letter) =>
    'aeiou'.includes(letter) ? letter.toUpperCase() : letter
  );
  return capVowels.join('');
}

// Top user solution:
const changer = (str) =>
  str
    .toLowerCase()
    .replace(/[a-z]/g, (m) =>
      String.fromCharCode(((m.charCodeAt(0) - 96) % 26) + 97)
    )
    .replace(/[aeiou]/g, (m) => m.toUpperCase());

// Clever user solution:
const letters = 'abcdEefghIijklmnOopqrstUuvwxyzA';
const changer = (s) =>
  s.replace(/[a-z]/gi, (c) => letters[letters.indexOf(c.toLowerCase()) + 1]);
