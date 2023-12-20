# [Unexpected Parsing](https://www.codewars.com/kata/54fdaa4a50f167b5c000005f)

## Description

Here is a piece of code:

```js
function getStatus(isBusy) {
  var msg = isBusy ? 'busy' : 'available';
  return;
  {
    status: msg;
  }
}
```

Expected Behaviour

Function should return a dictionary/Object/Hash with "status" as a key, whose value can : "busy" or "available" depending on the truth value of the argument is_busy.

But as you will see after clicking RUN or ATTEMPT this code has several bugs, please fix them.

## My Solution

**JavaScript**

```js
const getStatus = (isBusy) => ({ status: isBusy ? 'busy' : 'available' });
```

**Python**

```py
def get_status(is_busy):
    status = "busy" if is_busy else "available"
    return { 'status': status }
```

### User Solution

**Python**

```py
def get_status(is_busy): return {'status': ("busy" if is_busy else "available")}
```
