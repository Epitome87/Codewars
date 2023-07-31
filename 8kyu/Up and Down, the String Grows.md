# [Up and Down, the String Grows](https://www.codewars.com/kata/644b17b56ed5527b09057987)

## Description

Many programming languages provide the functionality of converting a string to uppercase or lowercase. For example, `upcase`/`down` case in Ruby, `upper`/`lower` in Python, and `toUpperCase`/`toLowerCase` in Java/JavaScript. Typically, these methods won't change the size of the string.

For example, in Ruby, `str.upcase.downcase.size == str.size` is true for most cases.

However, in some special cases, the length of the transformed string may be longer than the original. Can you find a string that satisfies this criteria?

For example, in Ruby, That means `str.upcase.downcase.size > str.size`

You should just set the value of `STRANGE_STRING` to meet the previous criteria.

Note: Meta programming is not allowed in this kata. So, the size of your solution is limited.

## My Solution

**JavaScript**

```js
const STRANGE_STRING = '\u0130';
```

## Takeaways

1. Basically, a lot of characters in other languages do not have a 1-to-1 conversion. So their lengths may change when going from upper to lower case, or vice versa.
