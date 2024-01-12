# [Nickname Generator](https://www.codewars.com/kata/593b1909e68ff627c9000186)

## Description

Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

If the 3rd letter is a consonant, return the first 3 letters.

```js
nickname('Robert'); //=> "Rob"
nickname('Kimberly'); //=> "Kim"
nickname('Samantha'); //=> "Sam"
```

If the 3rd letter is a vowel, return the first 4 letters.

```js
nickname('Jeannie'); //=> "Jean"
nickname('Douglas'); //=> "Doug"
nickname('Gregory'); //=> "Greg"
```

If the string is less than 4 characters, return "Error: Name too short".

**Notes:**

- Vowels are "aeiou", so discount the letter "y".
- Input will always be a string.
- Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
- The input can be modified

## My Solution

**JavaScript**

```js
const nicknameGenerator = (name) =>
  name.length < 4 ? 'Error: Name too short' : 'aeiou'.includes(name[2]) ? name.slice(0, 4) : name.slice(0, 3);
```

**Python**

```py
import re

def nickname_generator(name):
    return "Error: Name too short" if len(name) < 4 else re.match("\w{2}([^aeiou]|[aeiou]\w)", name)[0]
```

```py
def nickname_generator(name):
    return "Error: Name too short" if len(name) < 4 else name[:3] if name[2] not in "aeiou" else name[:4]
```

### User Solution

**JavaScript**

```js
const nicknameGenerator = (name) =>
  name.length > 3 ? name.slice(0, 3 + 'aeiou'.includes(name[2])) : 'Error: Name too short';
```

```js
const nicknameGenerator = (n) => (n.length > 3 ? n.replace(/(..[^aeiou]|^.{4}).*/gi, '$1') : 'Error: Name too short');
```

```js
function nicknameGenerator(name) {
  return name.length < 4 ? 'Error: Name too short' : name.match(/^\w{2}([auoie]\w|[^auoie])/)[0];
}
```
