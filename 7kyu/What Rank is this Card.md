# [What Rank is this Card?](https://www.codewars.com/kata/59cbcb4523dacc2ccd000030)

## Description

What is the rank of a playing card? The function takes a string like '2c' or 'Kh' and returns a value based on rank of the card. The first character corresponds to the rank of the card and the second character corresponds to the suit of the card. Cards 2-9 should return the corresponding number. T returns 10, J => 11, Q => 12, K => 13 and A => 14. Otherwise the rank should be returned as 0.

For example:

    rank('2c') == 2;
    rank('Tc') == 10;
    rank('As') == 14;
    rank('1c') == 0; // There is no card '1'

Suits can be disregarded.

## My Solution

**JavaScript**

```js
const rank = (card) => ({ 1: 0, T: 10, J: 11, Q: 12, K: 13, A: 14 }[card[0]] ?? (parseInt(card) || 0));
```

### User Solution

**JavaScript**

```js
function rank(card) {
  return ['', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'].indexOf(card[0]) + 1;
}
```
