# [Easy Logs](https://www.codewars.com/kata/5b68c7029756802aa2000176)

## Description

Add two logs with base X, with the value of A and B. Example log<sub>x</sub>A + log<sub>x</sub>B where the base is X.

## My Solution

**JavaScript**

```js
const logs = (x, a, b) => Math.log(a * b) / Math.log(x);
```

```js
const logs = (x, a, b) => (Math.log(a) + Math.log(b)) / Math.log(x);
```

**Python**

```py
from math import log

def logs(x, a, b):
    return log(a * b) / log(x)
```
