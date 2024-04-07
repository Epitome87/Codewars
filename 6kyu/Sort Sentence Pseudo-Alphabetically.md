# [Sort Sentence Pseudo-Alphabetically](https://www.codewars.com/kata/52dffa05467ee54b93000712)

## Description

Given a standard english sentence passed in as a string, write a method that will return a sentence made up of the same words, but sorted by their first letter. However, the method of sorting has a twist to it:

- All words that begin with a lower case letter should be at the beginning of the sorted sentence, and sorted in ascending order.
- All words that begin with an upper case letter should come after that, and should be sorted in descending order.

If a word appears multiple times in the sentence, it should be returned multiple times in the sorted sentence. Any punctuation must be discarded.

**Example**

For example, given the input string `"Land of the Old Thirteen! Massachusetts land! land of Vermont and Connecticut!"`, your method should return "`and land land of of the Vermont Thirteen Old Massachusetts Land Connecticut"`. Lower case letters are sorted `a -> l -> l -> o -> o -> t` and upper case letters are sorted `V -> T -> O -> M -> L -> C`.

## My Solution

**JavaScript**

```js
const sort = (sentence) => {
  const words = sentence.replace(/[^a-z ]/gi, '').split(' ');
  const lowers = words.filter((word) => /^[a-z]/.test(word));
  const uppers = words.filter((word) => /^[A-Z]/.test(word));
  const lowersSorted = lowers.sort((a, b) => a.localeCompare(b));
  const uppersSorted = uppers.sort((a, b) => b.localeCompare(a));
  return [...lowersSorted, ...uppersSorted].join(' ');
};
```

### User Solution

**JavaScript**

```js
const sort = (sentence) =>
  [...(sentence.match(/\b[a-z]+/g) || []).sort(), ...(sentence.match(/[A-Z][a-z]*/g) || []).sort().reverse()].join(` `);
```

```js
function sort(sentence) {
  return sentence
    .replace(/[^\w\s]/g, '')
    .split(' ')
    .sort(function (a, b) {
      var aLow = a.toLowerCase(),
        bLow = b.toLowerCase();
      if (a == aLow && b != bLow) return -1;
      if (a != aLow && b == bLow) return 1;
      return a == aLow ? a.localeCompare(b) : -1 * a.localeCompare(b);
    })
    .join(' ');
}
```
