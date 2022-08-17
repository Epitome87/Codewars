/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/

// My solution:
function getMiddle(s) {
  //Code goes here!
  // If even, return 2 middle letters
  // If odd, return middle letter
  let position;
  let length = s.length;

  // If odd
  if (length % 2 === 1) {
    return s.charAt(Math.floor(length) / 2);
  } else {
    return s.substring(length / 2 - 1, length / 2 + 1);
  }
}

// Top user solution:
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// Another top user solution:
function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}

/* Takeways:
1) Note that there is a substr and a substring method! 
Both functions extracts a substring starting from an index.

The difference between substr and substring is that substr extracts the substring based on its length, whereas substring extracts the substring based on its start and end indexes.
*/
