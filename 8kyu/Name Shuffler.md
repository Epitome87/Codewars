# [Name Shuffler](https://www.codewars.com/kata/559ac78160f0be07c200005a)

## Description

Write a function that returns a string in which first name is swapped with last name.

Example(Input --> Output)

```
"john McClane" --> "McClane john"
```

## My Solution

**JavaScript**

```js
const nameShuffler = (str, strArray = str.split(' ')) => strArray[1] + ' ' + strArray[0];
```

```js
const nameShuffler = (str) => str.split(' ').reverse().join(' ');
```

**Python**

```py
def name_shuffler(str):
    first_name, last_name = str.split(' ');
    return f"{last_name} {first_name}"
```

### User Solution

**Python**

```py
def name_shuffler(str_):
    return ' '.join(str_.split(' ')[::-1])
```

```py
def name_shuffler(s):
    return ' '.join(reversed(s.split()))
```
