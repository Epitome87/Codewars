# [Exclamation Marks Series #3: Remove All Exclamation Marks from Sentence Except at the End](https://www.codewars.com/kata/57faefc42b531482d5000123)

## Description

Remove all exclamation marks from sentence except at the end.

Examples

```js
remove('Hi!') == 'Hi!';
remove('Hi!!!') == 'Hi!!!';
remove('!Hi') == 'Hi';
remove('!Hi!') == 'Hi!';
remove('Hi! Hi!') == 'Hi Hi!';
remove('Hi') == 'Hi';
```

## My Solution

**JavaScript**

```js
const remove = (str) => str.replace(/!+(?=[^!])/g, '');
```

```js
const remove = (str) => {
  const end = str.match(/!+$/g, '') || [];
  return str.slice(0, (-end).length).replace(/!/g, '') + end;
};
```

**Python**

```py
import re

def remove(s):
    return re.sub(r"!+(?=[^!])", "", s)
```

### User Solution

**JavaScript**

```js
function remove(s) {
  return s.replace(/!+(?!!*$)/g, '');
}
```

```js
function remove(s) {
  return s.replace(/!+([^!])/g, '$1');
}
```
