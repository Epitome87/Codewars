## [longest_palindrome](https://www.codewars.com/kata/54bb6f887e5a80180900046b)

## Description

Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

**Example:**

```
"a" -> 1
"aab" -> 2
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
```

## My Solution

**JavaScript**

```js
const longestPalindrome = (s) => {
  if (!s) return 0;

  let result = 1;

  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const substring = s.slice(i, j + 1);
      if (isPalindrome(substring)) result = Math.max(result, substring.length);
    }
  }

  return result;
};

const isPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (s[left] !== s[right]) return false;

    left++;
    right--;
  }

  return true;
};
```

```js
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
```

**Python**

```py
def longest_palindrome (s):
    longest = 0

    # i is our center point of palindrome
    for i in range(len(s)):
        # This inner loop of j = 0 and j = 1 helps us deal with odd and even palindromes
        for j in range(2):
            left = i
            right = i + j   # i + 0 = Odd, i + 1 = Even length palindrome

            # Expand window while a palindrome exists
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
                longest = max(longest, right - left - 1)

    return longest
```

### User Solution

**JavaScript**

```js
var longestPalindrome = function (s) {
  if (!s) return 0;
  for (let c = s.length; c > 0; c--) {
    for (let i = 0; i <= s.length - c; i++) {
      var check = s.substr(i, c);
      if (check === check.split('').reverse().join('')) return c;
    }
  }
};
```

## Takeaways

1. Although most solutions are very slow, the user solution at least breaks the for-loop once the first palindrome is found. This is because it iterates in such a way that ensures it checks the longest possible substrings first.
