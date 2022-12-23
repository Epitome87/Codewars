/*
Complete the solution so that it returns the number of times the search_text is found within the full_text.

Usage example:

solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1
*/

// My solution:
const solution = (fullText, searchText) => (fullText.match(new RegExp(searchText, 'g')) || []).length;

// Top user solution:
function solution(fullText, searchText) {
  return fullText.split(searchText).length - 1;
}
