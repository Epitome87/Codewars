# [Negation of a Value](https://www.codewars.com/kata/58f6f87a55d759439b000073)

## Description

In programming you know the use of the logical negation operator (!), it reverses the meaning of a condition.

```js
!false = true
!!false = false
```

Your task is to complete the function 'negationValue()' that takes a string of negations with a value and returns what the value would be if those negations were applied to it.

```js
negationValue('!', false); //=> true
negationValue('!!!!!', true); //=> false
negationValue('!!', []); //=> true
```

Do not use the eval() function or the Function() constructor in JavaScript.

Note: Always return a boolean value, even if there're no negations.

## My Solution

**JavaScript**

```js
const negationValue = (string, value) => (string.length % 2 ? !value : !!value);
```

```js
const negationValue = (string, value) => [...string].reduce((acc, _) => !acc, value);
```

**Python**

```py
def negation_value(s, val):
    return not bool(val) if len(s) % 2 else bool(val)
```

### User Solution

**JavaScript**

```js
const negationValue = (string, value) => string.length % 2 == !value;
```

**Python**

```py
def negation_value(s, x):
    return len(s) % 2 ^ bool(x)
```

```py
def negation_value(str, val):
  return bool(not val if len(str) % 2 else val)
```
