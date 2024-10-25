# [Split in Parts](https://www.codewars.com/kata/5650ab06d11d675371000003)

## Description

The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

Example:

    Split the below string into other strings of size #3

    'supercalifragilisticexpialidocious'

    Will return a new string
    'sup erc ali fra gil ist ice xpi ali doc iou s'

Assumptions:

    String length is always greater than 0
    String has no spaces
    Size is always positive

## My Solution

**JavaScript**

```js
const splitInParts = (s, partLength) => s.match(new RegExp(`.{1,${partLength}}`, 'g')).join(' ');
```

```js
const splitInParts = (s, partLength) =>
  s
    .split('')
    .map((c, idx) => ((idx + 1) % partLength ? c : c + ' '))
    .join('')
    .trim();
```

**Python**

```py
def split_in_parts(s, part_length):
    return ''.join(c if (i + 1) % part_length else c + ' ' for i, c in enumerate(s)).strip()
```

### User Solution

**Python**

```py
def split_in_parts(s, n):
    return ' '.join([s[i:i+n] for i in range(0, len(s), n)])
```
