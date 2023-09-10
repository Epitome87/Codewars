# [Get Initials from Person Name](https://www.codewars.com/kata/57b56af6b69bfcffb80000d7)

## Description

Write function toInitials returs initials for a given person name. E.g: "Bill Gates" -> "B. G."

Note: initials should be separated with a space.

## My Solution

**JavaScript**

```js
const toInitials = (name) =>
  name
    .split(' ')
    .map((el) => `${el[0]}.`)
    .join(' ');
```

### User Solution

**JavaScript**

```js
const toInitials = (name) => name.replace(/(?<=\w)\w+/g, `.`);
```

```js
function toInitials(name) {
  return name.replace(/([a-z])[a-z]+/gi, '$1.');
}
```
