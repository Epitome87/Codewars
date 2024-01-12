# [Digits Explosion](https://www.codewars.com/kata/585b1fafe08bae9988000314)

## Description

Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples

```js
explode('312'); // "333122"
explode('102269'); // "12222666666999999999"
```

## My Solution

**JavaScript**

```js
const explode = (s) => s.replace(/\d/g, (d) => d.repeat(d));
```

```js
const explode = (str) =>
  str
    .split('')
    .map((c) => c.repeat(+c))
    .join('');
```

**Python**

```py
def explode(s):
    return ''.join(d * int(d) for d in s)
```

```py
import re

def explode(s):
    return re.sub("\d", lambda match: match.group() * int(match.group()) , s)
```
