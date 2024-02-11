# [Return a String's Even Characters](https://www.codewars.com/kata/566044325f8fddc1c000002c)

## Description

Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

```
"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"
```

**JavaScript**

```js
const evenChars = (str) =>
  str.length < 2 || str.length > 100 ? 'invalid string' : [...str].filter((_, idx) => idx % 2);
```

**Python**

```py
def even_chars(str):
    return [c for idx, c in enumerate(str) if idx % 2] if 2 <= len(str) <= 100 else "invalid string"
```

### User Solution

**Python**

```py
def even_chars(st):
    if len(st) < 2 or len(st)> 100:
        return 'invalid string'
    else:
        return [st[i] for i in range(1, len(st), 2)]
```
