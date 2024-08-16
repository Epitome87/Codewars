# [Make Every Letter after X into Caps](https://www.codewars.com/kata/596a5e32634dad2a3c00003f)

## Description

Imagine a book author has hired us to create a function that takes his book as a string as input and finds all instances of a letter that we will call 'x' (case-sensitive) and turns all the letters after 'x' into a capital letter.

For example.

makeEveryLetterAfterXCaps('and larry walked into the park late to chase a squirrel', 'l')

Should return:

"and lArry walKed into the park lAte to chase a squirrel"

If the letter after x is already in caps it should stay in caps.

Note that the swapping occurs considering the modified string, so `makeEveryLetterAfterXCaps('aaaa', 'a')` will result into `"aAaA"`

## My Solution

**JavaScript**

```js
const makeEveryLetterAfterXCaps = (str, letter) => {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (result[i - 1] === letter) result.push(str[i].toUpperCase());
    else result.push(str[i]);
  }

  return result.join('');
};
```

### User Solution

**JavaScript**

```js
const makeEveryLetterAfterXCaps = (str, letter) => {
  const re = new RegExp(`(?<=${letter})[a-z]`);
  while (re.test(str)) str = str.replace(re, (m) => m.toUpperCase());
  return str;
};
```

```js
const makeEveryLetterAfterXCaps = (str, l) => {
  const reg = new RegExp(`(${l})([a-z])`, 'g');

  while (reg.test(str)) {
    str = str.replace(reg, (_, n1, n2) => n1 + n2.toUpperCase());
  }

  return str;
};
```
