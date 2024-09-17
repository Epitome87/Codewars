# [Duplicate Encoder](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c)

## Description

The goal of this exercise is to convert a string to a new string where each character in the new string is `"("` if that character appears only once in the original string, or `")"` if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

**Examples**

    "din"      =>  "((("
    "recede"   =>  "()()()"
    "Success"  =>  ")())())"
    "(( @"     =>  "))(("

**Notes**

Assertion messages may be unclear about what they display in some languages. If you read `"...It Should encode XXX"`, the `"XXX"` is the expected result, not the input!

## My Solution

**JavaScript**

```js
const duplicateEncode = (word) =>
  [...word.toLowerCase()].map((c, _, w) => (w.indexOf(c) === w.lastIndexOf(c) ? '(' : ')')).join('');
```

```js
const duplicateEncode = (word) => {
  const charCount = [...word.toLowerCase()].reduce((acc, cur) => ((acc[cur] = acc[cur] + 1 || 1), acc), {});
  return [...word.toLowerCase()].map((char) => (charCount[char] > 1 ? ')' : '(')).join('');
};
```

**Python**

```py
def duplicate_encode(word):
    return ''.join([')' if word.lower().count(c) > 1 else '(' for c in word.lower()])
```
