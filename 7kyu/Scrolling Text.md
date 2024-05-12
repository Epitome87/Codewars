# [Scrolling Text](https://www.codewars.com/kata/5a995c2aba1bb57f660001fd)

## Description

Let's create some scrolling text!

Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

**Example**

`scrollingText("codewars")` should return:

```
[ "CODEWARS",
  "ODEWARSC",
  "DEWARSCO",
  "EWARSCOD",
  "WARSCODE",
  "ARSCODEW"
  "RSCODEWA",
  "SCODEWAR" ]
```

## My Solution

**JavaScript**

```js
const scrollingText = (text) =>
  Array.from({ length: text.length }, (v, i) => (text.slice(i) + text.slice(0, i)).toUpperCase());
```

**Python**

```py
def scrolling_text(text):
    return [(text[i:] + text[0:i]).upper() for i in range(len(text))]
```
