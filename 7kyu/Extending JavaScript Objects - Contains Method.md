# [Extending JavaScript Objects: Contains Method](https://www.codewars.com/kata/5813189b50326e3657000213)

## Description

Your task is to extend JavaScript String object with a .contains(substr) method, so you can check if the string contains a substring.

By default, it has to be a case-insensitive check. But you also have to provide a second optional bool parameter, so the method would be able to do a case-sensitive check as well.

```js
'Hello, World!'.contains('Hel'); // true
'Hello, World!'.contains('wor'); // true
'Hello, World!'.contains('wor', true); // false (case-sensitive check)
'Hello, World!'.contains('a'); // false
```

## My Solution

**JavaScript**

```js
String.prototype.contains = function (substr, caseSensitive = false) {
  return caseSensitive ? this.includes(substr) : this.toLowerCase().includes(substr.toLowerCase());
};
```
