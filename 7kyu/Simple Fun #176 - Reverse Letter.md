# [Simple Fun #176 - Reverse Letter](https://www.codewars.com/kata/58b8c94b7df3f116eb00005b)

## Description

Given a string `str`, reverse it and omit all non-alphabetic characters.

**Example**

For `str = "krishan"`, the output should be `"nahsirk".`

For `str = "ultr53o?n"`, the output should be `"nortlu"`.

**Input/Output**

- [input] string `str`

A string consists of lowercase latin letters, digits and symbols.

- [output] a string

## My Solution

**JavaScript**

```js
const reverseLetter = (str) => str.match(/[a-z]/g).reverse().join('');
```

```js
const reverseLetter = (str) => [...str.replace(/[^a-z]/gi, '')].reverse().join('');
```

**Python**

```py
def reverse_letter(st):
    return ''.join([x for x in st if x.isalpha()])[::-1]
```
