/*
Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.
*/

// My eh solution:
const gordon = (a) =>
  a
    .toUpperCase()
    .split(' ')
    .map(
      (word) =>
        word
          .split('')
          .map((letter) => (letter === 'A' ? '@' : 'AEIOU'.includes(letter) ? '*' : letter))
          .join('') + '!!!!'
    )
    .join(' ');

// Top user solution:
function gordon(ramsay) {
  return ramsay
    .toUpperCase()
    .replace(/\w+/g, '$&!!!!')
    .replace(/[AEIOU]/g, (v) => (v == 'A' ? '@' : '*'));
}
