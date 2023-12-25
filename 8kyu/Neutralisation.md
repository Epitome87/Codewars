# [Neutralisation](https://www.codewars.com/kata/65128732b5aff40032a3d8f0)

## Description

Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.

**Worked Example**

```
("+-+", "+--") ➞ "+-0"
# Compare the first characters of each string, then the next in turn.
# "+" against a "+" returns another "+".
# "-" against a "-" returns another "-".
# "+" against a "-" returns "0".
# Return the string of characters.
```

**Examples**

```
("--++--", "++--++") ➞ "000000"

("-+-+-+", "-+-+-+") ➞ "-+-+-+"

("-++-", "-+-+") ➞ "-+00"
```

**Notes**

The two strings will be the same length.

## My Solution

**JavaScript**

```js
const neutralise = (s1, s2) => s1.replace(/./g, (match, idx) => (match !== s2[idx] ? '0' : match));
```

```js
const neutralise = (s1, s2) => [...s1].reduce((acc, cur, idx) => acc + (cur === s2[idx] ? cur : '0'), '');
```

**Python**

```py
def neutralise(s1, s2):
    result = ''
    for i in range(0, len(s1)):
        if s1[i] != s2[i]:
            result += '0'
        else:
            result += '-' if s1[i] == '-' else '+'
    return result
```

### User Solution

**JavaScript**

```js
const neutralise = (str1, str2) => str1.replace(/./g, (chr, idx) => +(chr === str2[idx]) && chr);
```

**Python**

```py
def neutralise(s1, s2):
    return ''.join('0' if i != j else i for i, j in zip(s1, s2))
```
