# [Backspaces in String](https://www.codewars.com/kata/5727bb0fe81185ae62000ae3)

## Description

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples

```
"abc#d##c" ==> "ac"
"abc##d######" ==> ""
"#######" ==> ""
"" ==> ""
```

## My Solution

**JavaScript**

```js
cleanString = (s) => [...s].reduce((acc, cur) => (cur === '#' ? acc.slice(0, -1) : acc + cur), '');
```

```js
function cleanString(s) {
  const res = [];
  for (let c of s) {
    if (c === '#') res.pop();
    else res.push(c);
  }
  return res.join('');
}
```

**Python**

```py
def clean_string(s):
    res = ""
    for char in s:
        if char == "#": res = res[:-1]
        else: res += char
    return res
```

### User Solution

**Python**

```py
import re

def clean_string(s):
  while '#' in s:
    s = re.sub('.?#', '', s, count=1)
  return s
```
