# [Are We Alternate?](https://www.codewars.com/kata/59325dc15dbb44b2440000af)

## Description

Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

```js
isAlt('amazon');
// true
isAlt('apple');
// false
isAlt('banana');
// true
```

Arguments consist of only lowercase letters.

## My Solution

**JavaScript**

```js
const isAlt = (word) => word.length < 2 || /^([^aeiou][aeiou])+[^aeiou]?$|^([aeiou][^aeiou])+[aeiou]?$/g.test(word);
```

### User Solution

**JavaScript**

```js
function isAlt(word) {
  return !/[aeiou]{2}|[^aeiou]{2}/.test(word);
}
```

# Takeaways

1. With RegExp (and in general), consider looking for the falsy case rather than what we want to be true from an expression. The logic may be a lot simpler!
