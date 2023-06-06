# [International Morse Code Encryption](https://www.codewars.com/kata/55b8c0276a7930249e00003c)

## Description

Write a function that will encrypt a given sentence into International Morse Code, both the input and out puts will be strings.

Characters should be separated by a single space. Words should be separated by a triple space.

For example, "HELLO WORLD" should return -> ".... . .-.. .-.. --- .-- --- .-. .-.. -.."

To find out more about Morse Code follow this link: https://en.wikipedia.org/wiki/Morse_code

A preloaded object/dictionary/hash called CHAR_TO_MORSE will be provided to help convert characters to Morse Code.

## My Solution

**JavaScript**

```js
const encryption = (message) =>
  message
    .split(' ')
    .map((el) => [...el].map((char) => CHAR_TO_MORSE[char]).join(' '))
    .join('   ');
```

```js
const encryption = (message) => {
  const words = message.split(' ');
  const morse = words.map((el) => [...el].map((char) => CHAR_TO_MORSE[char]).join(' '));
  return morse.join('   ');
};
```

### User Solution

**JavaScript**

```js
const encryption = (message) => [...message].map((v) => CHAR_TO_MORSE[v] || v).join(' ');
```
