# [Get Character From ASCII Value](https://www.codewars.com/kata/55ad04714f0b468e8200001c)

## Description

Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

Example:

```py
get_char(65) # 'A'
```

For ASCII table, you can refer to http://www.asciitable.com/

## My Solution

**JavaScript**

```js
const getChar = (c) => String.fromCharCode(c);
```

```js
const getChar = String.fromCharCode;
```

**Python**

```py
get_char = chr
```

```py
def get_char(c):
    return chr(c)
```
