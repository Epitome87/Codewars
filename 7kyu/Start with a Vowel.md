# [Start with a Vowel](https://www.codewars.com/kata/5a02e9c19f8e2dbd50000167)

## Description

Create a function that takes any sentence and redistributes the spaces (and adds additional spaces if needed) so that each word starts with a vowel. The letters should all be in the same order but every vowel in the sentence should be the start of a new word. The first word in the new sentence may start without a vowel. It should return a string in all lowercase with no punctuation (only alphanumeric characters).

**EXAMPLES**

```
'It is beautiful weather today!' => 'it isb e a ut if ulw e ath ert od ay'
'Coding is great' => 'c od ing isgr e at'
'my number is 0208-533-2325' => 'myn umb er is02085332325'
```

## My Solution

**JavaScript**

```js
const vowelStart = (str) =>
  str
    .toLowerCase()
    .replace(/[\W_]/g, '')
    .replace(/[aeiou]/g, ' $&')
    .trim();
```

```js
const vowelStart = (str) => (
  (str = str.replace(/ /g, '').toLowerCase()),
  [...str.slice(1)].reduce(
    (acc, curr) => (/[aeiou]/.test(curr) ? acc + ' ' + curr : /[a-z0-9]/.test(curr) ? acc + curr : acc),
    str[0]
  )
);
```

```js
function vowelStart(str) {
  str = str.replace(/ /g, '').toLowerCase();
  let result = str.slice(0, 1);

  for (let char of str.slice(1)) {
    const isValid = /[a-z0-9]/.test(char);
    if ('aeiou'.includes(char)) result += ' ' + char;
    else if (isValid) result += char;
  }
  return result;
}
```

**Python**

```py
import re

def vowel_start(st):
    return re.sub("[aeiou]", lambda m: f" {m[0]}", re.sub("[\W_]", "", st.lower())).strip()
```

### User Solution

**Python**

```py
from re import sub
def vowel_start(st):
    return sub(r'(?<=.)([aeiou])', r' \1', sub(r'[^a-z0-9]', '', st.lower()))
```
