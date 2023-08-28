# [Simple Fun #182: Happy "g"](https://www.codewars.com/kata/58bcd27b7288983803000002)

## Description

**Task**

Let's say that "g" is happy in the given string, if there is another "g" immediately to the right or to the left of it.

Find out if all "g"s in the given string are happy.

**Example**

For str = "gg0gg3gg0gg", the output should be true.

For str = "gog", the output should be false.

**Input/Output**

- [input] string str

A random string of lower case letters, numbers and spaces.

- [output] a boolean value

true if all "g"s are happy, false otherwise.

## My Solution

**JavaScript**

```js
const gHappy = (str) => !/g/.test(str.replace(/g{2,}/g, ''));
```

```js
const gHappy = (str) => {
  const g = str.match(/g+/g) || [];
  return g.every((el) => el.length > 1);
};
```

### User Solution

**JavaScript**

```js
const gHappy = (str) => !/([^g]|^)g([^g]|$)/.test(str);
```
