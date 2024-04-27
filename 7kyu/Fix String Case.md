# [Fix String Case](https://www.codewars.com/kata/5b180e9fedaa564a7000009a)

## Description

In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

- make as few changes as possible.
- if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

For example:

```
solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
```

## My Solution

**JavaScript**

```js
const solve = (s) => {
  const lowers = s.match(/[a-z]/g);
  const numLowers = lowers ? lowers.length : 0;
  const numUppers = s.length - numLowers;

  return numUppers > numLowers ? s.toUpperCase() : s.toLowerCase();
};
```

```js
const solve = (s) => {
  const uppercase = s.toUpperCase();
  const numUppercase = s.split('').reduce((acc, curr, index) => (curr === uppercase[index] ? (acc += 1) : acc), 0);
  const numLowercase = s.length - numUppercase;

  return numUppercase > numLowercase ? uppercase : s.toLowerCase();
};
```

**Python**

```py
def solve(s):
    lower_length = len(list(c for c in s if c.islower()))
    return s.lower() if lower_length >= len(s) / 2 else s.upper()
```

```py
def solve(s):
    upper_length = len(list(c for c in s if c.isupper()))
    lower_length = len(list(c for c in s if c.islower()))
    return s.lower() if lower_length >= upper_length else s.upper()
```

### User Solution

**Python**

```py
def solve(s):
    return s.upper() if sum(i.isupper() for i in s) > len(s) / 2 else s.lower()
```
