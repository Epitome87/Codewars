# [Exes and Ohs](https://www.codewars.com/kata/55908aad6620c066bc00002a)

## Description 

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

```
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
```

## My Solution

**JavaScript**

```js
const XO = (str) => (str.match(/x/gi) || []).length === (str.match(/o/gi) || []).length;
```

```js
const XO = (str) => {
  const stringArray = str.split('');

  const numberOfX = stringArray.filter((char) => char.toLowerCase() === 'x').length;
  const numberOfO = stringArray.filter((char) => char.toLowerCase() === 'o').length;

  return numberOfX === numberOfO;
};
```