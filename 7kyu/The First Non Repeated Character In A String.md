# [The First Non Repeated Character In A String](https://www.codewars.com/kata/570f6436b29c708a32000826)

## Description

You need to write a function, that returns the first non-repeated character in the given string.

If all the characters are unique, return the first character of the string.
If there is no unique character, return null in JS or Java, None in Python, '\0' in C.

You can assume, that the input string has always non-zero length.

**Examples**

```
"test"   returns "e"
"teeter" returns "r"
"trend"  returns "t" (all the characters are unique)
"aabbcc" returns null (all the characters are repeated)
```

## My Solution

**JavaScript**

```js
const firstNonRepeated = (s) => [...s].find((c) => s.indexOf(c) === s.lastIndexOf(c)) || null;
```

```js
const firstNonRepeated = (s) => {
  if ([...new Set(s)].size === s.length) return s[0];
  for (let char of s) {
    if (s.indexOf(char) === s.lastIndexOf(char)) return char;
  }
  return null;
};
```

**Python**

```py
def first_non_repeated(s):
    for c in s:
        if s.index(c) == s.rindex(c):
            return c;
```

### User Solution

```py
def first_non_repeated(s):
    for c in s:
        if s.count(c) == 1: return c
```

## Takeaways:

1. My solution contained unnecessary logic! We do not need to test if every character is unique, as the result of that case is simply returning the first unique character anyway.
2. I also keep neglecting to utilize the Array.prototype.find(condition) method!
