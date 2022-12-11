/*
Return an output string that translates an input string s/$s by replacing each character in s/$s with a number representing the number of times that character occurs in s/$s and separating each number with the character(s) sep/$sep.

freq_seq("hello world", "-"); // => "1-1-3-3-2-1-1-2-1-3-1"
freq_seq("19999999", ":"); // => "1:7:7:7:7:7:7:7"
freq_seq("^^^**$", "x"); // => "3x3x3x2x2x1"
*/

// My solution:
const freqSeq = (str, sep) => {
  const count = str.split('').reduce((acc, curr) => ({ ...acc, [curr]: (acc[curr] || 0) + 1 }), {});
  return str
    .split('')
    .map((x) => count[x])
    .join(sep);
};

// Clever user solution:
const freqSeq = (s, sep) =>
  s
    .split('')
    .map((i) => s.split(i).length - 1)
    .join(sep);
