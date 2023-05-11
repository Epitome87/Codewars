# [Do You Speak Retsec?](https://www.codewars.com/kata/5516ab668915478845000780)

## Description

You and your friends want to play undercover agents. In order to exchange your secret messages, you've come up with the following system: you take the word, cut it in half, and place the first half behind the latter. If the word has an uneven number of characters, you leave the middle at its previous place:

retsec examples

That way, you'll be able to exchange your messages in private.

**Task**

You're given a single word. Your task is to swap the halves. If the word has an uneven length, leave the character in the middle at that position and swap the chunks around it.

**Examples**

```js
reverseByCenter('secret') == 'retsec'; // no center character
reverseByCenter('agent') == 'nteag'; // center character is "e"
```

**Remarks**

Don't use this to actually exchange messages in private.

## My Solution

**JavaScript**

```js
const reverseByCenter = (s) =>
  s.slice(Math.ceil(s.length / 2)) + (s.length % 2 ? s[(s.length / 2) ^ 0] : '') + s.slice(0, Math.floor(s.length / 2));
```

```js
const reverseByCenter = (s) => {
  const first = s.slice(0, Math.floor(s.length / 2));
  const second = s.slice(Math.ceil(s.length / 2));
  return second + (s.length % 2 ? s[(s.length / 2) ^ 0] : '') + first;
};
```

### User Solution

**JavaScript**

```js
function reverseByCenter(s) {
  var n = s.length / 2;
  return s.slice(Math.ceil(n)) + s.slice(Math.floor(n), Math.ceil(n)) + s.slice(0, Math.floor(n));
}
```
