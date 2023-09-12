# [Remove HTML Tags Using RegExp](https://www.codewars.com/kata/58488e89cc8feac6cb000941)

## Description

1. `<tag> and </tag>`
2. `<tag/>`
3. `<tag />`
4. html tags with attributes.

Don't trim space, tab etc.

**You have to use regexp.**

Tests are using function:

```js
String.prototype.replace(your regexp, "")
```

## My Solution

**JavaScript**

```js
const reg = /<[^>]*>/g;
```

### User Solution

**JavaScript**

```js
var reg = /<.+?>/g;
```
