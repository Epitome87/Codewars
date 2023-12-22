# [altERnaTIng cAsE <=> ALTerNAtiNG CaSe](https://www.codewars.com/kata/56efc695740d30f963000557)

## Description

Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

```js
'hello world'.toAlternatingCase() === 'HELLO WORLD';
'HELLO WORLD'.toAlternatingCase() === 'hello world';
'hello WORLD'.toAlternatingCase() === 'HELLO world';
'HeLLo WoRLD'.toAlternatingCase() === 'hEllO wOrld';
'12345'.toAlternatingCase() === '12345'; // Non-alphabetical characters are unaffected
'1a2b3c4d5e'.toAlternatingCase() === '1A2B3C4D5E';
'String.prototype.toAlternatingCase'.toAlternatingCase() === 'sTRING.PROTOTYPE.TOaLTERNATINGcASE';
```

As usual, your function/method should be pure, i.e. it should not mutate the original string.

## My Solution

**JavaScript**

```js
String.prototype.toAlternatingCase = function () {
  return [...this].map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())).join('');
};
```

```js
String.prototype.toAlternatingCase = function () {
  return this.split('')
    .map((char) => (char.charCodeAt(0) >= 97 ? char.toUpperCase() : char.toLowerCase()))
    .join('');
};
```

**Python**

```py
def to_alternating_case(string):
    result = ''
    for i in string:
        if i == i.upper():
            result += i.lower()
        else:
            result += i.upper()
    return result
```

### User Solution

**Python**

```py
def to_alternating_case(string):
    return string.swapcase()
```

```py
def to_alternating_case(string):
    return ''.join(c.upper() if c.islower() else c.lower() for c in string)
```

```py
def to_alternating_case(string):
    new_string = ''
    for char in string:
        if char.isupper():
            new_string += char.lower()
        else:
            new_string += char.upper()
    return new_string
```

## Takeaways

1. For Python, use `char.isupper()` instead of `if char == char.upper()`. Similiarly, use `char.islower()`.
2. And obviously remember `string.swapcase()`!
