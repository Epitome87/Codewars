# [We Need These Data Immediately!](https://www.codewars.com/kata/55e762cb8d89416b4300007c)

## Description

So we've had nifty-well-working javascript function

returnSomeData()
that was returning useful data, but recently it stopped work.

There is some strange error. Can you find it out, what has changed?

Tip: if in doubt, take a look at [Mozilla's Lexical Grammar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar) (thanks jpot for link!). Answer is somewhere here.

Starting (bugged) code:

```js
var time = Date.now()
var data = (function returnSomeData(time)
{
  return
  {
    name: '__B00013',
    timeStamp: time || 'unknown',
    type: 'raw',
    var1: 0x041451,
    var2: 0x00,
    var3: 0x00040
  }
})()
```

## My Solution

**JavaScript**

```js
var time = Date.now();
var data = (function returnSomeData(time) {
  return {
    name: '__B00013',
    timeStamp: time || 'unknown',
    type: 'raw',
    var1: 0x041451,
    var2: 0x00,
    var3: 0x00040,
  };
})();
```

## Takeaways

1. When returning an object, the starting curly-brace must be on the same line as the `return` keyword -- otherwise JavaScript assumes the curly-braces represent block scoping.
