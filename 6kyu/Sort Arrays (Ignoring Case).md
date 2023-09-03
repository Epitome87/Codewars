# [Sort Arrays (Ignoring Case)](https://www.codewars.com/kata/51f41fe7e8f176e70d0002b9)

## Description

Sort the given `array of strings` in alphabetical order, case `insensitive`. For example:

```
["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
```

## My Solution

**JavaScript**

```js
const sortme = (names) => [...names].sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
```

### User Solution

**JavaScript**

```js
const sortme = (names) => names.sort(Intl.Collator().compare);
```
