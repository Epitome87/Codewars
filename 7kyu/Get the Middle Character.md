# [Get the Middle Character](https://www.codewars.com/kata/56747fd5cb988479af000028)

## Description

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

**Examples**

```
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"
```

**Input**

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

**Output**

The middle character(s) of the word represented as a string.

## My Solution

**JavaScript**

```js
const getMiddle = (s) => s.slice((s.length - 1) / 2, s.length / 2 + 1);
```

```js
function getMiddle(s) {
  let position;
  let length = s.length;

  if (length % 2 === 1) {
    return s.charAt(Math.floor(length) / 2);
  } else {
    return s.substring(length / 2 - 1, length / 2 + 1);
  }
}
```

**Python**

```py
def get_middle(s):
    return s[(len(s) - 1) // 2: len(s) // 2 + 1];
```

### User Solution

**Python**

```py
def get_middle(s):
    index, odd = divmod(len(s), 2)
    return s[index] if odd else s[index - 1:index + 1]
```
