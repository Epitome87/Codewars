# [Love vs Friendship](https://www.codewars.com/kata/59706036f6e5d1e22d000016)

## Description

If 　 `a = 1, b = 2, c = 3 ... z = 26`

Then `l + o + v + e = 54`

and `f + r + i + e + n + d + s + h + i + p = 108`

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.

## My Solution

**JavaScript**

```js
const wordsToMarks = (str) => [...str].reduce((acc, cur) => acc + cur.charCodeAt(0) - 96, 0);
```

**Python**

```py
def words_to_marks(s):
    return sum([ord(c) - 96 for c in s])
```
