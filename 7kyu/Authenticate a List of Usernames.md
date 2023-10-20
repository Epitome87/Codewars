# [Authenticate a List of Usernames](https://www.codewars.com/kata/5819ba1e73b986d4160004f7)

## Description

Given an array of strings representing a list of usernames, return true only if all usernames comply with your company's guidelines. Return false otherwise.

The guidelines say that the username is valid only if:

- it is between 6-10 characters long;
- contains at least 1 lowercase letter;
- contains at least 1 number;
- contains only numbers and lowercase letters.

Examples of arrays that will be tested:

```js
const usernames1 = ['john123', 'alex222', 'sandra1']; // returns true

const usernames2 = ['john123', 'alex222', 'sandraW']; // returns false because sandraW has no number

const usernames3 = ['john_123', 'alex222', 'sandra1']; // returns false because john_123 contains an invalid character
```

Notes:

You will always be given an array with at least 1 string to check.

## My Solution

**JavaScript**

```js
const authList = (arr) => {
  const isValidLength = (str) => str.length > 5 && str.length < 11;
  const isValidCase = (str) => /[a-z]/.test(str);
  const isValidNum = (str) => /[0-9]/.test(str);
  const isValidChars = (str) => /^[0-9a-z]+$/gi.test(str);

  return arr.every((name) => isValidLength(name) && isValidCase(name) && isValidNum(name) && isValidChars(name));
};
```

### User Solution

**JavaScript**

```js
const authList = (a) => a.every((s) => /^(?=.*[a-z])(?=.*\d)[a-z0-9]{6,10}$/.test(s));
```
