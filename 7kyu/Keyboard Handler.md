# [Keyboard Handler](https://www.codewars.com/kata/609d17f9838b2c0036b10e89)

## Description

**Overview**

Have you ever wondered how a user interface handles key presses?

So today you have the opportunity to create it.

**Task:**

The keyboard handler is a function which receives three parameters as input:

1. Key - the entered character on the keyboard.
2. isCaps (or is_caps) - boolean variable responsible for the enabled 'Caps Lock'. (by default false)
3. isShift (or is_shift) - boolean variable which is responsible for whether 'Shift' is pressed. (by default false)

Your task to write a function that returns the entered character.

**Requirements for obtaining the 'key' variable:**

Alphabetical characters must be a lowercase (e.x. 'a', not 'A')
It must be a character (e.x '2', not 2 or not [1,2,3])
It must be of unit length (e.x. 'a', not 'abc')
If the value does not satisfy the condition, return 'KeyError'

For example:

```js
handler('a', true); // should return 'A' (because Caps-Lock)
handler('1', true); // should return '1' (because Сaps-Lock doesn't work here)
handler('a', false, true); // should return 'A' (because Shift)
handler('1', false, true); // should return '!'

handler(''); // should return 'KeyError'
handler('A'); // should return 'KeyError'
handler(3); // should return 'KeyError'
handler('abc'); // should return 'KeyError'
```

In this kata we use en-US QWERTY layout. (The characters we are working with are shown on a white background)

## My Solution

**JavaScript**

```js
const handler = (key, isCaps = false, isShift = false) => {
  if (typeof key !== 'string' || key.length !== 1 || /[A-Z]/.test(key)) return 'KeyError';
  const symbols = {
    1: '!',
    2: '@',
    3: '#',
    4: '$',
    5: '%',
    6: '^',
    7: '&',
    8: '*',
    9: '(',
    0: ')',
    '-': '_',
    '=': '+',
    '[': '{',
    ']': '}',
    ';': ':',
    "'": '"',
    '\\': '|',
    '/': '?',
    '.': '>',
    ',': '<',
    '`': '~',
  };
  if (Object.keys(symbols).includes(key)) return isShift ? symbols[key] : key;
  return isCaps ^ isShift ? key.toUpperCase() : key;
};
```

### User Solution

**JavaScript**

```js
function handler(key, isCaps, isShift) {
  const upperSymbols = Array.from('~!@#$%^&*()_+{}|:"<>? ');
  const lowerSymbols = Array.from("`1234567890-=[]\\;',./ ");
  return /^[a-z]$/.test(key)
    ? isShift ^ isCaps
      ? key.toUpperCase()
      : key
    : lowerSymbols.includes(key)
    ? isShift
      ? upperSymbols[lowerSymbols.indexOf(key)]
      : key
    : 'KeyError';
}
```
