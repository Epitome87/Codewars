# [The 'if' Function](https://www.codewars.com/kata/54147087d5c2ebe4f1000805)

## Description

Create a function called `_if` which takes 3 arguments: a boolean value `bool` and 2 functions (which do not take any parameters): `func1` and `func2`

When `bool` is truth-ish, `func1` should be called, otherwise call the `func2`.

Example:

```js
_if(
  true,
  function () {
    console.log('True');
  },
  function () {
    console.log('false');
  }
);
// Logs 'True' to the console.
```

## My Solution

**JavaScript**

```js
const _if = (bool, func1, func2) => (bool ? func1() : func2());
```

**Python**

```py
def _if(bool, func1, func2):
    [func2, func1][bool]()
```

```py
def _if(bool, func1, func2):
    func1() if bool else func2()
```
