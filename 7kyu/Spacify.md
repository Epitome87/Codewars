# [Spacify](https://www.codewars.com/kata/57f8ee485cae443c4d000127)

## Description

Modify the `spacify` function so that it returns the given string with spaces inserted between each character.

```js
spacify('hello world'); // returns "h e l l o   w o r l d"
```

## My Solution

**JavaScript**

```js
const spacify = (str) => str.split('').join(' ');
```

**Python**

```py
def spacify(string):
    return ' '.join(list(string))
```

### User Solution

**Python**

```py
def spacify(string):
    return " ".join(string)
```
