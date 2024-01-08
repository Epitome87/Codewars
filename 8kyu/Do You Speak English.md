# [Do You Speak "English"?](https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058)

## Description

Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.

## My Solution

**JavaScript**

```js
const spEng = (sentence) => /english/i.test(sentence);
```

```js
const spEng = (sentence) => sentence.toLowerCase().includes('english');
```

**Python**

```py
def sp_eng(sentence):
    return 'english' in sentence.lower()
```
