# [Double Char](https://www.codewars.com/kata/56b1f01c247c01db92000076)

## Description

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):

```
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
```

## My Solution

**JavaScript**

```js
const doubleChar = (str) => str.replace(/./g, (v) => v + v);
```

```js
const doubleChar = (str) => [...str].map((c) => c + c).join('');
```

```js
const doubleChar = (str) => [...str].reduce((acc, curr) => acc + curr.repeat(2), '');
```

**Python**

```py
def double_char(s):
    return ''.join([c * 2 for c in s])
```

### User Solution

**Python**

```py
def double_char(s):
    return ''.join(c * 2 for c in s)
```