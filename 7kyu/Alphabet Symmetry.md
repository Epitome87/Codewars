# [Alphabet Symmetry](https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0)

## Description

Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

```
solve(["abode","ABc","xyzD"]) = [4, 3, 1]
```

See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

## My Solution

**JavaScript**

```js
const solve = (arr) => arr.map((v) => [...v.toLowerCase()].filter((c, i) => i === c.charCodeAt() - 97).length);
```

```js
const solve = (arr) =>
  arr.map((v) => [...v.toLowerCase()].reduce((acc, cur, i) => acc + (cur.charCodeAt(0) - 97 === i), 0));
```

**Python**

```py
def solve(strings : list[str]) -> list[int]:
    result = []
    for string in strings:
        result.append(len([char for i, char in enumerate(string.lower()) if i == ord(char) - 97]))
    return result
```

### User Solution

**Python**

```py
def solve(arr):
    return [ sum(c == chr(97+i) for i,c in enumerate(w[:26].lower())) for w in arr ]
```
