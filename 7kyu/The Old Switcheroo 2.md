# [The Old Switcheroo 2](https://www.codewars.com/kata/55d6a0e4ededb894be000005)

## Description

This is a follow up from my kata The old switcheroo

Write the function :

```js
function encode(str)
```

that takes in a string str and replaces all the letters with their respective positions in the English alphabet.

```js
encode('abc') == '123'; // a is 1st in English alpabet, b is 2nd and c is 3rd
encode('codewars') == '315452311819';
encode('abc-#@5') == '123-#@5';
```

String are case sensitive.

```
// Bonus point if you don't use toLowerCase()
```

## My Solution

**JavaScript**

```js
const encode = (str) => str.toLowerCase().replace(/[a-z]/g, (c) => c.charCodeAt(0) - 96);
```

### User Solution

**JavaScript**

```js
// Without using toLowerCase() (arbitrary bonus challenge)
function encode(string) {
  return string.replace(/[a-z]/gi, (m) => m.charCodeAt() % 32);
}
```

```js
// Without using toLowerCase() (arbitrary bonus challenge)
function encode(str) {
  return str.replace(/[a-z]/gi, (c) => c.charCodeAt() - (c < 'a' ? 64 : 96));
}
```
