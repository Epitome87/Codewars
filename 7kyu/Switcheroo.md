# [Switcheroo](https://www.codewars.com/kata/57f759bb664021a30300007d)

## Description

Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

```js
switcheroo('acb') === 'bca';
switcheroo('aabacbaa') === 'bbabcabb';
```

## My Solution

**JavaScript**

```js
const switcheroo = (x) => x.replace(/[ab]/g, (x) => (x === 'a' ? 'b' : 'a'));
```

```js
const switcheroo = (x) =>
  x
    .split('')
    .map((el) => (el === 'a' ? 'b' : el === 'b' ? 'a' : 'c'))
    .join('');
```

**Python**

```py
import re

def switcheroo(s):
    return re.sub("[ab]", lambda m: "a" if m[0] == "b" else "b", s)
```

### User Solution

**Python**

```py
def switcheroo(s):
    return s.translate(str.maketrans('ab','ba'))
```

```py
def switcheroo(string):
    return ((string.replace('a','x')).replace('b','a')).replace('x','b')
```

```py
def switcheroo(string):
    swap = {
        'a': 'b',
        'b': 'a',
    }

    return ''.join(swap.get(ch, ch) for ch in string)
```

```py
def switcheroo(string):
    return ''.join( [ 'a' if s=='b' else 'b' if s=='a' else s for s in string ] )
```
