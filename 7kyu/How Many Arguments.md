# [How Many Arguments](https://www.codewars.com/kata/5c44b0b200ce187106452139)

## Description

Write a function that returns the number of arguments it received.

```
args_count() --> 0
args_count('a') --> 1
args_count('a', 'b') --> 2
```

## My Solution

**JavaScript**

```js
const args_count = (...args) => args.length;
```

```js
function args_count() {
  return arguments.length;
}
```

**Python**

```py
def args_count(*args, **kwargs):
    return len(args) + len(kwargs)
```

## Takeaways

1. Note that "arguments" isn't available using arrow syntax!
