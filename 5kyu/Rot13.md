# [Rot13](https://www.codewars.com/kata/530e15517bc88ac656000716)

## Description

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

## My Solution

**JavaScript**

```js
const rot13 = (message) =>
  message.replace(/[a-z]/gi, (letter) =>
    String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() < 'n' ? 13 : -13))
  );
```

### User Solution

**JavaScript**

```js
function rot13(message) {
  var a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var b = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
}
```
