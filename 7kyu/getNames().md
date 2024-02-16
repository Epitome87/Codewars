# [getNames()](https://www.codewars.com/kata/514a677421607afc99000002)

## Description

The following code is not giving the expected results. Can you debug what the issue is?

The following is an example of data that would be passed in to the function.

Original (bugged) JavaScript code:

```js
var data = [
  { name: 'Joe', age: 20 },
  { name: 'Bill', age: 30 },
  { name: 'Kate', age: 23 },
];

getNames(data); // should return ['Joe', 'Bill', 'Kate']
```

Original (bugged) Python code:

```py
def itemgetter(item):
    item['name']

def get_names(data):
    return list(map(itemgetter, data))
```

## My Solution

**JavaScript**

```js
const getNames = (data) => data.map((item) => item.name);
```

**Python**

```py
def get_names(data):
    return list(map(lambda item: item['name'], data))
```
