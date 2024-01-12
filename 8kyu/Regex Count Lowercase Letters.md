# [Regex Count Lowercase Letters](https://www.codewars.com/kata/56a946cd7bd95ccab2000055)

## Description

Your task is simply to count the total number of lowercase letters in a string.

Examples

```
lowercaseCount("abc"); ===> 3
lowercaseCount("abcABC123"); ===> 3
lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 3
lowercaseCount(""); ===> 0;
lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"); ===> 0
lowercaseCount("abcdefghijklmnopqrstuvwxyz"); ===> 26
```

## My Solution

**JavaScript**

```js
const lowercaseCount = (str) => (str.match(/[a-z]/g) || []).length;
```

```js
const lowercaseCount = (str) => {
  const matches = str.match(/[a-z]/g);
  return matches ? matches.length : 0;
};
```

**Python**

```py
import re

def lowercase_count(string):
    return len(re.findall("[a-z]", string))
```

### User Solution

**Python**

```py
# Clever, but doesn't use Regex
def lowercase_count(strng):
    return sum(a.islower() for a in strng)
```
