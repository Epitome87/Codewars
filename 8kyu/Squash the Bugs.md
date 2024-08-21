# [Squash the Bugs](https://www.codewars.com/kata/56f173a35b91399a05000cb7)

## Description

Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.

## My Solution

**JavaScript**

```js
const findLongest = (s) => Math.max(...s.split(' ').map((x) => x.length));
```

```js
const findLongest = (str) => {
  const spl = str.split(' ');
  let longest = 0;

  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) longest = spl[i].length;
  }
  return longest;
};
```

**Python**

```py
def find_longest(string):
    longest = 0
    words = string.split(' ')

    for word in words:
        longest = max(longest, len(word))

    return longest
```
