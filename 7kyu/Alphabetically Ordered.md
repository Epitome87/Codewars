# [Alphabetically Ordered](https://www.codewars.com/kata/5a8059b1fd577709860000f6)

## Description

Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.

**Examples (input -> output)**

- "kata" -> false ('a' comes after 'k')
- "ant" -> true (all characters are in alphabetical order)

## My Solution

**JavaScript**

```js
const alphabetic = (s) => s === [...s].sort().join('');
```

### User Solution

**JavaScript**

```js
function alphabetic(s) {
  for (let i = 1; i < s.length; i++) {
    if (s[i] < s[i - 1]) {
      return false;
    }
  }
  return true;
}
```
