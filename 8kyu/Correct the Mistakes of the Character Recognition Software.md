# [Correct the Mistakes of the Character Recognition SOftware](https://www.codewars.com/kata/577bd026df78c19bca0002c0)

## Description

Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

- S is misinterpreted as 5
- O is misinterpreted as 0
- I is misinterpreted as 1

The test cases contain numbers only by mistake.

## User Solution

**JavaScript**

```js
const correct = (string) => string.replace(/[501]/g, (char) => ({ 5: 'S', 0: 'O', 1: 'I' }[char]));
```

```js
const correct = (string) => string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I');
```

**Python**

```py
import re

def correct(s):
    return re.sub("[501]", lambda m: { '5': 'S', '0': 'O', '1': 'I' }[m[0]], s)
```

### User Solution

**Python**

```py
def correct(string):
    return string.translate(str.maketrans("501", "SOI"))
```
