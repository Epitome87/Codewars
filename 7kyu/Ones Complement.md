# [One's Complement](https://www.codewars.com/kata/59b11f57f322e5da45000254)

## Description

The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s for 0s. For example:

```
onesComplement(1001) = 0110
onesComplement(1001) = 0110
```

For any given binary number,formatted as a string, return the Ones' Complement of that number.

## My Solution

**JavaScript**

```js
const onesComplement = (n) => [...n.toString()].map((c) => +!+c).join('');
```

```js
const onesComplement = (n) => [...n.toString()].map((c) => (+c ? 0 : 1)).join('');
```

```js
const onesComplement = (n) => [...n.toString()].map((c) => (c === '0' ? '1' : '0')).join('');
```

### User Solution

**JavaScript**

```js
const onesComplement = (n) => n.replace(/./g, (val) => val ^ 1);
```

```js
const onesComplement = (n) => [...n].map((b) => b ^ 1).join('');
```
