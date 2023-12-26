# [Grasshopper - Combine Strings](https://www.codewars.com/kata/55f73f66d160f1f1db000059)

## Description

Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

Example:

```
combineNames('James', 'Stevens')
```

returns:

```
'James Stevens'
```

## My Solution

**JavaScrip**

```js
const combineNames = (first, last) => `${first} ${last}`;
```

**Python**

```py
combine_names = lambda first_name, last_name: f"{first_name} {last_name}"
```

```py
def combine_names(first_name, last_name):
    return f"{first_name} {last_name}"
```

### User Solution

**Python**

```py
def combine_names(*args):
    return ' '.join(args)
```
