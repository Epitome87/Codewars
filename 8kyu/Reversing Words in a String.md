# [Reversing Words in a String](https://www.codewars.com/kata/57a55c8b72292d057b000594)

## Description

You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unnecessary whitespace.

**Example (Input --> Output)**

```
"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
```

## My solution

**JavaScript**

```js
const reverse = (string) => string.split(' ').reverse().join(' ');
```

**Python**

```py
def reverse(st):
    return ' '.join(st.split()[::-1])
```
