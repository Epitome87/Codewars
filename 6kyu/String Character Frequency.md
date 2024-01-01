# [String Character Frequency](https://www.codewars.com/kata/5a1a514effe75fd63b0000f2)

## Description

In this Kata, we are going to determine if the count of each of the characters in a string can be equal if we remove a single character from that string.

For example:

```
solve('abba') = false -- if we remove any character, the count of each character will not be equal.
solve('abbba') = true -- if we remove one b, the count of each character becomes 2.
solve('aaaa') = true -- if we remove one character, the remaining characters have same count.
solve('wwwf') = true -- if we remove f, the remaining letters have same count.
```

More examples in the test cases. Empty string is not tested.

Good luck!

## My Solution

**JavaScript**

```js
const solve = (s) => {
  for (let char of s) {
    const substr = s.replace(char, '');
    const targetLength = substr.split(substr[0]).length;
    if ([...substr].every((c) => substr.split(c).length === targetLength)) return true;
  }

  return false;
};
```
