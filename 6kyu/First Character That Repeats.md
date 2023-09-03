# [First Character That Repeats](https://www.codewars.com/kata/54f9f4d7c41722304e000bbb)

## Description

Find the first character that repeats in a String and return that character.

```
firstDup('tweet') => 't'
firstDup('like') => undefined
```

This is not the same as finding the character that repeats first. In that case, an input of 'tweet' would yield 'e'.

Another example:

In 'translator' you should return 't', not 'a'.

```
v      v
translator
  ^   ^
```

While second 'a' appears before second 't', the first 't' is before the first 'a'.

## My Solution

**JavaScript**

```js
const firstDup = (s) => [...s].find((char) => s.indexOf(char) !== s.lastIndexOf(char));
```

### User Solution

**JavaScript**

```js
function firstDup(s) {
  return s[s.search(/(.).*\1/)];
}
```

```js
const firstDup = (s) => s.split('').find((l, i) => s.lastIndexOf(l) > i);
```
