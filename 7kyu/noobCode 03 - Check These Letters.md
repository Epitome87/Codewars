# [noobCode 03: Check These Letters...](https://www.codewars.com/kata/57470efebf81fea166001627)

## Description

Write a function that checks if all the letters in the second string are present in the first one at least once, regardless of how many times they appear:

```
["ab", "aaa"]    =>  true
["trances", "nectar"]    =>  true
["compadres", "DRAPES"]  =>  true
["parses", "parsecs"]    =>  false
```

Function should not be case sensitive, as indicated in example #2. Note: both strings are presented as a single argument in the form of an array.

## My Solution

**JavaScript**

```js
const letterCheck = ([a, b]) => !new RegExp(`[^${a}]`, 'i').test(b);
```

```js
const letterCheck = ([a, b]) => [...b.toLowerCase()].every((x) => a.toLowerCase().includes(x));
```

### User Solution

**JavaScript**

```js
function letterCheck([dict, word]) {
  const s = new Set([...dict.toLowerCase()]);
  return [...word].every((x) => s.has(x));
}
```
