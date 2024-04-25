# [Simple String Reversal](https://www.codewars.com/kata/5a71939d373c2e634200008e)

## Description

In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

```
solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo".
-- However, there is a space at index 3, so the string becomes "edo cruo"

solve("your code rocks") = "skco redo cruoy".
solve("codewars") = "srawedoc"
```

More examples in the test cases. All input will be lower case letters and in some cases spaces.

## My Solution

**JavaScript**

```js
const solve = (str) => {
  const arr = [...str].filter((c) => c !== ' ');
  return str.replace(/\S/g, () => arr.pop());
};
```

```js
const solve = (str) => {
  let res = '';
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== ' ') res += str[i];
    if (str[res.length] === ' ') res += ' ';
  }
  return res;
};
```

**Python**

```py
import re

def solve(s):
    list = [c for c in s if c != ' ']
    return re.sub(r"\S", lambda _: list.pop(), s)
```

### User Solution

**Python**

```py
def solve(s):
    it = reversed(s.replace(' ',''))
    return ''.join(c if c == ' ' else next(it) for c in s)
```
