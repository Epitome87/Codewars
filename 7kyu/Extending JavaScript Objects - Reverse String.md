# [Extending JavaScript Objects: Reverse String](https://www.codewars.com/kata/581270cb4927602fc800005a)

## Description

Unfortunately, there's no a .reverse() method for the JavaScript String object.

Your task is to extend JavaScript String object, so you can reverse strings just like this:

```js
'Hello, World!'.reverse();
```

The method should return:

```js
'!dlroW ,olleH';
```

## My Solution

**JavaScript**

```js
String.prototype.reverse = function () {
  return [...this].reverse().join('');
};
```
