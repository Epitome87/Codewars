# [Exclamation Marks Series #8](https://www.codewars.com/kata/57fafd0ed80daac48800019f)

## Description

Move all exclamation marks to the end of the sentence

**Examples**

```
remove("Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!!"
remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"
```

## My Solution

**JavaScript**

```js
const remove = (str) => str.replace(/[!]/g, '') + `${'!'.repeat(str.split('!').length - 1)}`;
```

### User Solution

**JavaScript**

```js
function remove(s) {
  return s.replace(/!/g, '') + s.replace(/[^!]/g, '');
}
```
