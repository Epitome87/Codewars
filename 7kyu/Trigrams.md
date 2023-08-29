# [Trigrams](https://www.codewars.com/kata/55d8dc4c8e629e55dc000068)

## Description

Trigrams are a special case of the n-gram, where n is 3. One trigram is a continous sequence of 3 chars in phrase. Wikipedia

- return all trigrams for the given phrase
- replace spaces with underscore (\_)
- return an empty string for phrases shorter than 3

Example:

```js
"the quick red" --> "the he_ e_q _qu qui uic ick ck_ k_r _re red"
```

## My Solution

**JavaScript**

```js
const trigrams = (phrase) =>
  [...phrase.replace(/ /g, '_')]
    .map((c, idx, arr) => arr.slice(idx, idx + 3).join(''))
    .slice(0, -2)
    .join(' ');
```

```js
const trigrams = (phrase) => {
  const result = [];

  phrase = phrase.replace(/ /g, '_');

  for (let i = 0; i < phrase.length - 2; i++) {
    result.push(phrase.slice(i, i + 3));
  }

  return result.join(' ');
};
```

### User Solution

**JavaScript**

```js
function trigrams(phrase) {
  return [...phrase.slice(0, -2)].map((_, i) => phrase.substr(i, 3).replace(/ /g, '_')).join(' ');
}
```
