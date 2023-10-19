# [Help Mr. E](https://www.codewars.com/kata/56ce2f90aa4ac7a4770019fa)

## Description

Mr. E Ven only likes even length words. Please create a translator so that he doesn't have to hear those pesky odd length words. For some reason he also hates punctuation, he likes his sentences to flow.

Your translator should take in a string and output it with all odd length words having an extra letter (the last letter in the word). It should also remove all punctuation (.,?!) as well as any underscores (\_).

"How did we end up here? We go?" translated becomes-> "Howw didd we endd up here We go"

## My Solution

**JavaScript**

```js
const evenator = (str) =>
  str
    .replace(/[.,?!_]/gi, '')
    .split(' ')
    .map((v) => (v.length % 2 ? v + v[v.length - 1] : v))
    .join(' ');
```
