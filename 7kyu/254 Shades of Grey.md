# [254 Shades of Grey](https://www.codewars.com/kata/54d22119beeaaaf663000024)

Why would we want to stop to only 50 shades of grey? Let's see to how many we can go.

Write a function that takes a number n as a parameter and return an array containing n shades of grey in hexadecimal code (#aaaaaa for example). The array should be sorted in ascending order starting with '#010101', '#020202', etc. (using lower case letters).

Examples:

```
n =  1:    ["#010101"]
n = 10:    ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606", "#070707", "#080808", "#090909", "#0a0a0a"]
```

As a reminder, the grey color is composed by the same number of red, green and blue: #010101, #aeaeae, or #555555.

Black: #000000 and white: #ffffff are not accepted values.

When n is negative, just return an empty array. If n is higher than 254, just return an array of 254 elements.

## My Solution

**JavaScript**

```js
const shadesOfGrey = (n) =>
  Array.from({ length: n < 0 ? 0 : Math.min(n, 254) }, (_, i) => `#${(++i).toString(16).padStart(2, '0').repeat(3)}`);
```

```js
const shadesOfGrey = (n) =>
  n < 0
    ? []
    : Array.from({ length: Math.min(n, 254) }, (_, i) => `#${(i + 1).toString(16).padStart(2, '0').repeat(3)}`);
```

### User Solution

**JavaScript**

```js
function shadesOfGrey(n) {
  var shades = [];

  for (var i = 1; i <= Math.min(n, 254); i++) {
    var grey = ('0' + i.toString(16)).slice(-2);
    shades.push('#' + grey + grey + grey);
  }

  return shades;
}
```
