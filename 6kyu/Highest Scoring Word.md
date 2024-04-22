# [Highest Scoring Word](https://www.codewars.com/kata/57eb8fcdf670e99d9b000272)

## Description

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: `a = 1, b = 2, c = 3` etc.

For example, the score of `abad` is `8` (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

## My Solution

**JavaScript**

```js
const high = (x) => {
  const words = x.split(' ');
  const scores = words.map((word) => [...word].reduce((acc, cur) => acc + cur.charCodeAt() - 96, 0));
  return words[scores.indexOf(Math.max(...scores))];
};
```

```js
function high(x) {
  const words = x.split(' ');

  let highestCount = 0;
  let highestWord = '';

  for (let i = 0; i < words.length; i++) {
    let count = words[i].split('').reduce((acc, cur) => acc + cur.charCodeAt(0) - 96, 0);
    if (count > highestCount) {
      highestWord = words[i];
      highestCount = count;
    }
  }

  return highestWord;
}
```

**Python**

```py
def high(x):
    words = x.split()
    scores = [sum(ord(char) - 96 for char in word) for word in words]
    return words[scores.index(max(scores))]
```

### User Solution

**Python**

```py
def high(x):
    return max(x.split(), key=lambda k: sum(ord(c) - 96 for c in k))
```
