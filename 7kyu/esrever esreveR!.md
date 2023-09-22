# [esrever esreveR!](https://www.codewars.com/kata/57e0206335e198f82b00001d)

## Description

In this kata you must take an input string, reverse the order of the words, and reverse the order of the letters within the words.

But, as a bonus, every test input will end with a punctuation mark (! ? .) and the output should be returned with the mark at the end.

A few examples should help clarify:

```js
esrever('hello world.') == 'dlrow olleh.';

esrever('Much l33t?') == 't33l hcuM?';

esrever('tacocat!') == 'tacocat!';
```

Quick Note: A string will always be passed in (though it may be empty) so no need for error-checking other types.

## My Solution

**JavaScript**

```js
const esrever = (str) =>
  str
    .slice(0, -1)
    .split(' ')
    .reverse()
    .map((el) => [...el].reverse().join(''))
    .join(' ') + str.slice(-1);
```

### User Solution

**JavaScript**

```js
function esrever(s) {
  return s.slice(0, -1).split('').reverse().join('') + s.slice(-1);
}
```
