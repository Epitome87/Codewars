# [FIXME: Replace All Dots](https://www.codewars.com/kata/596c6eb85b0f515834000049)

## Description

The code provided is supposed replace all the dots `.` in the specified String `str` with dashes `-`

But it's not working properly.

**Task**

Fix the bug so we can all go home early.

**Notes**

String `str` will never be null.

## My solution

**JavaScript**

```js
const replaceDots = (str) => str.replace(/[.]/g, '-');
```

```js
const replaceDots = (str) => {
  // added the \ to escape special characters
  // added the g so that replace is run for all occurences in the string
  return str.replace(/\./g, '-');
};
```

**Python**

```py
def replace_dots(str):
    return str.replace(".", "-")
```

```py
import re
def replace_dots(str):
    return re.sub(r"\.", "-", str)
```

### User Solution

```js
var replaceDots = (s) => s.split('.').join('-');
```

## Takeaways

1. Remember: For replacing characters, rather than replace or replaceAll with Regex, just use the split() method on a string!

