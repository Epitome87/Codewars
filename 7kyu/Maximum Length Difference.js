/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string
*/

// My straightforward solution:
const mxdiflg = (a1, a2) => {
  if (!a1.length || !a2.length) return -1;

  const sorted1 = [...a1].sort((a, b) => a.length - b.length);
  const min1 = sorted1[0].length;
  const max1 = sorted1[sorted1.length - 1].length;

  const sorted2 = [...a2].sort((a, b) => a.length - b.length);
  const min2 = sorted2[0].length;
  const max2 = sorted2[sorted2.length - 1].length;

  if (max1 - min2 > max2 - min1) return max1 - min2;
  else return max2 - min1;
};

// Top user solution:
function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;
  let l1 = a1.map((str) => str.length);
  let l2 = a2.map((str) => str.length);
  return Math.max(
    Math.max(...l1) - Math.min(...l2),
    Math.max(...l2) - Math.min(...l1)
  );
}
