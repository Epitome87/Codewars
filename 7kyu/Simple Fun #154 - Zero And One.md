# [Simple Fun #154 - Zero And One](https://www.codewars.com/kata/58ad09d6154165a1c80000d1)

## Description

You have a string that consists of zeroes and ones. Now choose any two adjacent positions in the string: if one of them is `0`, and the other one is `1`, remove these two digits from the string.

Return the length of the resulting (smallest) string that you can get after applying this operation multiple times?

Note: after each operation, the remaining digits are separated by spaces and thus not adjacent anymore - see the examples below.

**Examples**

For `"01010"` the result should be `1`:

```
"01010"  -->  "  010"  -->  "    0"
```

For `"110100"` the result should be `2`:

```
"110100"  -->  "1  100"  -->  "1    0"
```

**Input/Output**

- [input] string `s`

The initial string.

- [output] an integer

The minimum length of the string that may remain after applying the described operations as many times as possible.

## My Solution

**JavaScript**

```js
const zeroAndOne = (s) => s.replace(/01|10/g, '').length;
```

**Python**

```py
import re

def zero_and_one(s):
    return len(re.sub(r"01|10", '', s))
```

```py
def zero_and_one(s):
    return len(s.replace('10', '').replace('01', ''))
```
