# [Generate User Links](https://www.codewars.com/kata/57037ed25a7263ac35000c80)

## Description

Your task is to create userlinks for the url, you will be given a username and must return a valid link.

**Example**

    generate_link('matt c')
    http://www.codewars.com/users/matt%20c

**Reference**

Use this as a reference [encoding](http://www.w3schools.com/tags/ref_urlencode.asp)

## My Solution

**JavaScript**

```js
const generateLink = (user) => `http://www.codewars.com/users/${encodeURIComponent(user)}`;
```

**Python**

```py
import urllib.parse

def generate_link(user):
    return f'http://www.codewars.com/users/{urllib.parse.quote(user)}'
```
