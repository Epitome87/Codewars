# !a == a?!

## Description

You task to pass only this tests:

- `a == false`
- `!a == false`
- `a == !a`

## My Solution

```js
const a = [];
```

### User Solution

```js
const a = ' ';
const a = '0';
const a = new Boolean();
const a = {
  num: true,
  valueOf: function () {
    return !this.num;
  },
};
```

## Takeaways

1. This Kata could be a useful JavaScript quirk to know. We basically are looking for a value that is false, it's opposite is false, yet itself and its opposite are equal to one another! This is due to the type coercion done when comparing types: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Loose_equality_using
