# [5 Without Alphanums!!!](https://www.codewars.com/kata/5a751a31373c2e645b000096)

## Description

Write a function/proc/lambda called \_ that always returns 5.

Sounds easy right? Just bear in mind that you can only use the following characters:

```
~!@#$%^&*()-_+=[]\{}|:;"'<,>.?/`
```

## My Solution

**JavaScript**

```js
_ = () => ('' == '') + ('' == '') + ('' == '') + ('' == '') + ('' == '');
```

### User Solution

**JavaScript**

```js
_ = (_) => -~-~-~-~-~[];
```

```js
_ = (__) => !'' + !'' + !'' + !'' + !'';
```

## Takeaways:

1. Some odd results when not using parenthesis in my solution, and I don't understand why.
2. In the user's solution, it's odd that !'' + !'' equals 2, while !'' + '' equals "true" -- why?
   - _Update_: That's because an empty string is falsy. When we negate that with the ! operator, it becomes true. `true` + `true` is 2, as both booleans are coerced to an integer. With `!'' + ''`, we have a boolean + a string. This will result in a string of "true".
