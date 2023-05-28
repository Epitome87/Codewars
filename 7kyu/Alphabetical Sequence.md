# [Alpabetical Sequence](https://www.codewars.com/kata/5bd00c99dbc73908bb00057a)

## Description

In this kata you will be given a random string of letters and tasked with returning them as a string of comma-separated sequences sorted alphabetically, with each sequence starting with an uppercase character followed by n-1 lowercase characters, where n is the letter's alphabet position 1-26.

**Example**

alphaSeq("ZpglnRxqenU") -> "Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz"

**Technical Details**

- The string will include only letters.
- The first letter of each sequence is uppercase followed by n-1 lowercase.
- Each sequence is separated with a comma.
- Return value needs to be a string.

## My Solution

**JavaScript**

```js
const alphaSeq = (str) =>
  [...str.toLowerCase()]
    .sort()
    .map((el) => `${el.toUpperCase()}${el.repeat(el.charCodeAt(0) - 97)}`)
    .join(',');
```
