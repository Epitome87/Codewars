# [ReOrdering](https://www.codewars.com/kata/5785cd91a1b8d5c06e000007)

## Description

There is a sentence which has a mistake in its ordering.

The part with a capital letter should be the first word.

Please build a function for re-ordering

Examples

```
>>> re_ordering('ming Yao')
'Yao ming'

>>> re_ordering('Mano donowana')
'Mano donowana'

>>> re_ordering('wario LoBan hello')
'LoBan wario hello'

>>> re_ordering('bull color pig Patrick')
'Patrick bull color pig'
```

## My Solution

**JavaScript**

```js
const reOrdering = (text) => {
  const words = text.split(' ');
  const capitalWord = words.find((word) => word[0] === word[0].toUpperCase());
  return [capitalWord, ...words.filter((word) => word !== capitalWord)].join(' ');
};
```

### User Solution

**JavaScript**

```js
const reOrdering = (t) => t.replace(/^(.+)\s([A-Z][^\s]*)(.*)$/, '$2 $1$3');
```
