# [Is it a Vowel on this Position?](https://www.codewars.com/kata/5a2b7edcb6486a856e00005b)

## Description

Check if it is a vowel(a, e, i, o, u,) on the n position in a string (the first argument). Don't forget about uppercase.

A few cases:

```
{
checkVowel('cat', 1)  ->   true // 'a' is a vowel
checkVowel('cat', 0)  ->   false // 'c' is not a vowel
checkVowel('cat', 4)  ->   false // this position doesn't exist
}
```

P.S. If n < 0, return false

## My Solution

**JavaScript**

```js
const checkVowel = (string, position) => /[aeiou]/i.test(string[position] || 0);
```

### User Solution

**JavaScript**

```js
const checkVowel = (s, p) => 'aeiouAEIOU'.includes(s[p]);
```

## Takeaways

1. The result of `regexp.test(arg)` when arg is `undefined` will treat `undefined` as if it were the string `"undefined"`. In this case, a vowel would be found (as there is a u, e, and i). By using the logical OR operator we can fallback to a string that does not contain a vowel, so the result of `test` is accurate.
