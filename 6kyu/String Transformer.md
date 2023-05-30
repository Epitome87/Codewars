# [String Transformer](https://www.codewars.com/kata/5878520d52628a092f0002d0)

## Description

Given a string, return a new string that has transformed based on the input:

- Change case of every character, ie. lower case to upper case, upper case to lower case.
- Reverse the order of words from the input.

**Note:** You will have to handle multiple spaces, and leading/trailing spaces.

For example:

```
"Example Input" ==> "iNPUT eXAMPLE"
```

You may assume the input only contain English alphabet and spaces.

### My Solution

**JavaScript**

```js
const stringTransformer = (str) =>
  str
    .replace(/[a-z]/gi, (c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
    .split(' ')
    .reverse()
    .join(' ');
```
