/*
Write a function

vowel2index(str)
that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
E.g:

vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''
Your function should be case insensitive to the vowels.
*/

// My solution:
const vowel2index = (str) =>
  str
    .split('')
    .map((c, idx) => ('aeiou'.includes(c.toLowerCase()) ? idx + 1 : c))
    .join('');

// Top user solution:
function vowel2index(str) {
  return str.replace(/[aeiou]/gi, (m, i) => i + 1);
}

/* Takeaways*
1) Note that the replace function can accept a function as its second parameter, letting you specify what to replace each instance with in a more flexible way (such as using the value being replaced, its index, etc).
*/
