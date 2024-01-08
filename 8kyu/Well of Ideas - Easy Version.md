# [Well of Ideas - Easy Version](https://www.codewars.com/kata/57f222ce69e09c3630000212)

## Description

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

## My Solution

**JavaScript**

```js
const well = (x) => (
  (numGood = x.filter((v) => v === 'good').length),
  numGood > 2 ? 'I smell a series!' : numGood > 0 ? 'Publish!' : 'Fail!'
);
```

```js
const well = (x) => {
  const numGoodIdeas = x.filter((idea) => idea === 'good').length;

  return numGoodIdeas > 2 ? 'I smell a series!' : numGoodIdeas >= 1 ? 'Publish!' : 'Fail!';
};
```

**Python**

```py
def well(x):
    good_count = x.count("good")
    return "I smell a series!" if good_count > 2 else "Publish!" if good_count > 0 else "Fail!"
```

```py
def well(x):
    good_count = x.count('good')
    if good_count > 2:
        return "I smell a series!"
    elif good_count > 0:
        return "Publish!"
    else:
        return "Fail!"
```
