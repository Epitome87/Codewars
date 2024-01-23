# [String Doubles](https://www.codewars.com/kata/5a145ab08ba9148dd6000094)

## Description

In this Kata, you will write a function doubles that will remove double string characters that are adjacent to each other.

For example:

`doubles('abbcccdddda') = 'aca'`, because, from left to right:

```
a) There is only one 'a' on the left hand side, so it stays.
b) The 2 b's disappear because we are removing double characters that are adjacent.
c) Of the 3 c's, we remove two. We are only removing doubles.
d) The 4 d's all disappear, because we first remove the first double, and again we remove the second double.
e) There is only one 'a' at the end, so it stays.
```

Two more examples: `doubles('abbbzz') = 'ab'` `and doubles('abba') = ""`. In the second example, when we remove the b's in 'abba', the double a that results is then removed.

The strings will contain lowercase letters only. More examples in the test cases.

## My Solution

**JavaScript**

```js
const doubles = (s) => [...s].reduce((acc, cur) => (acc[acc.length - 1] === cur ? acc.slice(0, -1) : acc + cur), '');
```

```js
const doubles = (s) => {
  let res = '';

  for (const c of s) {
    if (res[res.length - 1] === c) res = res.slice(0, -1);
    else res += c;
  }

  return res;
};
```

**Python**

```py
def doubles(s):
    result = ''
    for char in s:
        if result and result[-1] == char:
            result = result[:-1]
        else:
            result += char
    return result
```

### User Solution

```js
const doubles = (s) => (/(\w)\1/.test(s) ? doubles(s.replace(/(\w)\1/g, ``)) : s);
```
