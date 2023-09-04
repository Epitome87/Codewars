# [Message Validator](https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc)

## Description

In this kata, you have an input string and you should check whether it is a valid message. To decide that, you need to split the string by the numbers, and then compare the numbers with the number of characters in the following substring.

For example "3hey5hello2hi" should be split into `3, hey, 5, hello, 2, hi` and the function should return `true`, because "hey" is 3 characters, `"hello"` is 5, and "hi" is 2; as the numbers and the character counts match, the result is `true`.

Notes:

- Messages are composed of only letters and digits
- Numbers may have multiple digits: e.g. `"4code13hellocodewars"` is a valid message
- Every number must match the number of character in the following substring, otherwise the message is invalid: e.g. `"hello5"` and `"2hi2"` are invalid
- If the message is an empty string, you should return `true`

## My Solution

**JavaScript**

```js
const isAValidMessage = (message) => {
  if (/^[a-z]|\d$/.test(message)) return false;

  const nums = message.match(/\d+/g) || [];
  const substrings = message.split(/\d/g).filter((str) => str.length > 0);

  return substrings.every((str, idx) => str.length === +nums[idx]);
};
```

### User Solution

**JavaScript**

```js
const isAValidMessage = (message) => !message.replace(/(\d+)(\D+)/g, (_, $1, $2) => $1 - $2.length || ``);
```

```js
isAValidMessage = (m) => !m.replace(/(\d+)(\D+)/g, (_, a, b) => (a == b.length ? '' : 1));
// Explanation:
!m.replace(/(\d+)(\D+)/g,(_,a,b)=>a==b.length?"":1)
 m.replace(                                          replace in the input String
           /          /g                             all occurences of the regex
            (\d+)(\D+)                               which matches one or more digits followed by one or more non-digits
                        ,(_,a,b)=>                   _ ignore the whole match, a the digits, b the letters
                                  a==b.length        when the number is equal to the length of the matched letters
                                             ?""     by the emtpy string
                                                :1)  or else by 1 (any non empty, non-zero string is possible here)
!                                                    "negate" the string. If all matches it is empty and therefore !"" is true, false if the string is not empty
!m.replace(/(\d+)(\D+)/g,(_,a,b)=>a==b.length?"":1)
```
