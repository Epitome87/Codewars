# [Break camelCase](https://www.codewars.com/kata/5208f99aee097e6552000148)

## Description

Complete the solution so that the function will break up camel casing, using a space between words.

**Example**

```
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
```

## My Solution

**JavaScript**

```js
const solution = (string) => string.replace(/([A-Z])/g, ' $1');
```

```js
const solution = (string) => [...string].map((c) => (c === c.toUpperCase() ? ` ${c}` : c)).join('');
```

**Python**

```py
def solution(s):
    return ''.join(f" {c}" if c.isupper() else c for c in s)
```
