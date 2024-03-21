# [Remove the Parentheses](https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8)

## Description

In this kata you are given a string for example:

```
"example(unwanted thing)example"
```

Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

```
"exampleexample"
```

**Notes**

- Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
- There can be multiple parentheses.
- The parentheses can be nested.

## My Solution

**JavaScript**

```js
const removeParentheses = (s) => {
  let deleteCount = 0;
  let result = '';

  for (let c of [...s]) {
    if (c === '(') deleteCount++;
    else if (c === ')') deleteCount--;
    else if (deleteCount < 1) result += c;
  }

  return result;
};
```

**Python**

```py
def remove_parentheses(st):
    delete_count = 0
    result = ""

    for char in st:
        if char == "(": delete_count += 1
        elif char == ")": delete_count -= 1
        elif delete_count < 1: result += char

    return result
```

### User Solution

**JavaScript**

```js
const removeParentheses = (s) => (s.includes('(') ? removeParentheses(s.replace(/\([^()]*?\)/, '')) : s);
```
