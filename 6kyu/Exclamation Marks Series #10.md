# [Exclamation Marks Series #10](https://www.codewars.com/kata/57fb04649610ce369a0006b8)

## Description

Remove the minimum number of exclamation marks from the start/end of each word in the sentence to make their amount equal on both sides.

**Notes:**

- Words are separated with spaces
- Each word will include at least 1 letter
- There will be no exclamation marks in the middle of a word

**Examples**

```js
remove('Hi!') === 'Hi';
remove('!Hi! Hi!') === '!Hi! Hi';
remove('!!Hi! !Hi!!') === '!Hi! !Hi!';
remove('!!!!Hi!! !!!!Hi !Hi!!!') === '!!Hi!! Hi !Hi!';
```

## My Solution

**JavaScript**

```js
const remove = (str) => {
  return str
    .split(' ')
    .map((word) => {
      const startMatch = word.match(/^!+/);
      const endMatch = word.match(/!+$/);
      const startCount = startMatch ? startMatch[0].length : 0;
      const endCount = endMatch ? endMatch[0].length : 0;
      const cleanedWord = word.replace(/!*(.)!*/g, '$1');
      const minCount = Math.min(startCount, endCount);
      return '!'.repeat(minCount) + cleanedWord + '!'.repeat(minCount);
    })
    .join(' ');
};
```

**Python**

```py
import re

def remove(s):
    return re.sub(r"!*?((!*)\w+\2)!*", lambda match: match[1], s)
```

### User Solution

**JavaScript**

```js
function remove(s) {
  return s.replace(/!*?((!*)\w+\2)!*/g, '$1');
}
```

## Takeaways

1. User explanation for the regex solution:

```
Breaking the regex into parts: !*? - lazy match for extra ! to the left
( - beginning the first (outer) capturing group (!*) - the second (inner) capturing group matches any number of ! to the left of a word \w+ - matches the word \2 - reference to the second capturing group. This means that we'll match an equal number of ! to the left and to the right of the word. Since !*? is lazy and the inner !* is greedy, this means the regex will match as many exclamation marks as possible as long as they appear in equal number before and after the word ) - closing the first capturing group !* - match remaining ! to the right $1 - replaces the entire match with the first capturing group, which contains the word and the balanced !.
```
