# [Validate Code with Simple Regex](https://www.codewars.com/kata/56a25ba95df27b7743000016)

## Description

Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

You can assume the input will always be a number.

## My Solution

**JavaScript**

```js
const validateCode = (code) => /^[1-3]/.test(code);
```

**Python**

```py
import re

def validate_code(code):
    return re.match("[123]", str(code)) != None
```

### User Solution

**Python**

```py
# Clever, but doesn't use Regex
def validate_code(code):
    return str(code).startswith(('1', '2', '3'))
```

```py
# Clever, but doesn't use Regex
def validate_code(code):
    return str(code)[0] in '123'
```
