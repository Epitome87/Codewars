# [Thinking & Testing: Incomplete String](https://www.codewars.com/kata/56d9292cc11bcc3629000533)

## Description

No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!

## My Solution

**JavaScript**

```js
return s.replace(/../g, (s) => String.fromCharCode((s.charCodeAt(0) + s.charCodeAt(1)) / 2));
```

**Python**

```py
import re

def testit(s):
    return re.sub(r"..", lambda m: chr((ord(m[0][0]) + ord(m[0][1])) // 2), s)
```

```py
# Using capture groups
import re

def testit(s):
    return re.sub("(.)(.)", lambda m: chr((ord(m[1]) + ord(m[2])) // 2), s)
```
