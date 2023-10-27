# [This Kata Is Broken](https://www.codewars.com/kata/58794dffb2ed48d83e00185b)

## Description

(Imagine the following spoken in the voice of GlaDOS from Portal...)

We regret to inform you that this next kata is impossible. Make no attempt to solve it.

Do not be fooled by anyone who tells you to "think outside the box" or "know when to break the rules." They obviously just want to encourage you to try so they can watch you fail.

Again, we apologize for this clearly broken kata.

## My Solution

**JavaScript**

```js
let i = 0;
const solution = () => 'GlaDOS'.charCodeAt(i++ % 6);
```

### User Solution

**JavaScript**

```js
const solution = (() => {
  var i = 0;
  return (_) => [71, 108, 97, 68, 79, 83][i++ % 6];
})();
```
