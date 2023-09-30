# [Sort Deck of Cards](https://www.codewars.com/kata/56f399b59821793533000683)

## Description

Write a function sort_cards() that sorts a shuffled list of cards, so that any given list of cards is sorted by rank, no matter the starting collection.

All cards in the list are represented as strings, so that sorted list of cards looks like this:

```
['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']
```

Example:

```
>>> sort_cards(['3', '9', 'A', '5', 'T', '8', '2', '4', 'Q', '7', 'J', '6', 'K'])
['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']
```

Hint: Tests will have many occurrences of same rank cards, as well as vary in length. You can assume though, that input list is always going to have at least 1 element.

## My Solution

**JavaScript**

```js
const sortCards = (cards) => [...cards].sort((a, b) => 'A23456789TJQK'.indexOf(a) - 'A23456789TJQK'.indexOf(b));
```

```js
const sortCards = (array) => {
  const order = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K'];
  return [...array].sort((a, b) => order.indexOf(a) - order.indexOf(b));
};
```
