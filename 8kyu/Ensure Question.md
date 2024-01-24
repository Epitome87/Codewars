# [Ensure Question](https://www.codewars.com/kata/5866fc43395d9138a7000006)

## Description

Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)

```
"Yes" --> "Yes?"
"No?" --> "No?"
```

## My Solution

**JavaScript**

```js
const ensureQuestion = (s) => (/\?$/.test(s) ? s : `${s}?`);
```

```js
const ensureQuestion = (s) => (s.endsWith('?') ? s : s + '?');
```

**Python**

```py
def ensure_question(s):
    return s if s.endswith("?") else f"{s}?"
```

```py
def ensure_question(s):
    return s if s and s[-1] == "?" else f"{s}?"
```
