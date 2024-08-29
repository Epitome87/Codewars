# [Unscrambled Eggs](https://www.codewars.com/kata/55ea5650fe9247a2ea0000a7)

## Description

Unscramble the eggs.

The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

**Example**

    unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
    //             "B---eg---in---n---er---"

Kata is supposed to be for beginners to practice regular expressions, so commenting would be appreciated.

## My Solution

**JavaScript**

```js
const unscrambleEggs = (word) => word.replace(/egg/g, '');
```

**Python**

```py
def unscramble_eggs(word):
    return word.replace('egg', '')
```

```py
from re import sub

def unscramble_eggs(word):
    return sub(r'([^aieou])egg',r'\1', word)
```

```py
from re import sub

def unscramble_eggs(word):
    return sub("(?<=[^aeiou])egg", "", word)
```
