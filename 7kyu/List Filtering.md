# [List Filtering](https://www.codewars.com/kata/53dbd5315a3c69eed20002dd)

## Description

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example

```js
filter_list([1, 2, 'a', 'b']) == [1, 2];
filter_list([1, 'a', 'b', 0, 15]) == [1, 0, 15];
filter_list([1, 2, 'aasf', '1', '123', 123]) == [1, 2, 123];
```

## My Solution

**JavaScript**

```js
const filter_list = (list = list.filter(Number.isInteger));
```

```js
const filter_list = (l) => l.filter((item) => typeof item === 'number');
```

**Python**

```py
def filter_list(list):
    return [x for x in list if type(x) is int]
```
