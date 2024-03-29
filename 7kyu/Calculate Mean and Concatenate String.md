# [Calculate Mean and Concatenate String](https://www.codewars.com/kata/56f7493f5d7c12d1690000b6)

## Description

You will be given an array which will include both integers and characters.

Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number. There will always be 10 integers and 10 characters. Create a single string with the characters and return it as a[1] while maintaining the original order.

```
lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']
```

Here is an example of your return

```
[3.6, "udiwstagwo"]
```

In C# and Java the mean return is a double.

## My Solution

**JavaScript**

```js
const mean = (arr) => [
  arr.filter((x) => !isNaN(x)).reduce((sum, cur) => sum + +cur, 0) / 10,
  arr.filter((x) => isNaN(x)).join(''),
];
```

**Python**

```py
def mean(lst):
    ints = [int(x) for x in lst if x.isnumeric()]
    mean = sum(ints) / len(ints)
    chars = [x for x in lst if not x.isnumeric()]
    return [mean, ''.join(chars)]
```
