# [Fix the Loop!](https://www.codewars.com/kata/55ca43fb05c5f2f97f0000fd)

## Description

Your colleague wrote an simple loop to list his favourite animals. But there seems to be a minor mistake in the grammar, which prevents the program to work. Fix it! :)

If you pass the list of your favourite animals to the function, you should get the list of the animals with orderings and newlines added.

For example, passing in:

```py
animals = [ 'dog', 'cat', 'elephant' ]
```

will result in:

```py
list_animals(animals) == '1. dog\n2. cat\n3. elephant\n'
```

Starter (bugged) code:

```py
def list_animals(animals):
    lst = ''
    for i in range(animals):
        lst += str(i + 1) + '. ' + animals[i] + '\n'
    return lst
```

## My Solution

**Python**

```py
def list_animals(animals):
    return ''.join([f"{str(i + 1)}. {animals[i]}\n" for i in range(len(animals))])
```
