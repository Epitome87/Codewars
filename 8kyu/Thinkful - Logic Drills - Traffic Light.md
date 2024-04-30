# [Thinkful - Logic Drills: Traffic Light](https://www.codewars.com/kata/58649884a1659ed6cb000072)

## Description

You're writing code to control your town's traffic lights. You need a function to handle each change from `green`, to `yellow`, to `red`, and then to `green` again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is `green`, output should be `yellow`.

## My Solution

**JavaScript**

```js
const updateLight = (current) => ({ green: 'yellow', yellow: 'red', red: 'green' }[current]);
```

```js
const updateLight = (current) => (current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green');
```

```js
const updateLight = (current) => {
  switch (current) {
    case 'green':
      return 'yellow';
    case 'yellow':
      return 'red';
    case 'red':
      return 'green';
  }
};
```

**Python**

```py
def update_light(current):
    return {'green': 'yellow', 'yellow': 'red', 'red': 'green'}[current]
```

### User Solution

**Python**

```py
def update_light(current):
    lst = ['yellow', 'green', 'red']
    return lst[lst.index(current) - 1]
```
