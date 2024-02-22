# [Get Number from String](https://www.codewars.com/kata/57a37f3cbb99449513000cd8)

## Description

Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

```
getNumberFromString(s)
```

## My Solution

**JavaScript**

```js
const getNumberFromString = (str) => +str.replace(/\D/g, '');
```

**Python**

```py
from re import sub

def get_number_from_string(str):
    return int(sub("\D", "", str))
```

### User Solution

**Python**

```py
def get_number_from_string(string):
    return int(''.join(x for x in string if x.isdigit()))
```
