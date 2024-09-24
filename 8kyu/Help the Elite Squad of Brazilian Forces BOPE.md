# [Help the Elite Squad of Brazilian Forces BOPE](https://www.codewars.com/kata/5ab52526379d20736b00000e)

## Description

The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Below there is the relation of weapons:

PT92 - 17 bullets  
M4A1 - 30 bullets  
M16A2 - 30 bullets  
PSG1 - 5 bullets

Example:

["PT92", 6] => 2 (6 streets 3 bullets each)  
["M4A1", 6] => 1

The return will always be an integer so as the params.

## My Solution

**JavaScript**

```js
const magNumber = ([weapon, numStreets]) => {
  const magSize = {
    PT92: 17,
    M4A1: 30,
    M16A2: 30,
    PSG1: 5,
  };

  return Math.ceil((numStreets * 3) / magSize[weapon]);
};
```

```js
magNumber = (info) => Math.ceil((info[1] * 3) / { PT92: 17, M4A1: 30, M16A2: 30, PSG1: 5 }[info[0]]);
```

**Python**

```py
from typing import Tuple
from math import ceil

def mag_number(info: Tuple[str, int]) -> int:
    mag_size = { 'PT92': 17, 'M4A1': 30, 'M16A2': 30, 'PSG1': 5 }
    return ceil((info[1] * 3) / mag_size[info[0]])
```
