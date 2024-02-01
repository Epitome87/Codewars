# [Reverse Complement (DNA)](https://www.codewars.com/kata/574a7d0dca4a8a0fbe000100)

## Description

In genetic the reverse complement of a sequence is formed by reversing the sequence and then taking the complement of each symbol.

The four nucleotides in DNA is Adenine (A), Cytosine (C), Guanine (G) and Thymine (Thymine).

- A is the complement of T
- C is the complement of G.

This is a bi-directional relation so:

- T is the complement of A
- G is the complement of C.

For this kata you need to complete the reverse complement function that take a DNA string and return the reverse complement string.

Note: You need to take care of lower and upper case. And if a sequence conatains some invalid characters you need to return "Invalid sequence".

This kata is based on the following one but with a little step in addition.

## My Solution

**JavaScript**

```js
const reverseComplement = (dna) =>
  /[^ACGT]/.test(dna)
    ? 'Invalid sequence'
    : [...dna]
        .reverse()
        .map((s) => ({ A: 'T', T: 'A', C: 'G', G: 'C' }[s]))
        .join('');
```

```js
const reverseComplement = (dna) => {
  if (/[^ACGT]/.test(dna)) return 'Invalid sequence';
  const pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };
  return [...dna]
    .reverse()
    .map((s) => pairs[s])
    .join('');
};
```
