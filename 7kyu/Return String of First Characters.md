# [Return String of First Characters](https://www.codewars.com/kata/5639bdcef2f9b06ce800005b)

## Description

In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

For example:

```
"This Is A Test" ==> "TIAT"
```

Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.

## My Solution

**JavaScript**

```js
const makeString = (s) => s.match(/\b\w/g).join('');
```

```js
const makeString = (s) => s.split(' ').reduce((acc, curr) => acc + curr[0], '');
```

**Python**

```py
import re

def make_string(s):
    return re.sub(r"(\b\w)\w*\s?", lambda m: str(m.group(1)), s)
```

```py
import re

def make_string(s):
    return ''.join(re.findall(r'\b\w',s))
```

```py
def make_string(s):
    return ''.join([word[0] for word in s.split(' ')])
```
