# [Find the Capitals](https://www.codewars.com/kata/539ee3b6757843632d00026b)

## Description

Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (`word`) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

**Example (Input --> Output)**

```
"CodEWaRs" --> [0,3,4,6]
```

## My Solution

**JavaScript**

```js
const capitals = (word) => [...word].reduce((acc, cur, idx) => (cur === cur.toUpperCase() ? [...acc, idx] : acc), []);
```

```js
const capitals = (word) =>
  word
    .split('')
    .map((char, index) => (char < 'a' ? index : null))
    .filter((char) => char !== null);
```

**Python**

```py
def capitals(word):
    return [i for i, c in enumerate(word) if c.isupper()]
```

```py
def capitals(word):
    return [i for i in range(len(word)) if word[i].isupper()]
```
