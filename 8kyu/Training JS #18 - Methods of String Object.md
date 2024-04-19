# [Training JS #18 - Methods of String Object](https://www.codewars.com/kata/57280481e8118511f7000ffa)

## Description

Implement a function which accepts 2 arguments: string and separator.

The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

For example:

```js
splitAndMerge('My name is John', ' ') == 'M y n a m e i s J o h n';
splitAndMerge('My name is John', '-') == 'M-y n-a-m-e i-s J-o-h-n';
splitAndMerge('Hello World!', '.') == 'H.e.l.l.o W.o.r.l.d.!';
splitAndMerge('Hello World!', ',') == 'H,e,l,l,o W,o,r,l,d,!';
```

## My Solution

**JavaScript**

```js
const splitAndMerge = (str, separator) =>
  str
    .split(' ')
    .map((word) => [...word].join(separator))
    .join(' ');
```

**Python**

```py
def split_and_merge(string, separator):
    return " ".join(separator.join(char for char in word) for word in string.split())
```

### User Solution

**Python**

```py
def split_and_merge(string, sp):
    return ' '.join(sp.join(word) for word in string.split())
```

## Takeaways

1. The `join` method in Python can directly accept a string; no need to turn it into a list first! The same cannot be said with the JavaScript equivalent.
