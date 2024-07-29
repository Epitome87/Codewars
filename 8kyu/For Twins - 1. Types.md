# [For Twins: 1. Types](https://www.codewars.com/kata/59c1302ecb7fb48757000013)

## Description

**Prolog:**

This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!

**Task:**

Write a function that will accept two parameters: `variable` and `type` and check if type of `variable` is matching `type`. Return `true` if types match or `false` if not.

**Examples:**

```
42, "number"   --> true
"42", "number" --> false
```

## My Solution

**JavaScript**

```js
const typeValidation = (variable, type) => typeof variable === type;
```

**Python**

```py
def type_validation(variable, _type):
    return str(variable.__class__.__name__) in _type
```

### User Solution

**Python**

```py
def type_validation(variable, _type):
    return type(variable).__name__ == _type
```

```py
def type_validation(variable, _type):
    return _type in str(type(variable))
```
