/*
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
*/

// My solution:
const correctPolishLetters = (str) => str.replace(/[ąćęłńóśźż]/g, (c) => 'acelnoszz'['ąćęłńóśźż'.indexOf(c)]);

// Top user solution:
function correctPolishLetters(string) {
  var dict = { ą: 'a', ć: 'c', ę: 'e', ł: 'l', ń: 'n', ó: 'o', ś: 's', ź: 'z', ż: 'z' };
  return string.replace(/[ąćęłńóśźż]/g, (match) => dict[match]);
}

// My favorite user solution:
var polishLetters = {
  ą: 'a',
  ć: 'c',
  ę: 'e',
  ł: 'l',
  ń: 'n',
  ó: 'o',
  ś: 's',
  ź: 'z',
  ż: 'z',
};

function correctPolishLetters(string) {
  return string
    .split('')
    .map((c) => polishLetters[c] || c)
    .join('');
}

/* Takeaways:
1) This one was rather challenging for me!
*/
