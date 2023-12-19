# [How Do I Compare Numbers?](https://www.codewars.com/kata/55d8618adfda93c89600012e)

## Description

What could be easier than comparing integer numbers? However, the given piece of code doesn't recognize some of the special numbers for a reason to be found. Your task is to find the bug and eliminate it.

Starting code:

```py
def what_is(x):
    if x is 42:
        return 'everything'
    elif x is 42 * 42:
        return 'everything squared'
    else:
        return 'nothing'
```

## My Solution

**Python**

```py
def what_is(x):
    if x is 42:
        return 'everything'
    elif x == 42 * 42:
        return 'everything squared'
    else:
        return 'nothing'
```

### User Solution

**Python**

```js
def what_is(x):
    if x == 42:
        return 'everything'
    elif x == 42 * 42:
        return 'everything squared'
    else:
        return 'nothing'
```
