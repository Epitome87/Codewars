# [The Old Switcheroo](https://www.codewars.com/kata/55d410c492e6ed767000004f)

## Description

Write a function

```js
vowel2index(str);
```

that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
E.g:

```js
vowel2index('this is my string') == 'th3s 6s my str15ng';
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld';
vowel2index('') == '';
```

Your function should be case insensitive to the vowels.

## My Solution

**JavaScript**

```js
const vowel2index = (str) => str.replace(/[aeiou]/gi, (_, i) => i + 1);
```

```js
const vowel2index = (str) =>
  str
    .split('')
    .map((c, idx) => ('aeiou'.includes(c.toLowerCase()) ? idx + 1 : c))
    .join('');
```

**Python**

```py
def vowel_2_index(string):
    result = ""
    for i in range(len(string)):
        if string[i].lower() in 'aeiou':
            result += str(i + 1)
        else:
            result += string[i]
    return result
```

### User Solution

**Python**

```py
import re

def vowel_2_index(string):
    return re.sub("[aeiou]", lambda m: str(m.end()), string, flags=re.I)
```

## Takeaways

1. Study the user solution to see how we retrieve the indices of the replaced regex characters. The lambda function for the replacement parameter accepts a `Match` object, which has methods `end([group])` and `start([group])`, which return the indices of the start and end of the substring matched by group. Group defaults to zero (meaning the whole matched substring).
