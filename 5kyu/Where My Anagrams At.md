# [Where My Anagrams At?](https://www.codewars.com/kata/523a86aa4230ebb5420001e1)

## Description

What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

```js
'abba' & ('baab' == true);
'abba' & ('bbaa' == true);
'abba' & ('abbba' == false);
'abba' & ('abca' == false);
```

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

```js
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
```

**Note for Go**

For Go: Empty string slice is expected when there are no anagrams found.

## My Solution

**JavaScript**

```js
const anagrams = (word, words) => words.filter((w) => w.split('').sort().join('') === word.split('').sort().join(''));
```

### User Solution

**JavaScript**

```js
// Clever user solution:
String.prototype.sort = function () {
  return this.split('').sort().join('');
};
```

```js
function anagrams(word, words) {
  return words.filter(function (x) {
    return x.sort() === word.sort();
  });
}
```

```js
// Good user solution (and how I would do it outside of Codewars):
function anagrams(word, words) {
  word = word.split('').sort().join('');
  return words.filter(function (v) {
    return word == v.split('').sort().join('');
  });
}
```
