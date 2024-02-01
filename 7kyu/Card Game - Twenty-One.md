# [Card Game: Twenty-One](https://www.codewars.com/kata/5a34c307f28b829b3d000045)

## Description

You have three input arguments -> actually cards -> actually strings :)

Let's play the game 'Twenty-one' creating a function that returns:

- 'twenty-one' ---> if the sum of cards equals 21
- 'more' ---> if the sum of cards more than 21
- 'less' ---> if the sum of cards less than 21

One nuance - we have lost spades cards of our deck and now it look like (preloaded as deck) that:

```
deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥'];
```

A few games:

```
('3♣', 'J♦', 'Q♥') -> 'less' // 3 + 2 + 3 < 21
('7♣', '7♦', '7♥') -> 'twenty-one' // 7 + 7 + 7  == 21
('10♣', 'Q♣','9♦') -> 'more' // 10 + 3 + 9 > 21
```

Some details:

- the result does not depend on suit
- ace can be only 11 points
- points of J,Q,K are 2,3,4

## My Solution

**JavaScript**

```js
const twentyOne = (...cards) => (
  (sum = cards.reduce((acc, cur) => acc + (+{ J: 2, Q: 3, K: 4, A: 11 }[cur.slice(0, -1)] || +cur.slice(0, -1)), 0)),
  sum < 21 ? 'less' : sum > 21 ? 'more' : 'twenty-one'
);
```

```js
const twentyOne = (...cards) => {
  const values = cards.map((card) => +{ J: 2, Q: 3, K: 4, A: 11 }[card.slice(0, -1)] || +card.slice(0, -1));
  const sum = values.reduce((acc, cur) => acc + cur, 0);
  return sum < 21 ? 'less' : sum > 21 ? 'more' : 'twenty-one';
};
```
