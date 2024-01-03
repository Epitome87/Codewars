# [Retrieve Array Value by Index with Default](https://www.codewars.com/kata/515ceaebcc1dde8870000001)

## Description

Complete the solution. It should try to retrieve the value of the array at the index provided. If the index is out of the array's max bounds then it should return the default value instead.

Example:

```
data = ['a', 'b', 'c']
solution(data, 1, 'd') # should == 'b'
solution(data, 5, 'd') # should == 'd'

# negative values work as long as they aren't out of the length bounds
solution(data, -1, 'd') # should == 'c'
solution(data, -5, 'd') # should == 'd'
```

## My Solution

**JavaScript** (Not available, but solution provided)

```js
const solution = (items, index, defaultValue) => items[index] || defaultValue;
```

**Python**

```py
def solution(items, index, default_value):
    try:
        return items[index]
    except IndexError:
        return default_value
```
