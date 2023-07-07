# [Palindrome Pairs](https://www.codewars.com/kata/5772ded6914da62b4b0000f8)

## Description

Given a list of unique words. Find all pairs of distinct indices (i, j) in the given list so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

Examples:

```js
["bat", "tab", "cat"] # [[0, 1], [1, 0]]
["dog", "cow", "tap", "god", "pat"] # [[0, 3], [2, 4], [3, 0], [4, 2]]
["abcd", "dcba", "lls", "s", "sssll"] # [[0, 1], [1, 0], [2, 4], [3, 2]]
```

Non-string inputs should be converted to strings.

Return an array of arrays containing pairs of distinct indices that form palindromes. Pairs should be returned in the order they appear in the original list.

## My Solution

**JavaScript**

```js
const palindromePairs = (words) => {
  const strArr = [...words.map((el) => el.toString())];
  const pairs = [];

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && strArr[i] + strArr[j] === [...strArr[i], ...strArr[j]].reverse().join('')) pairs.push([i, j]);
    }
  }

  return pairs;
};
```

### User Solution

**JavaScript**

```js
const palindromePairs = (words) =>
  words
    .map(String)
    .reduce(
      (pre, val, idx) => [
        ...pre,
        ...words.reduce(
          (p, v, i) => (i !== idx && val + v === [...(val + v)].reverse().join(``) ? [...p, [idx, i]] : p),
          []
        ),
      ],
      []
    );
```
