/*
Your task is simply to count the total number of lowercase letters in a string.

Examples
lowercaseCount("abc"); ===> 3

lowercaseCount("abcABC123"); ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3

lowercaseCount(""); ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26
*/

// My solution:
const lowercaseCount = (str) => {
  const matches = str.match(/[a-z]/g);
  return matches ? matches.length : 0;
};

// Top user solution:
function lowercaseCount(str) {
  return (str.match(/[a-z]/g) || []).length;
}

/* Takeaways:
1) Remember the user's way of conditonally handling calling .length on a potential undefined value!
*/
