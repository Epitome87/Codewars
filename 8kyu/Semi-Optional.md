# [Semi-Optional](https://www.codewars.com/kata/521cd52e790405a74800032c)

## Description

We have implemented a function wrap(value) that takes a value of arbitrary type and wraps it in a new JavaScript Object or Python Dict setting the 'value' key on the new Object or Dict to the passed-in value.

So, for example, if we execute the following code:

```py
wrapper_obj = wrap("my_wrapped_string");
 # wrapper_obj should be  {"value":"my_wrapped_string"}
```

We would then expect the following statement to be true:

```py
wrapper_obj["value"] == "my_wrapped_string"
```

Unfortunately, the code is not working as designed. Please fix the code so that it behaves as specified.

## My Solution

**JavaScript**

```js
const wrap = (value) => ({ value });
```

**Python**

```py
def wrap(value):
    return { 'value': value }
```

## Takeaways

1. The bracket of the return of an object must be on the same line as the return keyword!
2. Using short-hand syntax of an arrow function with an object, we have to use parenthesis.
3. For Python, the issue was `value` was not enclosed in quotes -- as all key names must be strings.
