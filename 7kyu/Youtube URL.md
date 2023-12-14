# [Youtube URL](https://www.codewars.com/kata/58a0697ef636cac09c000014)

## Description

There are many kinds of links to the video:

```
https://www.youtube.com/embed/UN8oLGBNXpE - is correct for iframe
https://www.youtube.com/watch?v=UN8oLGBNXpE
http://www.youtube.com/watch?v=UN8oLGBNXpE
https://youtu.be/UN8oLGBNXpE
```

If we insert the first link in the iframe, it works, but another do not work.

Task:

Please write a function that converts the string in the correct format for the iframe.

## My Solution

**JavaScript**

```js
const makeYoutubeLink = (str) => `https://www.youtube.com/embed/${str.split(/[=/]/).at(-1)}`;
```

```js
const makeYoutubeLink = (str) => {
  const baseURL = 'https://www.youtube.com/embed/';
  const parts = str.split(/[=/]/);
  return `${baseURL}${parts[parts.length - 1]}`;
};
```

### User Solution

**JavaScript**

```js
function makeYoutubeLink(str) {
  return str.replace(/^.+?(\w+)$/, 'https://www.youtube.com/embed/$1');
}
```

```js
function makeYoutubeLink(str) {
  return `https://www.youtube.com/embed/${str.match(/\w+$/)}`;
}
```
