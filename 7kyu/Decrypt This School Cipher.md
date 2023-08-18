# [Decrypt This School Cipher](https://www.codewars.com/kata/5cd48cffaae6e30018943175)

## Description

School students Alice and Bob send messages to each other. To ensure that their messages are not readable by teachers they encrypt text with simple algorythm. Every message contains only latin letters (lowercase and uppercase), digits from 0 to 9 and space symbol.

So, the encryption algorythm is:

1. Reverse the whole string.
2. Replace every letter with it ASCII code in quotes (A to '65', h to '104' and so on).
3. Insert digits and spaces as is.

E.g. this message:

```
9Hi Alice4
```

is encrypted as

```
4'101''99''105''108''65' '105''72'9
```

Your task is to write function decrypt to get source messages from encrypted strings.

## My Solution

**JavaScript**

```js
const decrypt = (str) =>
  str
    .replace(/'(\d+)'/g, (_, $1) => String.fromCharCode($1))
    .split('')
    .reverse()
    .join('');
```

## Takeaways

1. There are many ways to work with RegExp capture groups in JavaScript. In this Kata, the replace's optional callback function can accept more than one parameter, where each after the first parameter seems to represent a capture group that you can refer back to.
