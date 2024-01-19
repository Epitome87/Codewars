# [Define a Card Suit](https://www.codewars.com/kata/5a360620f28b82a711000047)

## Description

You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

```
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
```

## My Solution

**JavaScript**

```js
const defineSuit = (card) => ({ '♣': 'clubs', '♦': 'diamonds', '♥': 'hearts', '♠': 'spades' }[card.at(-1)]);
```

```js
const defineSuit = (card) => {
  if (card.includes('♣')) return 'clubs';
  if (card.includes('♦')) return 'diamonds';
  if (card.includes('♥')) return 'hearts';
  if (card.includes('♠')) return 'spades';
};
```

**Python**

```py
def define_suit(card):
    return {'C': 'clubs', 'D': 'diamonds', 'H': 'hearts', 'S': 'spades'}[card[-1]]
```
