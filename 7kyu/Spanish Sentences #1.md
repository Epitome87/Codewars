# [Spanish Sentences #1](https://www.codewars.com/kata/5a30ae82ee1aaef63300001a)

## Description

In Spanish, sentences not only end with exclamation and question marks, but also begin with them (actually flipped over version).

It looks like:

```
¿Cómo estás?      -> How are you?
¡Es maravilloso!  -> It is wonderful!
```

Keeping in mind only the above-mentioned fact, your task is to find out how many sentences in unput array are "spanish" and return '¡n spanish sentence(s) here and hasta la vista, baby!'

For example:

```
spanishSent(['How are you?', '¿How are you?',  'It is you', '¡It is you', '¡You are hot!'])  -> '¡2 spanish sentences here and hasta la vista, baby!'

spanishSent(['¿How are you', '¿How are you?', '!It is me', 'You are.'])  -> '¡1 spanish sentence here and hasta la vista, baby!'
```

P.S. Array's length > 0.

## My Solution

**JavaScript**

```js
const spanishSent = (arr) => (
  (count = arr.reduce((acc, cur) => acc + (/^\¿.*\?$/.test(cur) || /^\¡.*!$/.test(cur)), 0)),
  `¡${count} spanish sentence${count !== 1 ? 's' : ''} here and hasta la vista, baby!`
);
```

```js
const spanishSent = (arr) => {
  const count = arr.reduce(
    (acc, cur) => acc + ((cur.startsWith('¿') && cur.endsWith('?')) || (cur.startsWith('¡') && cur.endsWith('!'))),
    0
  );
  return `¡${count} spanish sentence${count !== 1 ? 's' : ''} here and hasta la vista, baby!`;
};
```
