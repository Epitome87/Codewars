# [Super Secret Password Generator](https://www.codewars.com/kata/54402d52cf3625b882000141)

## Description

Sys Admins are always on your case to improve the strength of your passwords. You could really use a handy function to make your passwords completely un-hackable.

Use the super secret characters in the superSecretChars variable to replace the matching characters in your totally insecure password and make it un-hackable.

eg. replace all 'a's with '@'s. Make sure you get the upper case characters too just in case the user wants to SHOUT their password at you.

## My Solution

**JavaScript**

```js
// These are your super secret characters you will use to make the password super secure
const superSecretChars = [
  ['a', '@'],
  ['s', '$'],
  ['o', '0'],
  ['h', '5'],
  ['x', '*'],
];
const createSSP = (password) =>
  superSecretChars.reduce((acc, cur) => acc.replace(new RegExp(cur[0], 'gi'), cur[1]), password);
```

### User Solution

**JavaScript**

```js
const chars = { a: '@', s: '$', o: 0, h: 5, x: '*' };
const createSSP = (password) => password.replace(/[asohx]/gi, (m) => chars[m.toLowerCase()]);
```
