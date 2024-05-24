# [Steven's Password Decryption](https://www.codewars.com/kata/53e20276af0d91c206000972)

## Description

Steven has attempted to secure his passwords by encrypting them using the following code:

```js
function encryptPassword(p) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var cryptStr = '';

  for (i = 0; i < p.length; i++) {
    cryptStr += alphabet.indexOf(p.split('')[i]).toString();
    cryptStr += '-';
  }
  var alphabetical = p.split('').sort();
  for (i = 0; i < alphabetical.length; i++) {
    cryptStr += alphabetical[i];
  }
  return cryptStr;
}
```

However, after encrypting all his passwords using this method he has forgotten what they were originally, and he can't seem to find a way to decrypt them.

Luckily he never used any numbers or special characters in his passwords, so the task is a bit easier. He needs you to write a function, decryptPassword which takes the encrypted password (p) and returns the original password as a string.

For example:

```
decryptPassword("1-0-2-14-13-abcno") -> bacon
decryptPassword("44-19-4-21-4-13-Seentv") -> Steven
```

## My Solution

**JavaScript**

```js
const decryptPassword = (p) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return p
    .split('-')
    .slice(0, -1)
    .reduce((acc, cur) => acc + alphabet[cur], '');
};
```

```js
const decryptPassword = (p) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let decryptedStr = '';
  const alphabetPositions = p.split('-').slice(0, -1);
  for (let index of alphabetPositions) {
    decryptedStr += alphabet[index];
  }
  return decryptedStr;
};
```
