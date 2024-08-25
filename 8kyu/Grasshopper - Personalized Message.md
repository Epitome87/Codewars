# [Grasshopper - Personalized Message](https://www.codewars.com/kata/5772da22b89313a4d50012f7)

## Description

Create a function that gives a personalized greeting. This function takes two parameters: `name` and `owner`.

Use conditionals to return the proper message:

| case              | return        |
| ----------------- | ------------- |
| name equals owner | 'Hello boss'  |
| otherwise         | 'Hello guest' |

## My Solution

**JavaScript**

```js
const greet = (name, owner) => `Hello ${name === owner ? 'boss' : 'guest'}`;
```

**Python**

```py
def greet(name, owner):
    return f'Hello {"boss" if name == owner else "guest"}'
```
