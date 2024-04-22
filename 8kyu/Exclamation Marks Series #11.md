# [Exclamation Marks Series #11: Replace All Vowel to Exclamation Mark in the Sentence](https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed)

## Description

Replace all vowel to exclamation mark in the sentence. `aeiouAEIOU` is vowel.

**Examples**

```js
replace('Hi!') === 'H!!';
replace('!Hi! Hi!') === '!H!! H!!';
replace('aeiou') === '!!!!!';
replace('ABCDE') === '!BCD!';
```

## My Solution

**JavaScript**

```js
const replace = (s) => s.replace(/[aeoiu]/gi, '!');
```

**Python**

```py
import re

def replace_exclamation(st):
    return re.sub(r"[aeiou]", "!", st, flags=re.I)
```
