# [Print a Rectangle Using Asterisks](https://www.codewars.com/kata/5937ae46377144bb2f000029)

## Description

Write a method that, given two arguments, width and height, returns a string representing a rectangle with those dimensions.

The rectangle should be filled with spaces, and its borders should be composed of asterisks (\*).

For example, the following call:

```
getRectangleString(3, 3);
```

Should return the following string:

```
***
* *
***
```

End each line of the string (including the last one) with a carriage return-line feed combination.

Note: You may assume that width and height will always be greater than zero.

## My Solution

**JavaScript**

```js
const getRectangleString = (width, height) =>
  Array.from({ length: height }, (_, i) =>
    i === 0 || i === height - 1 ? '*'.repeat(width) : `*${' '.repeat(width - 2)}*`
  ).join('\r\n') + '\r\n';
```

```js
const getRectangleString = (width, height) => {
  let rect = '';

  for (let i = 0; i < height; i++) {
    if (i === 0 || i === height - 1) rect += '*'.repeat(width);
    else rect += '*' + ' '.repeat(width - 2) + '*';
    rect += '\r\n';
  }

  return rect;
};
```
