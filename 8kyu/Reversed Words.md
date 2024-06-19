# [Reversed Words](https://www.codewars.com/kata/51c8991dee245d7ddf00000e)

## Description

Complete the solution so that it reverses all of the words within the string passed in.

**Example(Input --> Output):**

```
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
```

## My Solution

**JavaScript**

```js
const reverseWords = (str) => str.split(' ').reverse().join(' ');
```

**Python**

```py
def reverse_words(s):
    return ' '.join(s.split(' ')[::-1])
```
