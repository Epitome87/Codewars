# [Reverse Words](https://www.codewars.com/kata/5259b20d6021e9e14c0010d4)

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples

```js
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
```

## My Solution

**JavaScript**

```js
const reverseWords = (str) =>
  str
    .split(' ')
    .map((word) => [...word].reverse().join(''))
    .join(' ');
```

**Python**

```py
def reverse_words(text):
    return ' '.join([x[::-1] for x in text.split(' ')])
```
