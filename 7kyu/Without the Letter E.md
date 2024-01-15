# [Without the Letter 'E'](https://www.codewars.com/kata/https://www.codewars.com/kata/594b8e182fa0a0d7fc000875)

## Description

Is it possible to write a book without the letter 'e' ?

Given String str, return:

- How many "e" does it contain (case-insensitive) in string format.
- If given String doesn't contain any "e", return: "There is no "e"."
- If given String is empty, return empty String.
- If given String is `null`/`None`/`nil`, return `null`/`None`/`nil`

## My Solution

**Python**

```py
def find_e(s):
    if s == None: return None
    num_e = len([c for c in s.lower() if c == 'e'])
    return '' if s == '' else str(num_e) if num_e else 'There is no "e".'
```

### User Solution

**Python**

```py
def find_e(s):
    return s and str(s.count('e')+s.count('E') or 'There is no "e".')
```

```py
def find_e(s):
    return s if not s else "There is no \"e\"." if 'e' not in s.lower() else str(s.lower().count('e'))
```

## Takeaways

1. Remember the Python `str.count(match_char)` function!
