# [Split Strings](https://www.codewars.com/kata/515de9ae9dcfc28eb6000001)

## Description

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('\_').

Examples:

```
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
```

## My solution

**JavaScript**

```js
const solution = (str) => `${str}_`.match(/.{2}/g) || [];
```

```js
const solution = (str) => {
  const res = [];

  for (let i = 0; i < str.length; i += 2) {
    res.push(str.substr(i, 2));
  }

  if (str.length % 2) res[Math.floor(str.length / 2)] += '_';

  return res;
};
```

**Python**

```py
def solution(s):
    s = s + '_'
    result = [s[i:i + 2] for i in range(0, len(s), 2)]
    return result[:len(s) // 2]
```

### User Solution

**Python**

```py
import re

def solution(s):
    return re.findall(".{2}", s + "_")
```
