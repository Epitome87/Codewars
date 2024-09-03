# [Bingo Card](https://www.codewars.com/kata/566d5e2e57d8fae53c00000c)

## Description

After yet another dispute on their game the Bingo Association decides to change course and automate the game.

Can you help the association by writing a method to create a random Bingo card?

**Bingo Cards**

A Bingo card contains 24 unique and random numbers according to this scheme:

- 5 numbers from the B column in the range 1 to 15
- 5 numbers from the I column in the range 16 to 30
- 4 numbers from the N column in the range 31 to 45
- 5 numbers from the G column in the range 46 to 60
- 5 numbers from the O column in the range 61 to 75

**Task**

Write the function `get_card()`/`getCard()`. The card must be returned as an array of Bingo style numbers:

    [ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]

The numbers must be in the order of their column: B, I, N, G, O. Within the columns the order of the numbers is random.

![a bingo card](http://myfreebingocards.com/numbers/1-75/printable-bingo-card-generator/link_img.png)

## My Solution

**JavaScript**

```js
const getCard = () => {
  const result = [];
  const letters = ['B', 'I', 'N', 'G', 'O'];
  const used = new Set();

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (i === 2 && j === 2) continue;
      while (true) {
        const randomNum = 1 + Math.floor(Math.random() * 15) + i * 15;
        if (!used.has(randomNum)) {
          used.add(randomNum);
          result.push(`${letters[i]}${randomNum}`);
          break;
        }
      }
    }
  }

  return result;
};
```
