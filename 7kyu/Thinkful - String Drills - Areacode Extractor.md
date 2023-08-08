# [Thinkful - String Drills: Areacode Extractor](https://www.codewars.com/kata/585a36b445376cbc22000072)

## Description

You've got a bunch of textual data with embedded phone numbers. Write a function `area_code()` that finds and returns just the area code portion of the phone number.

```
>>> message = "The supplier's phone number is (555) 867-5309"
>>> area_code(message)
'555'
```

The returned area code should be a string, not a number. Every phone number is formatted like in the example, and the only non-alphanumeric characters in the string are apostrophes ' or the punctuation used in the phone number.

## My Solution

**JavaScript**

```js
const areaCode = (text) => text.match(/\((?<area>[0-9]{3,})\)/).groups.area;
```

### User Solution

**JavaScript**

```js
function areaCode(text) {
  return text.slice(text.indexOf('(') + 1, text.indexOf(')'));
}
```

```js
function areaCode(text) {
  return text.match(/\((\d{3})\)/)[1];
}
```
