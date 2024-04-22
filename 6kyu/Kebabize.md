# [Kebabize](https://www.codewars.com/kata/57f8ff867a28db569e000c4a)

## Description

Modify the `kebabize` function so that it converts a camel case string into a kebab case.

```js
kebabize('camelsHaveThreeHumps'); // camels-have-three-humps
kebabize('camelsHave3Humps'); // camels-have-humps
```

Notes:

- the returned string should only contain lowercase letters

## My Solution

**JavaScript**

```js
const kebabize = (str) =>
  str
    .replace(/\d/g, '')
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase();
```

```js
const kebabize = (str) =>
  str
    .replace(/[0-9]/g, '')
    .split('')
    .map((c, i) => (c === c.toUpperCase() ? `${i > 0 ? '-' : ''}${c.toLowerCase()}` : c))
    .join('');
```

**Python**

```py
import re

def kebabize(st):
    return '-'.join([x for x in re.split(r"(?=[A-Z])", re.sub(r'\d', '', st)) if len(x)]).lower()
```

### User Solution

**JavaScript**

```js
function kebabize(str) {
  return str
    .replace(/[^a-z]/gi, '')
    .replace(/^[A-Z]/, (c) => c.toLowerCase())
    .replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
}
```

**Python**

```py
def kebabize(s):
    return ''.join(c if c.islower() else '-' + c.lower() for c in s if c.isalpha()).strip('-')
```

```py
import re

def kebabize(s):
    return re.sub('\B([A-Z])', r'-\1', re.sub('\d', '', s)).lower()
```

## Takeaways

1. Python seems to handle splitting a string using the regex differently than JavaScript. In Python, we can be left with empty strings in our resulting list, whereas JavaScript seems to avoid this.
