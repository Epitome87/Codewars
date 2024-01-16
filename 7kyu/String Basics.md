# [String Basics](https://www.codewars.com/kata/56326c13e63f90538d00004e)

## Description

Hey CodeWarrior,

we've got a lot to code today!

I hope you know the basic string manipulation methods, because this kata will be all about them.

Here we go...

**Background**

We've got a very long string, containing a bunch of User IDs. This string is a listing, which separates each user ID with a comma and a whitespace ("' "). Sometimes there are more than only one whitespace. Keep this in mind! Futhermore, some user Ids are written only in lowercase, others are mixed lowercase and uppercase characters. Each user ID starts with the same 3 letter "uid", e.g. "uid345edj". But that's not all! Some stupid student edited the string and added some hashtags (#). User IDs containing hashtags are invalid, so these hashtags should be removed!

**Task**

1. Remove all hashtags
2. Remove the leading "uid" from each user ID
3. Return an array of strings --> split the string
4. Each user ID should be written in only lowercase characters
5. Remove leading and trailing whitespaces

## My Solution

**JavaScript**

```js
const getUsersIds = (str) =>
  str
    .toLowerCase()
    .split(',')
    .map((id) => id.replace(/^[\s#]*uid|#/g, '').trim());
```

```js
const getUsersIds = (str) =>
  str
    .toLowerCase()
    .split(',')
    .map((val) => val.replace(/#/g, '').replace(/uid/, '').trim());
```

**Python**

```py
import re

def get_users_ids(string):
    return [re.sub(r"^[\s#]*uid|#", '', id).strip() for id in string.lower().split(',')]
```

### User Solution

**Python**

```py
def get_users_ids(string):
    return [w.replace("uid", "", 1).strip() for w in string.lower().replace("#", "").split(",")]
```

## Takeaways

1. If we don't need any fancy logic for string matching, we can use the built-in `str.replace()` method rather than the `re.sub()` method in the regex module.
