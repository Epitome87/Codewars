# [Simple Validation of a Username with Regex](https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023)

## Description

Write a simple regex to validate a username. Allowed characters are:

- lowercase letters,
- numbers,
- underscore

Length should be between 4 and 16 characters (both included).

## My Solution

**JavaScript**

```js
/*
      - `^`        Start from the beginning of the string.
      - `[]`       Allow any character specified, including...
      - `a-z`      anything from a to z,
      - `0-9`      anything from 0 to 9,
      - `_`        and underscore.
      - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
      - `$`        End the string right after specified amount of allowed characters is given.
*/
const validateUsr = (username) => /^[0-9a-9_]{4,16}$/.test(username);
```

**Python**

```py
import re

def validate_usr(username):
    return bool(re.search(r"^[a-z0-9_]{4,16}$", username));
```

### User Solution

**Python**

```py
import re
def validate_usr(username):
    # Returns whether the whole string matches the re.pattern or not
    return True if re.fullmatch(r"[a-z0-9_]{4,16}", username) else False
```

## Takeaways

1. For Python, rather than specifying in regex the start and end (`^` and `$`), we can use `re.fullmatch()` instead.
2. In Python, `search`, `match` and `fullmatch` do not return True / False, but rather a `Match` object. We can cast these to a boolean if we are only interested in if a match was found or not.
