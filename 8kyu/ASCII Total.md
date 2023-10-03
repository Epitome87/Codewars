# [ASCII Total](https://www.codewars.com/kata/572b6b2772a38bc1e700007a)

## Description

You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

```js
uniTotal('a') == 97;
uniTotal('aaa') == 291;
```

## My Solution

**JavaScript**

```js
const uniTotal = (str) => [...str].reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
```
