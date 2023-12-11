# [Not Very Secure](https://www.codewars.com/kata/526dbd6c8c0eb53254000110)

## Description

In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

- At least one character ("" is not valid)
- Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
- No whitespaces / underscore

## My solution

**JavaScript**

```js
const alphanumeric = (str) => str.length > 0 && !/[^a-z\d]/gi.test(str);
```

### User Solution

**JavaScript**

```js
let alphanumeric = (s) => /^[a-z\d]+$/i.test(s);
```

## Takeaways

1. According to Regex 101, the user Regex is as follows:

```
/^[a-z\d]+$/i

^ asserts position at start of the string

Match a single character present in the list below [a-z\d]

+ matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)

a-z matches a single character in the range between a (index 97) and z (index 122) (case insensitive)

\d matches a digit (equivalent to [0-9])

$ asserts position at the end of the string, or before the line terminator right at the end of the string (if any)

Global pattern flags
  i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])
```
