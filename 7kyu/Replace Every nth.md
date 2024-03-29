# [Replace Every nth](https://www.codewars.com/kata/57fcaed83206fb15fd00027a)

## Description

**Task**

Write a method, that replaces every nth char oldValue with char newValue.

**Inputs**

- text: the string to modify
- n: change the target letter every nth occurrencies
- old_value (or similar): the targetted character
- new_value (or similar): the character to use as replacement

Note for untyped languages: all inputs are always valid and of their expected type.

**Rules**

- Your method has to be case sensitive!
- If n is 0 or negative or if it is larger than the count of the oldValue, return the original text without a change.

**Example**

```
n:         2
old_value: 'a'
new_value: 'o'
"Vader said: No, I am your father!"
  1     2          3        4       -> 2nd and 4th occurence are replaced
"Vader soid: No, I am your fother!"
```

As you can see in the example: The first changed is the 2nd 'a'. So the start is always at the nth suitable char and not at the first!

## My Solution

**JavaScript**

```js
const replaceNth = (text, n, oldVal, newVal) => (
  (count = 0), n < 1 ? text : text.replace(new RegExp(oldVal, 'g'), (val) => (++count % n ? val : newVal))
);
```

```js
const replaceNth = (text, n, oldValue, newValue) => {
  if (n < 1) return text;
  let count = 0;
  return [...text].map((char) => (char === oldValue ? (++count % n ? char : newValue) : char)).join('');
};
```

```js
const replaceNth = (text, n, oldValue, newValue) => {
  let count = 0;
  return text
    .split('')
    .map((char) => {
      if (char === oldValue) {
        return ++count === n ? ((count = 0) ? _ : newValue) : char;
      } else return char;
    })
    .join('');
};
```
