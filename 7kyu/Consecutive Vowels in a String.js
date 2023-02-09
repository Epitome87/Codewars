/*
This is better explained with a couple of examples:

You are given the string "agrtertyfikfmroyrntbvsukldkfa". The logic is that you start from the 'a' and make your way right. The next vowel is an 'e' and it is the consecutive vowel, then 'i' and so forth until you get to 'u'. If you keep moving right you find 'a' which happens to be the consecutive vowel. Return 6.
This is a slightly trickier example: you are given the string "erfaiekjudhyfimngukduo". As you move right you ignore all vowels until you get to the 'a', then ignore the rest until you get to the 'e', which is the consecutive vowel, and so forth until you get to the 'o'. Return 4.
Note
For this kata, the vowels are 'a', 'e', 'i', 'o', 'u', in that order. 'y' is not considered a vowel in this kata.

Good luck!
*/

// My one-line solution:
const getTheVowels = (word) =>
  [...word].reduce(
    (acc, curr) => (curr === 'aeiou'[acc % 5] ? acc + 1 : acc),
    0
  );

// My original solution:
const getTheVowels = (word) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let c of word) {
    if (c === vowels[count % vowels.length]) count++;
  }
  return count;
};
