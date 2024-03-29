# [A Letter's Best Friend](https://www.codewars.com/kata/64fc03a318692c1333ebc04c)

## Description

**Task**

Given a string, return if a given letter always appears immediately before another given letter.

**Worked Example**

```
("he headed to the store", "h", "e") ➞ True

# All occurences of "h": ["he", "headed", "the"]
# All occurences of "h" have an "e" after it.
# Return True

('abcdee', 'e', 'e') ➞ False

# For first "e" we can get "ee"
# For second "e" we cannot have "ee"
# Return False
```

**Examples**

```
("i found an ounce with my hound", "o", "u") ➞ True

("we found your dynamite", "d", "y") ➞ False
```

**Notes**

All sentences will be given in lowercase.

## My Solution

**TypeScript**

```js
export const bestFriend = (txt: string, a: string, b: string): boolean =>
  txt.split(a).length === txt.split(a + b).length;
```

**Python**

```py
def best_friend(txt, a, b):
    for i, c in enumerate(txt):
        if c == a and (i >= len(txt) - 1 or txt[i + 1] != b):
            return False
    return True
```

### User Solution

**Python**

```js
def best_friend(txt, a, b):
	return txt.count(a) == txt.count(a + b)
```
