# [Jenny's Secret Message](https://www.codewars.com/kata/55225023e1be1ec8bc000390)

## Description

Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?

## My Solution

**JavaScript**

```js
const greet = (name) => `Hello, ${name === 'Jonny' ? 'my love' : name}!`;
```

```js
const greet = (name) => (name === 'Johnny' ? 'Hello, my love!' : `Hello, ${name}!`);
```

**Python**

```py
greet = lambda name: f"Hello, {'my love' if name == 'Johnny' else name}!"
```

```py
greet = lambda name: "Hello, " + (name, "my love")[name == "Johnny"] + "!"
```

```py
def greet(name):
    if name == "Johnny":
        return "Hello, my love!"
    return "Hello, {name}!".format(name=name)
```
