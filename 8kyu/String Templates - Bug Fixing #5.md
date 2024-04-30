# [String Templates - Bug Fixing #5]()

## Description

Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

Original (bugged) code:

```js
function buildString(...template) {
  return `I like #{template.join(',')}!`;
}
```

## My Solution

**JavaScript**

```js
const buildString = (...template) => `I like ${template.join(', ')}!`;
```

**Python**

```py
def build_string(*args):
    return f'I like {", ".join(args)}!'
```
