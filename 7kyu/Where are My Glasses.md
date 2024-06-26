# [Where are My Glasses?](https://www.codewars.com/kata/6512c786a07f6a000fe7a274)

## Description

Oh no! I've lost my glasses, but paradoxically, I need glasses to find my glasses!

Please help me out by showing me the index in the list which contains my glasses. They look like two capital Os, with at least one dash in between!

- This means that both O--O and O------------O are valid glasses, but not O----#--O for example!
- Search thoroughly, you might find my glasses in places such as 'dustO-Odust'

**Examples**

```
["phone", "O-O", "coins", "keys"] ➞ 1

["OO", "wallet", "O##O", "O----O"] ➞ 3

["O--#--O", "dustO---Odust", "more dust"] ➞ 1
```

**Notes**

- All lists will include one valid pair of glasses because I swear I dropped them around here somewhere ...
- All elements in the list are strings.

## My Solution

**JavaScript**

```js
const findGlasses = (arr) => arr.findIndex((v) => /O-+O/.test(v));
```

**Python**

```py
import re

def find_glasses(lst):
    return [i for i, v in enumerate(lst) if re.search(r"O-+O", v)][0]
```

### User Solution

**Python**

```py
import re

def find_glasses(lst):
    return next(i for i, s in enumerate(lst) if re.search(r'O-+O', s))
```
