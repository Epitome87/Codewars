# [Mumbling](https://www.codewars.com/kata/5667e8f4e3f572a8f2000039)

## Description

This time no story, no theory. The examples below show you how to write function `accum`:

**Examples:**

```
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
```

The parameter of `accum` is a string which includes only letters from `a..z` and `A..Z`.

## My Solution

**JavaScript**

```js
const accum = (s) => [...s].map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join('-');
```

```js
function accum(s) {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    result += s[i].toUpperCase();

    for (let j = 0; j < i; j++) {
      result += s[i].toLowerCase();
    }

    if (i != s.length - 1) result += '-';
  }

  return result;
}
```

**Python**

```py
def accum(st):
    return '-'.join((char * (i + 1)).title() for i, char in enumerate(st))
```
