# [Is There a Vowel in There?](https://www.codewars.com/kata/57cff961eca260b71900008f)

## Description

Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (`a, e, i, o, u`).

If they are, change the array value to a string of that vowel.

Return the resulting array.

## My Solution

**JavaScript**

```js
const isVow = (a) => {
  const charCodes = ['a'.charCodeAt(0), 'e'.charCodeAt(0), 'i'.charCodeAt(0), 'o'.charCodeAt(0), 'u'.charCodeAt(0)];

  return a.map((n) => (charCodes.includes(n) ? String.fromCharCode(n) : n));
};
```

**Python**

```py
def is_vow(inp):
    return [chr(x) if chr(x) in 'aeiou' else x for x in inp]
```

```py
def is_vow(inp):
    for i in range(len(inp)):
        c = chr(inp[i])
        if c in 'aeiou':
            inp[i] = c
    return inp
```

### User Solution

**JavaScript**

```js
function isVow(a) {
  for (var i = 0, l = a.length; i < l; ++i) {
    var char = String.fromCharCode(a[i]);
    if ('aeiou'.indexOf(char) !== -1) a[i] = char;
  }

  return a;
}
```

```js
const isVow = (a) => a.map((x) => ('aeiou'.includes((y = String.fromCharCode(x))) ? y : x));
```

```js
const v = { 97: 'a', 101: 'e', 105: 'i', 111: 'o', 117: 'u' };
const isVow = (a) => a.map((x) => v[x] || x);
```
