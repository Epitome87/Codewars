/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

// My solution, which I know isn't good! As of 7/5/2022, this was my hardest Kata I attempted.
const duplicateEncode = (word) => {
  const wordObject = {};

  for (let character of word) {
    let char = character.toLowerCase();
    if (wordObject[char]) wordObject[char] = wordObject[char] += 1;
    else wordObject[char] = 1;
  }

  wordObject;

  return word
    .split('')
    .map((char) => (wordObject[char.toLowerCase()] > 1 ? ')' : '('))
    .join('');
};

// Top user solution:
/*
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')';
    })
    .join('');
}
*/

// TODO: Some observations on top solution. It lowerCases intelligently at the start, to avoid doing it multiple times like mine. It makes use of indexOf and lastIndexOf, using the fact that if they are different, the character must be present at least twice!
