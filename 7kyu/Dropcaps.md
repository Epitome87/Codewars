# [Dropcaps](https://www.codewars.com/kata/559e5b717dd758a3eb00005a)

## Description

DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

\*should work also on Leading and Trailing Spaces and caps.

```
"apple"            => "Apple"
"apple of banana"  => "Apple of Banana"
"one   space"      => "One   Space
"   space WALK   " => "   Space Walk   "
```

Note: you will be provided at least one word and should take string as input and return string as output.

## My Solution

**JavaScript**

```js
const dropCap = (n) => n.replace(/\S{3,}/g, (word) => word[0].toUpperCase() + word.slice(1).toLowerCase());
```

```js
const dropCap = (n) =>
  n
    .split(' ')
    .map((x) => (x.length > 2 ? x[0].toUpperCase() + x.slice(1).toLowerCase() : x))
    .join(' ');
```

**Python**

```py
import re

def drop_cap(words):
    return re.sub("\S{3,}", lambda m: m[0].title(), words)
```

### User Solution

**Python**

```py
def drop_cap(str_):
    return ' '.join( w.capitalize() if len(w) > 2 else w for w in str_.split(' ') )
```
