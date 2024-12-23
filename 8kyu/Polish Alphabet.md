# [Polish Alphabet](https://www.codewars.com/kata/57ab2d6072292dbf7c000039)

## Description

There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

```
ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
```

and print out the string without the use of the Polish letters.

For example:

```
"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
```

## My Solution

**JavaScript**

```js
const correctPolishLetters = (str) => str.replace(/[ąćęłńóśźż]/g, (c) => 'acelnoszz'['ąćęłńóśźż'.indexOf(c)]);
```

```js
const correctPolishLetters = (string) => {
  const dict = { ą: 'a', ć: 'c', ę: 'e', ł: 'l', ń: 'n', ó: 'o', ś: 's', ź: 'z', ż: 'z' };
  return string.replace(/[ąćęłńóśźż]/g, (match) => dict[match]);
};
```

```js
const correctPolishLetters = (string) => {
  const polishLetters = { ą: 'a', ć: 'c', ę: 'e', ł: 'l', ń: 'n', ó: 'o', ś: 's', ź: 'z', ż: 'z' };
  return string
    .split('')
    .map((c) => polishLetters[c] || c)
    .join('');
};
```

**Python**

```py
def correct_polish_letters(s):
    return s.translate(str.maketrans("ąćęłńóśźż", "acelnoszz"))
```

```py
def correct_polish_letters(st):
    polish_letters = { 'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z' }
    return ''.join(polish_letters.get(char, char) for char in st)
```
