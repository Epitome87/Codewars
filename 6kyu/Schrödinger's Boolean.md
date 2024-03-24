# [Schrödinger's Boolean](https://www.codewars.com/kata/5a5f9f80f5dc3f942b002309)

## Description

Can a value be both `true` and `false`?

Define `omniBool` so that it returns `true` for the following:

```js
omniBool == true && omniBool == false;
```

## My Solution

**JavaScript**

```js
const omnibool = { valueOf: () => (this.hasBeenCalled = !this.hasBeenCalled), hasBeenCalled: false };
```

```js
let hasBeenCalled = false;
const obj = {};
obj.valueOf = () => (!hasBeenCalled ? (hasBeenCalled = true) : false);
const omnibool = obj;
```

### User Solution

**JavaScript**

```js
const omnibool = {
  val: false,
  valueOf() {
    return (this.val ^= 1);
  },
};
```
