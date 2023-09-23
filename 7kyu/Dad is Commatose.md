# [Dad is Commatose](https://www.codewars.com/kata/56a24b309f3671608b00003a)

## Description

Your dad doesn't really get punctuation, and he's always putting extra commas in when he posts. You can tolerate the run-on sentences, as he does actually talk like that, but those extra commas have to go!

Write a function called dadFilter that takes a string as argument and returns a string with the extraneous commas removed. The returned string should not end with a comma or any trailing whitespace.

## My Solution

**JavaScript**

```js
const dadFilter = (str) => str.trim().replace(/,{2,}/g, ',').replace(/,$/g, '');
```

### User Solution

**JavaScript**

```js
const dadFilter = (str) => str.replace(/,(?=,)|,\s*$/g, '');
```
