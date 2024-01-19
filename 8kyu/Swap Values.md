# [Swap Values](https://www.codewars.com/kata/5388f0e00b24c5635e000fc6)

## Description

I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

Can you figure out what's wrong here?

**JavaScript**

```js
function swapValues(arr) {
  [arr[0], arr[1]] = [arr[1], arr[0]];
}
```

```js
function swapValues() {
  var args = Array.prototype.slice.call(arguments);
  var temp = args[0][0];
  args[0][0] = args[0][1];
  args[0][1] = temp;
}
```

**Python**

```py
def swap_values(args):
    temp = args[0]
    args[0] = args[1]
    args[1] = temp
```

### User Solution

**JavaScript**

```js
function swapValues() {
  return arguments[0].reverse();
}
```

**Python**

```py
def swap_values(args):
    args[0], args[1] = args[1], args[0]
    return args
```
