# [Encrypt This!](https://www.codewars.com/kata/5848565e273af816fb000449)

## Description

Encrypt this!

You want to create secret messages which can be deciphered by the [Decipher this](https://www.codewars.com/kata/decipher-this)! kata. Here are the conditions:

1. Your message is a string containing space separated words.
2. You need to encrypt each word in the message using the following rules:

   - The first letter must be converted to its ASCII code.
   - The second letter must be switched with the last letter

3. Keepin' it simple: There are no special characters in the input.

**Examples:**

```js
encryptThis('Hello') === '72olle';
encryptThis('good') === '103doo';
encryptThis('hello world') === '104olle 119drlo';
```

## My Solution

**JavaScript**

```js
const encryptThis = (text) =>
  text
    .split(' ')
    .map((word) => word.replace(/\w(\w?)(\w*?)(\w?$)/, (a, b, c, d) => word.charCodeAt() + d + c + b))
    .join(' ');
```

```js
const encryptThis = (text) => {
  return text
    .split(' ')
    .map((e) => {
      if (e.length === 1) return e.charCodeAt(0);
      if (e.length === 2) return `${e.charCodeAt(0)}${e[1]}`;
      if (e.length === 3) return `${e.charCodeAt(0)}${e.slice(-1)}${e[1]}`;
      if (e.length > 3) return `${e.charCodeAt(0)}${e.slice(-1)}${e.slice(2, -1)}${e[1]}`;
    })
    .join(' ');
};
```

**Python**

```py
from re import sub

def encrypt_this(text):
    regex = r"\b\w(\w?)(\w*?)(\w?)\b"
    pattern = lambda match: str(ord(match[0][0])) + match[3] + match[2] + match[1]
    return sub(regex, pattern, text)
```

### User Solution

**JavaScript**

```js
const encryptThis = (str) => str.replace(/\b\w(\w?)(\w*?)(\w?)\b/g, (a, b, c, d) => a.charCodeAt() + d + c + b);
```
