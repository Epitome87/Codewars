# [Valid Braces](https://www.codewars.com/kata/5277c8a221e209d3f6000b56)

## Description

Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

**What is considered Valid?**

A string of braces is considered valid if all braces are matched with the correct brace.

**Examples**

```
"(){}[]" => True
"([{}])" => True
"(}" => False
"[(])" => False
"[({})](]" => False
```

## My Solution

**JavaScript**

```js
const validBraces = (braces) => {
  const pairs = { '(': ')', '{': '}', '[': ']' };
  const stack = [];

  for (let char of braces) {
    if (pairs[char]) stack.push(char);
    else {
      if (char !== pairs[stack.pop()]) {
        return false;
      }
    }
  }

  return !stack.length;
};
```

```js
const validBraces = (braces) => {
  while (braces.includes('()') || braces.includes('{}') || braces.includes('[]')) {
    braces = braces.replace('()', '').replace('{}', '').replace('[]', '');
  }

  return braces.length === 0 ? true : false;
};
```

**Python**

```py
def valid_braces(string):
    pairs = { '(': ')', '{': '}', '[': ']' }
    stack = []

    for char in string:
        if char in pairs:
            stack.append(char)
        else:
            if not len(stack) or char != pairs[stack.pop()]:
                return False

    return len(stack) == 0
```

### User Solution

**JavaScript**

```js
function validBraces(braces) {
  while (/\(\)|\[\]|\{\}/g.test(braces)) {
    braces = braces.replace(/\(\)|\[\]|\{\}/g, '');
  }
  return !braces.length;
}
```
