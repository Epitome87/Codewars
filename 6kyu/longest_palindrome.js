/*
Longest Palindrome
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/

// My eh solution:
const longestPalindrome = (s) => {
  if (!s) return 0;
  const palindromes = [];
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const substring = s.slice(i, j + 1);
      if (substring === [...substring].reverse().join('')) palindromes.push(substring.length);
    }
  }
  return palindromes.length ? Math.max(...palindromes) : 1;
};

// Top user solution (but very slow):
var longestPalindrome = function (s) {
  if (!s) return 0;
  for (let c = s.length; c > 0; c--) {
    for (let i = 0; i <= s.length - c; i++) {
      var check = s.substr(i, c);
      if (check === check.split('').reverse().join('')) return c;
    }
  }
};

/* Takeaways:
1) Although most solutions are very slow, the user solution at least breaks the for-loop once the first palindrome is found. This is because it iterates in such a way that ensures it checks the longest possible substrings first.
*/
