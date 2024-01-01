# [Who Ate the Cookie?](https://www.codewars.com/kata/55a996e0e8520afab9000055)

## Description

For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach" ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog" ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"

Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is a string)

Note: Make sure you return the correct message with correct spaces and punctuation.

## My Solution

**JavaScript**

```js
const cookie = (x) => {
  let result = '';

  switch (typeof x) {
    case 'string':
      result = 'Zach';
      break;
    case 'number':
      result = 'Monica';
      break;
    default:
      result = 'the dog';
  }

  return `Who ate the last cookie? It was ${result}!`;
};
```

**Python**

```py
def cookie(x):
    return f"Who ate the last cookie? It was {'Zach' if type(x) == str else ('Monica' if type(x) == int or type(x) == float else 'the dog')}!"
```

```py
def cookie(x):
    who = "the dog"
    if type(x) == str:
        who = "Zach"
    if type(x) == float or type(x) == int:
        who = "Monica"
    return f"Who ate the last cookie? It was {who}!"
```

### User Solution

**JavaScript**

```js
function cookie(x) {
  var t = typeof x;
  var who = t == 'string' ? 'Zach' : t == 'number' ? 'Monica' : 'the dog';
  return `Who ate the last cookie? It was ${who}!`;
}
```

**Python**

```py
def cookie(x):
    return "Who ate the last cookie? It was %s!" % {str:"Zach", float:"Monica", int:"Monica"}.get(type(x), "the dog")
```

```py
def cookie(x):
  return f'Who ate the last cookie? It was {"Zach" if type(x) is str else "Monica" if type(x) in [int, float] else "the dog"}!'
```
