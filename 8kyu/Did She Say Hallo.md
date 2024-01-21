# [Did She Say Hallo?](https://www.codewars.com/kata/56a4addbfd4a55694100001f)

## Description

You received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?

Write a simple function to check if the string contains the word hallo in different languages.

These are the languages of the possible people you met the night before:

- hello - english
- ciao - italian
- salut - french
- hallo - german
- hola - spanish
- ahoj - czech republic
- czesc - polish

Notes:

- you can assume the input is a string.
- to keep this a beginner exercise you don't need to check if the greeting is a subset of word (Hallowen can pass the test)
- function should be case insensitive to pass the tests

## My Solution

**JavaScript**

```js
const validateHello = (greetings) => /hello|ciao|salu|hallo|hola|ahoj|czesc/i.test(greetings);
```

**Python**

```py
import re

def validate_hello(greetings):
    return re.search("hello|ciao|salu|hallo|hola|ahoj|czesc", greetings, flags=re.I) != None
```

### User Solution

**Python**

```py
def validate_hello(greetings):
    return any(x in greetings.lower() for x in ['hello','ciao','salut','hallo','hola','ahoj','czesc'])
```
