# [Simple Fun #194: Binary String](https://www.codewars.com/kata/58c218efd8d3cad11c0000ef)

## Description

**Task**

You are given a binary string (a string consisting of only '1' and '0'). The only operation that can be performed on it is a Flip operation.

It flips any binary character ( '0' to '1' and vice versa) and all characters to the _right_ of it.

For example, applying the Flip operation to the 4th character of string "1001010" produces the "1000101" string, since all characters from the 4th to the 7th are flipped.

Your task is to find the minimum number of flips required to convert the binary string to string consisting of all '0'.

**Example**

For `s = "0101"`, the output should be `3`.

It's possible to convert the string in three steps:

```
"0101" -> "0010"
   ^^^
"0010" -> "0001"
    ^^
"0001" -> "0000"
     ^
```

**Input/Output**

- [input] string s

A binary string.

- [output] an integer

The minimum number of flips required.

## My Solution

**JavaScript**

```js
const binStr = (s) =>
  [...s].reduce(
    (flips, _, i) =>
      s[i] === '0' ? flips : ((s = [...s].reduce((acc, cur, idx) => acc + (idx < i ? cur : +!+cur), '')), ++flips),
    0
  );
```

```js
const binStr = (s) => {
  let numFlips = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      s = [...s].reduce((acc, cur, idx) => {
        if (idx < i) return acc + s[idx];
        if (s[idx] === '1') return acc + '0';
        return acc + '1';
      }, '');
      numFlips++;
    }
  }

  return numFlips;
};
```

**Python**

```py
from re import sub

def bin_str(s):
    return len(sub(r"(.)\1+", r"\1", s).lstrip("0"))
```

### User Solution

**JavaScript**

```js
function binStr(s) {
  return s.replace(/(.)\1+/g, '$1').replace(/^0/, '').length;
}
```

```js
const binStr = (str, cmpWith = '0') => [...str].reduce((acc, bit) => (acc += bit ^ cmpWith && +!!(cmpWith = bit)), 0);
```

**Python**

```py
def bin_str(s):
    return s.count("10") * 2 + (s[-1] == "1")
```

### Takeaways

1. The Regex used in one solution is essentially only keeping the first digit any time it is repeated sequentially. It then removes any leading `0` from the string. The length of the resulting string is the number of flips required!
