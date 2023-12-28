# [Enumerable Magic #30 - Split that Array!](https://www.codewars.com/kata/545b342082e55dc9da000051)

## Description

Create a method partition that accepts a list and a method/block. It should return two arrays: the first, with all the elements for which the given block returned true, and the second for the remaining elements.

Here's a simple Ruby example:

```
animals = ["cat", "dog", "duck", "cow", "donkey"]
partition(animals){|animal| animal.size == 3}
    #=> [["cat", "dog", "cow"], ["duck", "donkey"]]
```

The equivalent in Python would be:

```
animals = ['cat', 'dog', 'duck', 'cow', 'donkey']
partition(animals, lambda x: len(x) == 3)
    # (['cat', 'dog', 'cow'], ['duck', 'donkey'])
```

If you need help, here's a reference:

http://www.rubycuts.com/enum-partition

## My Solution

**Python**

```py
def partition(arr, classifier_method):
    return ([x for x in arr if classifier_method(x)], [x for x in arr if not classifier_method(x)])
```

```py
def partition(arr, classifier_method):
    result = ([], [])
    for x in arr:
        if classifier_method(x):
            result[0].append(x)
        else:
            result[1].append(x)
    return result
```
