# [If You Can Read This...](https://www.codewars.com/kata/586538146b56991861000293)

## Description

**Task**

You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:

`If, you can read?`

**Output:**

`India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?`

Note:

- There are preloaded dictionary you can use, named `NATO`
- The set of used punctuation is `,.!?`.
- Punctuation should be kept in your return string, but spaces should not.
- Xray should not have a dash within.
- Every word and punctuation mark should be separated by a space ' '.
- There should be no trailing whitespace

## My Solution

**JavaScript**

```js
const to_nato = (words) =>
  words
    .toLowerCase()
    .replace(/ /g, '')
    .split('')
    .map((c) => NATO[c] || c)
    .join(' ');
```

**Python**

```py
from preloaded import NATO # NATO['A'] == 'Alfa', etc

def to_nato(words : str) -> str:
    return ' '.join([NATO.get(c, c) for c in words.upper().replace(' ', '')])
```

### User Solution

**Python**

```py
def to_nato(words):
    return " ".join(NATO.get(char, char) for char in words.upper() if not char.isspace())
```
