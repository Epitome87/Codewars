# [What Comes After?](https://www.codewars.com/kata/590f5b4a7bbb3e246000007d)

## Description

You will be given two inputs: a string of words and a letter. For each string, return the alphabetic character after every instance of letter(case insensitive).

If there is a number, punctuation or underscore following the letter, it should not be returned.

```js
If letter = 'r':
comes_after("are you really learning Ruby?") # => "eenu"
comes_after("Katy Perry is on the radio!")   # => "rya"
comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
comes_after("r8 your friend")                # => "i"
```

Return an empty string if there are no instances of letter in the given string.

Adapted from: Ruby Kickstart

## My Solution

**JavaScript**

```js
const comes_after = (str, l) =>
  [...str.slice(0, -1)].reduce(
    (acc, curr, idx) => (new RegExp(l, 'i').test(curr) && /[a-z]/i.test(str[idx + 1]) ? acc + str[idx + 1] : acc),
    ''
  );
```

```js
const comes_after = (str, l) => {
  let result = '';
  for (let i = 0; i < str.length - 1; i++) {
    if (new RegExp(l, 'i').test(str[i]) && /[a-z]/i.test(str[i + 1])) result += str[i + 1];
  }
  return result;
};
```

### User Solution

**JavaScript**

```js
function comes_after(str, l) {
  return (str.match(new RegExp(`(?<=${l})[a-z]`, 'gi')) || []).join('');
}
```

```js
function comes_after(str, l, rex = RegExp(l, 'i')) {
  return [...str].filter((c, i) => i && rex.test(str[i - 1]) && /[a-z]/i.test(c)).join``;
}
```
