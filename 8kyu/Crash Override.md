# [Crash Override](https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f)

## Description

Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

Your task is to create a function that, given a proper first and last name, will return the correct alias.

Notes:

- Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.
- If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."
- Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

```js
var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'
```

Happy hacking!

## My Solution

**JavaScript**

```js
const aliasGen = (first, last) => {
  const a = firstName[first.slice(0, 1).toUpperCase()];
  const b = surname[last.slice(0, 1).toUpperCase()];

  if (a && b) return `${a} ${b}`;
  return 'Your name must start with a letter from A - Z.';
};
```

**Python**

```py
def alias_gen(f_name, l_name):
    try: return f"{FIRST_NAME[f_name[0].upper()]} {SURNAME[l_name[0].upper()]}"
    except KeyError: return 'Your name must start with a letter from A - Z.'
```

### User Solution

**JavaScript**

```js
function aliasGen(a, b) {
  return /^[a-z]/i.test(a) && /^[a-z]/i.test(b)
    ? `${firstName[a[0].toUpperCase()]} ${surname[b[0].toUpperCase()]}`
    : 'Your name must start with a letter from A - Z.';
}
```

**Python**

```py
def alias_gen(f_name, l_name):
    first = FIRST_NAME.get(f_name[0].upper())
    last = SURNAME.get(l_name[0].upper())
    return '{} {}'.format(first, last) if first and last else \
        'Your name must start with a letter from A - Z.'
```
