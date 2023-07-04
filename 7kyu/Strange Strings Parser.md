# [Strange Strings Parser!](https://www.codewars.com/kata/584d88622609c8bda30000cf)

## Description

Here you have a connected to a socket, and the data looks very strange. It seems to be separated by a random special character! Oh No! We need your help to find the special character, parse the data, and return it translated! There isn't much time, hurry we need your help!

## My Solution

**JavaScript**

```js
const wordSplitter = (string) => string.replace(/[^\w.-]/gi, ' ').split(' ');
```

### User Solution

**JavaScript**

```js
const wordSplitter = (str) => str.match(/[\w.-]+/g);
```

```js
function wordSplitter(string) {
  return string.split(/[^a-z\d.-]/i);
}
```
