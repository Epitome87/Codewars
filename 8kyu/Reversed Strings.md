# [Reversed Strings](https://www.codewars.com/kata/5168bb5dfe9a00b126000018)

## Description

Complete the solution so that it reverses the string passed into it.

```
'world'  =>  'dlrow'
'word'   =>  'drow'
```

**JavaScript**

```js
const solution = (str) => [...str].reverse().join('');
```

**Python**

```py
def solution(str):
    result = ""
    for i in range(len(str) - 1, -1, -1):
        result += str[i]
    return result
```

### User Solution

**Python**

```py
def solution(str):
  return str[::-1]
```
