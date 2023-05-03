# [Exclamation Marks Series #7](https:/s/www.codewars.com/kata/57fafb6d2b5314c839000195)

## Description

Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

**Examples**

```
remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"
```

## My Solution

**JavaScript**

```js
const remove = (string) =>
  string
    .split(' ')
    .filter((word) => !(word.includes('!') && word.indexOf('!') === word.lastIndexOf('!')))
    .join(' ');
```

### User Solution

**JavaScript**

```js
function remove(s) {
  return s
    .split(' ')
    .filter((i) => i.split('!').length != 2)
    .join(' ');
}
```
