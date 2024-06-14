# [Unpacking Arguments](https://www.codewars.com/kata/540de1f0716ab384b4000828)

## Description

You must create a function, `spread`, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.

eg:

```js
spread(someFunction, [1, true, 'Foo', 'bar']);
// is the same as...
someFunction(1, true, 'Foo', 'bar');
```

## My Solution

**JavaScript**

```js
const spread = (func, args) => func(...args);
```

**Python**

```py
def spread(func, args):
    return func(*args)
```
