# [Convert Boolean Values to Strings 'Yes' or 'No'](https://www.codewars.com/kata/53369039d7ab3ac506000467)

## Description

Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

## My Solution

**JavaScript**

```js
const boolToWord = (bool) => (bool ? 'Yes' : 'No');
```

**Python**

```py
def bool_to_word(boolean):
    return ["No", "Yes"][boolean]
```

```py
def bool_to_word(boolean):
    return "Yes" if boolean else "No"
```
