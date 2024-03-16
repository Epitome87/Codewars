# [CamelCase Method](https://www.codewars.com/kata/587731fda577b3d1b0001196)

## Description

Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

```
"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
```

## My Solution

**JavaScript**

```js
String.prototype.camelCase = function () {
  return this.split(' ')
    .map((w) => w.slice(0, 1).toUpperCase() + w.slice(1))
    .join('');
};
```

```js
String.prototype.camelCase = function () {
  return this.split(' ')
    .map((c) => (c[0] ? c[0].toUpperCase() + c.slice(1) : ''))
    .join('');
};
```

**Python**

```py
def camel_case(s):
    return "".join(word[0:1].upper() + word[1:] for word in s.split(' '))
```

## Takeaways

1. Rather than seeing if c[0] exists, we can use c.slice(0, 1) instead, as it returns an empty string if the string is empty, rather than undefined.
