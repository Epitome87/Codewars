# [Uglify Word](https://www.codewars.com/kata/5ce6cf94cb83dc0020da1929)

## Description

In this kata, you have to make a function named uglify_word (uglifyWord in Java and Javascript). It accepts a string parameter.

**What does the uglify_word do?**

It checks the char in the given string from the front with an iteration, in the iteration it does these steps:

1. There is a flag and it will be started from 1.
2. Check the current char in the iteration index.
   - If it is an alphabet character [a-zA-Z] and the flag value is equal to 1, then change this character to upper case.
   - If it is an alphabet character [a-zA-Z] and the flag value is equal to 0, then change this character to lower case.
   - Otherwise, if it is not an alphabet character, then set the flag value to 1.
3. If the current char is an alphabet character, do a boolean not operation to the flag.
   After the iteration has done, return the fixed string that might have been changed in such iteration.

**Examples**

```js
uglify_word('aaa') === 'AaA';
uglify_word('AAA') === 'AaA';
uglify_word('BbB') === 'BbB';
uglify_word('aaa-bbb-ccc') === 'AaA-BbB-CcC';
uglify_word('AaA-BbB-CcC') === 'AaA-BbB-CcC';
uglify_word('eeee-ffff-gggg') === 'EeEe-FfFf-GgGg';
uglify_word('EeEe-FfFf-GgGg') === 'EeEe-FfFf-GgGg';
uglify_word('qwe123asdf456zxc') === 'QwE123AsDf456ZxC';
uglify_word('Hello World') === 'HeLlO WoRlD';
```

## My Solution

**JavaScript**

```js
// Overly-concise solution
const uglifyWord = (s, flag = 1) =>
  [...s].reduce(
    (acc, curr) =>
      /[a-z]/i.test(curr)
        ? ((flag = !flag), (acc += flag ? curr.toLowerCase() : curr.toUpperCase()))
        : ((flag = 1), (acc += curr)),
    ''
  );
```

```js
const uglifyWord = (s) => {
  let flag = 1;
  return [...s].reduce((acc, curr) => {
    if (/[a-z]/i.test(curr)) acc += ((flag = !flag), flag ? curr.toLowerCase() : curr.toUpperCase());
    else acc += ((flag = 1), curr);
    return acc;
  }, '');
};
```

```js
const uglifyWord = (s) => {
  let flag = 1;
  let result = '';

  for (let i = 0; i < s.length; i++) {
    if (/[a-z]/i.test(s[i])) {
      result += flag ? s[i].toUpperCase() : s[i].toLowerCase();
      flag = !flag;
    } else {
      result += s[i];
      flag = 1;
    }
  }

  return result;
};
```

### User Solution

**JavaScript**

```js
function uglifyWord(s) {
  return s.replace(/[a-z]+/gi, (x) => x.split``.map((y, i) => (i % 2 ? y.toLowerCase() : y.toUpperCase())).join``);
}
```
