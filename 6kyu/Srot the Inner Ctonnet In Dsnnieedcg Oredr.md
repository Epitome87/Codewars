# [Srot the inner ctonnet in dsnnieedcg oredr](https://www.codewars.com/kata/5898b4b71d298e51b600014b)

## Description

You have to sort the inner content of every word of a string in descending order.

The inner content is the content of a word without first and the last char.

Some examples:

```
"sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
"wait for me"        -->  "wiat for me"
"this kata is easy"  -->  "tihs ktaa is esay"
```

Words are made up of lowercase letters.

The string will never be null and will never be empty. In C/C++ the string is always nul-terminated.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!

## My Solution

**JavaScript**

```js
const sortTheInnerContent = (words) =>
  words
    .split(' ')
    .map(
      (word) =>
        `${word[0]}${[...word.slice(1, -1)].sort((a, b) => b.localeCompare(a)).join('')}${
          word.length > 1 ? word.at(-1) : ''
        }`
    )
    .join(' ');
```

### User Solution

**JavaScript**

```js
function sortTheInnerContent(words) {
  return words.replace(/\B\w+(?=\w)/g, function (match) {
    return match.split('').sort().reverse().join('');
  });
}
```

```js
function sortTheInnerContent(s) {
  return s
    .split(' ')
    .map((s) =>
      s.length < 3
        ? s
        : s[0] +
          s
            .slice(1, s.length - 1)
            .split('')
            .sort()
            .reverse()
            .join('') +
          s[s.length - 1]
    )
    .join(' ');
}
```
