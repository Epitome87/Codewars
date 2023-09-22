# [Batman Quotes](https://www.codewars.com/kata/551614eb77dd9ee37100003e)

## Description

Batman & Robin have gotten into quite a pickle this time. The Joker has mixed up their iconic quotes and also replaced one of the characters in their names, with a number. They need help getting things back in order.

Implement the getQuote method which takes in an array of quotes, and a string comprised of letters and a single number (e.g. "Rob1n") where the number corresponds to their quote indexed in the passed in array.

Return the quote along with the character who said it:

```js
getQuote(
  ['I am vengeance. I am the night. I am Batman!', 'Holy haberdashery, Batman!', "Let's put a smile on that faaaceee!"],
  'Rob1n'
);
// =>  "Robin: Holy haberdashery, Batman!
```

Hint: You are guaranteed that the number in the passed in string is placed somewhere after the first character of the string. The quotes either belong to "Batman", "Robin", or "Joker".

## My Solution

**JavaScript**

```js
const getQuote = (quotes, hero) =>
  `${{ B: 'Batman', R: 'Robin', J: 'Joker' }[hero[0]]}: ${quotes[hero.match(/\d/)[0]]}`;
```

```js
const getQuote = (quotes, hero) => {
  const quoteIndex = hero.match(/\d/)[0];
  const quote = quotes[quoteIndex];
  return `${{ B: 'Batman', R: 'Robin', J: 'Joker' }[hero[0]]}: ${quote}`;
};
```

### User Solution

**JavaScript**

```js
const getQuote = (quotes, hero) => `${{ B: 'Batman', R: 'Robin', J: 'Joker' }[hero[0]]}: ${quotes[hero.match(/\d/)]}`;
```

## Takeaways

1. Note how the user's solution does not specify that we want to use the 0th element from the array returned by `match`. It appears an array with a single integer value can be used as the array index. For example, `[0, 1, 2][[1]]` would be a valid way to access the first index of the array.
