# [Convert String to Camel Case](https://www.codewars.com/kata/517abf86da9663f1d2000003)

## Description

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples

`"the-stealth-warrior"` gets converted to `"theStealthWarrior"`
`"The_Stealth_Warrior"` gets converted to `"TheStealthWarrior"`
`"The_Stealth-Warrior"` gets converted to `"TheStealthWarrior"`

## My Solution

**JavaScript**

```js
const toCamelCase = (str) => str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
```

```js
const toCamelCase = (str) =>
  str
    .split(/[-_]/)
    .map((word, index) => (index > 0 ? word[0].toUpperCase() + word.slice(1) : word))
    .join('');
```

**Python**

```py
def to_camel_case(text):
    return "" if len(text) < 1 else text[0] + text.title()[1:].replace("-", "").replace("_", "")
```

### User Solution

**Python**

```py
import re
def to_camel_case(text):
    return re.sub('[_-](.)', lambda x: x.group(1).upper(), text)
```
