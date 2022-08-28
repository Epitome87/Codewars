/*
 */

/* Takeways: 
1) letterCount[letter]++ does not work?! Have to do letterCount[letter] += 1
*/

const permuteAPalindrome = (input) => {
  if (input.length === 1) return true;

  const letterCount = {};

  // Keep track of how many times each letter appears
  for (let letter of input) {
    if (letterCount[letter]) letterCount[letter] += 1;
    else letterCount[letter] = 1;
  }

  // If even input length, does each letter occur in multiples of 2?
  if (input.length % 2 === 0) {
    if (Object.values(letterCount).some((item) => item % 2 !== 0)) return false;
  } else {
    // If odd number of characters, do n - 1 letters occur in multiple of 2?
    if (Object.values(letterCount).filter((item) => item % 2 !== 0).length > 1) return false;
  }
  return true;
};

// Top user solution:
function permuteAPalindrome([...input], odd = 0) {
  new Set(input).forEach((a) => (input.filter((b) => b == a).length % 2 ? odd++ : 0));
  return odd < 2;
}

// Another good user solution, using Regex:
function permuteAPalindrome(input) {
  return (
    input
      .split('')
      .sort((a, b) => a.charCodeAt() - b.charCodeAt())
      .join('')
      .replace(/(.)\1/g, '').length <= 1
  );
}

/* Takeaways:
1) Even though I knew the logic behind solving this Kata rather quickly, it took way longer than it should have to implement! The iteration methods on objects seem buggy on Codewars, as it was working just fine using my REPL.
2) Even though a Set is an object-like structure, apparently you can use a .forEach on it!?
*/
