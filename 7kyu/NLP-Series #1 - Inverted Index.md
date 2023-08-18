# [NLP-Series #1 - Inverted Index](https://www.codewars.com/kata/5af823451839f1768f00009d)

## Description

You are given an array of documents (strings), a term (string), and two booleans finetuning your indexing operation. Return an array containing the document IDs (1-based indices of documents in the array), where the term occurs, sorted in ascending order.

Booleans:

1. CaseSensitive: test matches test, but not Test
   Not CaseSensitive: test matches both test and Test

2. Exact Match: test matches test and .test!, but not attest or test42
   Not Exact Match: test matches both test and attest

Example:

```
buildInvertedIndex(["Sign", "sign", "Signature", "Sign-ature"], "Sign", true, true)

return [1,4]
```

NLP-Series:
Part 1: [Inverted Index](https://www.codewars.com/kata/5af823451839f1768f00009d/train/javascript)

## My Solution

**JavaScript**

```js
const buildInvertedIndex = (collection, term, caseSensitive, exactMatch) =>
  Object.keys(collection)
    .filter((key) => new RegExp(exactMatch ? `\\b${term}\\b` : term, caseSensitive ? '' : 'i').test(collection[key]))
    .map((i) => +i + 1);
```

### User Solution

**JavaScript**

```js
function buildInvertedIndex(collection, term, caseSensitive, exactMatch) {
  let regex = new RegExp(exactMatch ? '\\b' + term + '\\b' : term, caseSensitive ? '' : 'i'),
    matches = [];

  for (let i = 0; i < collection.length; i++) if (regex.test(collection[i])) matches.push(i + 1);

  return matches;
}
```
