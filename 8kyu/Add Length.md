# [Add Length](https://www.codewars.com/kata/559d2284b5bb6799e9000047)

## Description

What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

**Example (Input --> Output)**

```
"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
```

Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.

## My Solution

**JavaScript**

```js
const addLength = (str) => str.split(' ').map((s) => s + ' ' + s.length);
```

```js
const addLength = (str) => str.split(' ').reduce((acc, curr) => [...acc, `${curr} ${curr.length}`], []);
```

**Python**

```py
add_length = lambda str: [f"{word} {len(word)}" for word in str.split(' ')]
```

### User Solution

**Python**

```py
def add_length(s):
    return ['%s %d' % (x, len(x)) for x in s.split()]
```
