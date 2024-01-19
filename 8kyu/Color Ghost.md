# [Color Ghost](https://www.codewars.com/kata/53f1015fa9fe02cbda00111a)

## Description

Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

```js
ghost = new Ghost();
ghost.color; //=> "white" or "yellow" or "purple" or "red"
```

## My Solution

**JavaScript**

```js
const Ghost = function () {
  this.color = ['white', 'yellow', 'purple', 'red'][Math.floor(Math.random() * 4)];
};
```

```js
class Ghost {
  constructor() {
    this.color = [`red`, `yellow`, `purple`, `white`][(Math.random() * 4) ^ 0];
  }
}
```

```js
class Ghost {
  constructor() {
    const ranNum = Math.floor(Math.random() * 4);
    this.color = ranNum === 0 ? 'white' : ranNum === 1 ? 'yellow' : ranNum === 2 ? 'purple' : 'red';
  }
}
```

**Python**

```py
import random

class Ghost(object):
    def __init__(self):
        self.color = random.choice(['white', 'yellow', 'purple', 'red'])
```
