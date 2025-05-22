# [DNA GC-content](https://www.codewars.com/kata/5747a9bbe2fab9a0c400012f)

## Description

The four bases found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).

In genetics, GC-content is the percentage of Guanine (G) and Cytosine (C) bases on a DNA molecule that are either guanine or cytosine.

Given a DNA sequence (a string) return the GC-content in percent.

For more information about GC-content you can take a look to [wikipedia GC-content](https://en.wikipedia.org/wiki/GC-content).

**For example**: the GC-content of the following DNA sequence is 50%: "AAATTTCCCGGG".

**Note**: You can take a look to my others bio-info kata [here](http://www.codewars.com/users/nbeck/authored)

## My Solution

**JavaScript**

```js
const gcContent = (dna) => (100 * (dna.match(/[GC]/g) || []).length) / (dna.length || 1);
```
