/*
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!

If you like substring Katas, please try:

Non-even substrings

Vowel-consonant lexicon
*/

// My solution:
const solve = (s) => Math.max(...s.match(/[aeiou]+/gi).map((n) => n.length));

// Top user solution:
function solve(s) {
  let cur = 0;
  let max = 0;
  for (let i = 0; i < s.length; ++i) {
    if ('aeiou'.includes(s[i])) {
      cur++;
      if (cur > max) {
        max = cur;
      }
    } else {
      cur = 0;
    }
  }
  return max;
}
