# [Vowel Remover](https://www.codewars.com/kata/5547929140907378f9000039)

## Description

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

**Examples**

```
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
```

- don't worry about uppercase vowels
- y is not considered a vowel for this kata

## My solution

**JavaScript**

```js
const shortcut = (string) => string.replace(/[aeoiu]/g, '');
```

```js
const shortcut = (string) =>
  string
    .split('')
    .filter((c) => !['a', 'e', 'i', 'o', 'u'].includes(c))
    .join('');
```

### User solution:

**JavaScript**

```js
function shortcut(string) {
  return string
    .split('')
    .filter((str) => !'aeiou'.includes(str))
    .join('');
}
```
