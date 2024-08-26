# [Count Repeats](https://www.codewars.com/kata/598ee7b6ec6cb90dd6000061)

## Description

Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

_Note:_ This includes any characters

## Examples

    'abbbbc'  => 'abc'    #  answer: 3
    'abbcca'  => 'abca'   #  answer: 2
    'ab cca'  => 'ab ca'  #  answer: 1

## My Solution

**JavaScript**

```js
const countRepeats = (str) => {
  let result = 0;

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === str[i]) result++;
  }

  return result;
};
```

**Python**

```py
def count_repeats(txt):
    return sum(txt[i] == txt[i - 1] for i in range(1, len(txt)))
```

```py
def count_repeats(txt):
    result = 0

    for i in range(1, len(txt)):
        if txt[i] == txt[i - 1]:
            result += 1

    return result
```

### User Solution

**JavaScript**

```js
function countRepeats(str) {
  return (str.match(/(.)(?=\1)/g) || []).length;
}
```
