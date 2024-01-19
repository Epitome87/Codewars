# [Contamination #1 - String](https://www.codewars.com/kata/596fba44963025c878000039)

## Description

An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

Note: The character is a string of length 1 or an empty string.

Example

```
text before = "abc"
character   = "z"
text after  = "zzz"
```

## My Solution

**JavaScript**

```js
const contamination = (text, char) => char.repeat(text.length);
```

```js
const contamination = (text, char) => text.replace(/./g, char);
```

```js
const contamination = (text, char) =>
  text
    .split('')
    .map((c) => char)
    .join('');
```

**Python**

```py
def contamination(text, char):
    return char * len(text)
```

## Takeaways

1. Try to use the Array.fill method more. The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
