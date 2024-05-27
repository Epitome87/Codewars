# [De-Emojify](https://www.codewars.com/kata/6627696c86b953001280675e)

## Description

You are given a string made up of chains of emotes separated by 1 space each, with chains having 2 spaces in-between each.

Each emote represents a digit:

```
:)  | 0
:D  | 1
>(  | 2
>:C | 3
:/  | 4
:|  | 5
:O  | 6
;)  | 7
^.^ | 8
:(  | 9
```

Each emote chain represents the digits of the ASCII/Unicode code for a character, e.g. `:( ;)` is `97`, which is the ASCII code for `'a'`.

Given a such string of emotes, find the string it represents. Example:

`':D :) :/  :D :) :|'` is 2 chains: `':D :) :/' and ':D :) :|'`.

These represent ASCII codes 104 and 105 respectively, translating to `'hi'`.

Input will always be valid. Chains may start with leading zeroes; these are valid and do not change the chain's value.

## My Solution

**JavaScript**

```js
const deEmojify = (emojiStr) => {
  if (!emojiStr) return '';
  const emojis = [':)', ':D', '>(', '>:C', ':/', ':|', ':O', ';)', '^.^', ':('];
  return emojiStr
    .split('  ')
    .reduce(
      (acc, cur) =>
        acc + String.fromCharCode(cur.split(' ').reduce((acc, emoji) => acc + `${emojis.indexOf(emoji)}`, '')),
      ''
    );
};
```

```js
const deEmojify = (emojiStr) => {
  if (!emojiString) return '';
  const map = [':)', ':D', `>(`, `>:C`, ':/', ':|', ':O', ';)', '^.^', ':('];

  const chains = emojiString.split('  ');
  const result = chains.reduce((acc, cur) => {
    const ascii = cur.split(' ').reduce((acc, emoji) => acc + `${map.indexOf(emoji)}`, '');
    return acc + String.fromCharCode(+ascii);
  }, '');

  return result;
};
```

**Python**

```py
def deemojify(emote_string):
    emojis = [':)', ':D', '>(', '>:C', ':/', ':|', ':O', ';)', '^.^', ':(']
    asciis = [''.join([str(emojis.index(emote)) for emote in chain.split(' ')]) for chain in emote_string.split('  ')]
    return ''.join([chr(int(x)) for x in asciis])
```

### User Solution

**Python**

```py
def deemojify(string):
    digits = {
        ':)' : '0',
        ':D' : '1',
        '>(' : '2',
        '>:C': '3',
        ':/' : '4',
        ':|' : '5',
        ':O' : '6',
        ';)' : '7',
        '^.^': '8',
        ':(' : '9',
        }
    result = ''
    for group in string.split('  '):
        number = ''
        for emoji in group.split(' '):
            number += digits[emoji]
        result += chr(int(number))
    return result
```
